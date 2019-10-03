const cheerio = require('cheerio');
const moment = require('moment');
const axios = require('axios');
const fs = require('fs');
const calendarSiteUrl = 'https://buh.ru/calendar/';

class Calendar {
  constructor(years, filePath = 'calendar.json') {
    this.years = years;
    this.filePath = filePath;
    this.generateUrls(years);
    this.dates = {};
  }

  generateUrls(years) {
    this.urls = years.map(year => `${calendarSiteUrl}${year}`);
  }

  workdaysCounter(accumulator, currentDate) {
    if (!currentDate.is_holiday) {
      accumulator += 1;
    }
    return accumulator;
  }

  async initCalendar() {
    if (fs.existsSync(this.filePath)) {
      this.dates = JSON.parse(fs.readFileSync(this.filePath));
    }
    await this.writeCalendar();
    console.log('Calendar was initialized');
  }

  async writeCalendar() {
    let isDirty = false;
    for (let index = 0; index < this.years.length; index += 1) {
      const year = this.years[index];
      if (!this.dates.hasOwnProperty(year) || !this.dates[year].length) {
        this.dates[year] = await this.createYear(`${calendarSiteUrl}${year}`) || [];
        isDirty = true;
      }
    }
    if (isDirty) this.writeToFile();
  }

  writeToFile() {
    fs.writeFile(this.filePath, JSON.stringify(this.dates), (err) => {
      if (err) return console.error('error', err);
    });
  }

  async createYear(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      // select all days elements from calendar
      const datesHtml = $('.ui-datepicker-calendar tbody > tr td > a[data-day]');
      const yearDates = datesHtml.map((i, date) => {
        const day = $(date).attr('data-day').replace('_', '-');
        // class .dtype16474 means working day
        return { day, is_holiday: !$(date).hasClass('dtype16474') };
      });
      return Array.from(yearDates);
    }
    catch (error) {
      console.error('getYear error: ', error);
      return [];
    }
  }

  getWorkdays({ dateFrom, dateTo } = {}) {
    const year = moment(dateFrom).get('year');
    const diffStart = moment(dateFrom, 'YYYY-MM-DD').diff(
      moment(this.dates[year][0].day, 'DD-MM-YYYY'),
      'days'
    );
    const diffEnd = moment(dateTo, 'YYYY-MM-DD').diff(dateFrom, 'days') + 2;
    const days = this.dates[year].slice(diffStart, diffEnd + diffStart);
    return days.reduce(this.workdaysCounter, 0);
  }
}

module.exports = {
  Calendar,
};
