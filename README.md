# russian-holiday-calendar
Календарь для получения русских праздников 

# Установка 
```
npm i russian-holiday-calendar --save
yarn add russian-holiday-calendar
```
# Использование
Создание календаря по определенному пути 
``` 
const calendarGenerator = new CalendarGenerator(years = [2018, 2019, 2020]);
calendarGenerator.initCalendar('my/path/calendar.json')
```
После создание календаря, возможен подсчет количества рабочих дней
```
calendarGenerator.calendar.getWorkdays(
    {dateFrom: 'Какая-то дата', dateTo: 'Какая-то дата'}
)
```

# Результат
Результат можно получить `calendarGenerator.calendar.dates` или считав из файла    
```
{
  "2018": [
    {
      "day": "01-01_2018",
      "is_holiday": true
    },
    {
      "day": "02-01_2018",
      "is_holiday": true
    },
    {
      "day": "03-01_2018",
      "is_holiday": true
    },
    {
      "day": "04-01_2018",
      "is_holiday": true
    },
    {
      "day": "05-01_2018",
      "is_holiday": true
    },
    {
      "day": "06-01_2018",
      "is_holiday": true
    },
    {
      "day": "07-01_2018",
      "is_holiday": true
    },
    {
      "day": "08-01_2018",
      "is_holiday": true
    },
    {
      "day": "09-01_2018",
      "is_holiday": false
    },
    {
      "day": "10-01_2018",
      "is_holiday": false
    },
    {
      "day": "11-01_2018",
      "is_holiday": false
    },
    {
      "day": "12-01_2018",
      "is_holiday": false
    },
    {
      "day": "13-01_2018",
      "is_holiday": true
    },
    {
      "day": "14-01_2018",
      "is_holiday": true
    },
    {
      "day": "15-01_2018",
      "is_holiday": false
    },
    {
      "day": "16-01_2018",
      "is_holiday": false
    },
    {
      "day": "17-01_2018",
      "is_holiday": false
    },
    {
      "day": "18-01_2018",
      "is_holiday": false
    },
    {
      "day": "19-01_2018",
      "is_holiday": false
    },
    {
      "day": "20-01_2018",
      "is_holiday": true
    },
    {
      "day": "21-01_2018",
      "is_holiday": true
    },
    {
      "day": "22-01_2018",
      "is_holiday": false
    },
    {
      "day": "23-01_2018",
      "is_holiday": false
    },
    {
      "day": "24-01_2018",
      "is_holiday": false
    },
    {
      "day": "25-01_2018",
      "is_holiday": false
    },
    {
      "day": "26-01_2018",
      "is_holiday": false
    },
    {
      "day": "27-01_2018",
      "is_holiday": true
    },
    {
      "day": "28-01_2018",
      "is_holiday": true
    },
    {
      "day": "29-01_2018",
      "is_holiday": false
    },
    {
      "day": "30-01_2018",
      "is_holiday": false
    },
    {
      "day": "31-01_2018",
      "is_holiday": false
    },
    {
      "day": "01-02_2018",
      "is_holiday": false
    },
    {
      "day": "02-02_2018",
      "is_holiday": false
    },
    {
      "day": "03-02_2018",
      "is_holiday": true
    },
    {
      "day": "04-02_2018",
      "is_holiday": true
    },
    {
      "day": "05-02_2018",
      "is_holiday": false
    },
    {
      "day": "06-02_2018",
      "is_holiday": false
    },
    {
      "day": "07-02_2018",
      "is_holiday": false
    },
    {
      "day": "08-02_2018",
      "is_holiday": false
    },
    {
      "day": "09-02_2018",
      "is_holiday": false
    },
    {
      "day": "10-02_2018",
      "is_holiday": true
    },
    {
      "day": "11-02_2018",
      "is_holiday": true
    },
    {
      "day": "12-02_2018",
      "is_holiday": false
    },
    {
      "day": "13-02_2018",
      "is_holiday": false
    },
    {
      "day": "14-02_2018",
      "is_holiday": false
    },
    {
      "day": "15-02_2018",
      "is_holiday": false
    },
    {
      "day": "16-02_2018",
      "is_holiday": false
    },
    {
      "day": "17-02_2018",
      "is_holiday": true
    },
    {
      "day": "18-02_2018",
      "is_holiday": true
    },
    {
      "day": "19-02_2018",
      "is_holiday": false
    },
    {
      "day": "20-02_2018",
      "is_holiday": false
    },
    {
      "day": "21-02_2018",
      "is_holiday": false
    },
    {
      "day": "22-02_2018",
      "is_holiday": true
    },
    {
      "day": "23-02_2018",
      "is_holiday": true
    },
    {
      "day": "24-02_2018",
      "is_holiday": true
    },
    {
      "day": "25-02_2018",
      "is_holiday": true
    },
    {
      "day": "26-02_2018",
      "is_holiday": false
    },
    {
      "day": "27-02_2018",
      "is_holiday": false
    },
    {
      "day": "28-02_2018",
      "is_holiday": false
    },
    {
      "day": "01-03_2018",
      "is_holiday": false
    },
    {
      "day": "02-03_2018",
      "is_holiday": false
    },
    {
      "day": "03-03_2018",
      "is_holiday": true
    },
    {
      "day": "04-03_2018",
      "is_holiday": true
    },
    {
      "day": "05-03_2018",
      "is_holiday": false
    },
    {
      "day": "06-03_2018",
      "is_holiday": false
    },
    {
      "day": "07-03_2018",
      "is_holiday": true
    },
    {
      "day": "08-03_2018",
      "is_holiday": true
    },
    {
      "day": "09-03_2018",
      "is_holiday": true
    },
    {
      "day": "10-03_2018",
      "is_holiday": true
    },
    {
      "day": "11-03_2018",
      "is_holiday": true
    },
    {
      "day": "12-03_2018",
      "is_holiday": false
    },
    {
      "day": "13-03_2018",
      "is_holiday": false
    },
    {
      "day": "14-03_2018",
      "is_holiday": false
    },
    {
      "day": "15-03_2018",
      "is_holiday": false
    },
    {
      "day": "16-03_2018",
      "is_holiday": false
    },
    {
      "day": "17-03_2018",
      "is_holiday": true
    },
    {
      "day": "18-03_2018",
      "is_holiday": true
    },
    {
      "day": "19-03_2018",
      "is_holiday": false
    },
    {
      "day": "20-03_2018",
      "is_holiday": false
    },
    {
      "day": "21-03_2018",
      "is_holiday": false
    },
    {
      "day": "22-03_2018",
      "is_holiday": false
    },
    {
      "day": "23-03_2018",
      "is_holiday": false
    },
    {
      "day": "24-03_2018",
      "is_holiday": true
    },
    {
      "day": "25-03_2018",
      "is_holiday": true
    },
    {
      "day": "26-03_2018",
      "is_holiday": false
    },
    {
      "day": "27-03_2018",
      "is_holiday": false
    },
    {
      "day": "28-03_2018",
      "is_holiday": false
    },
    {
      "day": "29-03_2018",
      "is_holiday": false
    },
    {
      "day": "30-03_2018",
      "is_holiday": false
    },
    {
      "day": "31-03_2018",
      "is_holiday": true
    },
    {
      "day": "01-04_2018",
      "is_holiday": true
    },
    {
      "day": "02-04_2018",
      "is_holiday": false
    },
    {
      "day": "03-04_2018",
      "is_holiday": false
    },
    {
      "day": "04-04_2018",
      "is_holiday": false
    },
    {
      "day": "05-04_2018",
      "is_holiday": false
    },
    {
      "day": "06-04_2018",
      "is_holiday": false
    },
    {
      "day": "07-04_2018",
      "is_holiday": true
    },
    {
      "day": "08-04_2018",
      "is_holiday": true
    },
    {
      "day": "09-04_2018",
      "is_holiday": false
    },
    {
      "day": "10-04_2018",
      "is_holiday": false
    },
    {
      "day": "11-04_2018",
      "is_holiday": false
    },
    {
      "day": "12-04_2018",
      "is_holiday": false
    },
    {
      "day": "13-04_2018",
      "is_holiday": false
    },
    {
      "day": "14-04_2018",
      "is_holiday": true
    },
    {
      "day": "15-04_2018",
      "is_holiday": true
    },
    {
      "day": "16-04_2018",
      "is_holiday": false
    },
    {
      "day": "17-04_2018",
      "is_holiday": false
    },
    {
      "day": "18-04_2018",
      "is_holiday": false
    },
    {
      "day": "19-04_2018",
      "is_holiday": false
    },
    {
      "day": "20-04_2018",
      "is_holiday": false
    },
    {
      "day": "21-04_2018",
      "is_holiday": true
    },
    {
      "day": "22-04_2018",
      "is_holiday": true
    },
    {
      "day": "23-04_2018",
      "is_holiday": false
    },
    {
      "day": "24-04_2018",
      "is_holiday": false
    },
    {
      "day": "25-04_2018",
      "is_holiday": false
    },
    {
      "day": "26-04_2018",
      "is_holiday": false
    },
    {
      "day": "27-04_2018",
      "is_holiday": false
    },
    {
      "day": "28-04_2018",
      "is_holiday": true
    },
    {
      "day": "29-04_2018",
      "is_holiday": true
    },
    {
      "day": "30-04_2018",
      "is_holiday": true
    },
    {
      "day": "01-05_2018",
      "is_holiday": true
    },
    {
      "day": "02-05_2018",
      "is_holiday": true
    },
    {
      "day": "03-05_2018",
      "is_holiday": false
    },
    {
      "day": "04-05_2018",
      "is_holiday": false
    },
    {
      "day": "05-05_2018",
      "is_holiday": true
    },
    {
      "day": "06-05_2018",
      "is_holiday": true
    },
    {
      "day": "07-05_2018",
      "is_holiday": false
    },
    {
      "day": "08-05_2018",
      "is_holiday": true
    },
    {
      "day": "09-05_2018",
      "is_holiday": true
    },
    {
      "day": "10-05_2018",
      "is_holiday": false
    },
    {
      "day": "11-05_2018",
      "is_holiday": false
    },
    {
      "day": "12-05_2018",
      "is_holiday": true
    },
    {
      "day": "13-05_2018",
      "is_holiday": true
    },
    {
      "day": "14-05_2018",
      "is_holiday": false
    },
    {
      "day": "15-05_2018",
      "is_holiday": false
    },
    {
      "day": "16-05_2018",
      "is_holiday": false
    },
    {
      "day": "17-05_2018",
      "is_holiday": false
    },
    {
      "day": "18-05_2018",
      "is_holiday": false
    },
    {
      "day": "19-05_2018",
      "is_holiday": true
    },
    {
      "day": "20-05_2018",
      "is_holiday": true
    },
    {
      "day": "21-05_2018",
      "is_holiday": false
    },
    {
      "day": "22-05_2018",
      "is_holiday": false
    },
    {
      "day": "23-05_2018",
      "is_holiday": false
    },
    {
      "day": "24-05_2018",
      "is_holiday": false
    },
    {
      "day": "25-05_2018",
      "is_holiday": false
    },
    {
      "day": "26-05_2018",
      "is_holiday": true
    },
    {
      "day": "27-05_2018",
      "is_holiday": true
    },
    {
      "day": "28-05_2018",
      "is_holiday": false
    },
    {
      "day": "29-05_2018",
      "is_holiday": false
    },
    {
      "day": "30-05_2018",
      "is_holiday": false
    },
    {
      "day": "31-05_2018",
      "is_holiday": false
    },
    {
      "day": "01-06_2018",
      "is_holiday": false
    },
    {
      "day": "02-06_2018",
      "is_holiday": true
    },
    {
      "day": "03-06_2018",
      "is_holiday": true
    },
    {
      "day": "04-06_2018",
      "is_holiday": false
    },
    {
      "day": "05-06_2018",
      "is_holiday": false
    },
    {
      "day": "06-06_2018",
      "is_holiday": false
    },
    {
      "day": "07-06_2018",
      "is_holiday": false
    },
    {
      "day": "08-06_2018",
      "is_holiday": false
    },
    {
      "day": "09-06_2018",
      "is_holiday": true
    },
    {
      "day": "10-06_2018",
      "is_holiday": true
    },
    {
      "day": "11-06_2018",
      "is_holiday": true
    },
    {
      "day": "12-06_2018",
      "is_holiday": true
    },
    {
      "day": "13-06_2018",
      "is_holiday": false
    },
    {
      "day": "14-06_2018",
      "is_holiday": false
    },
    {
      "day": "15-06_2018",
      "is_holiday": false
    },
    {
      "day": "16-06_2018",
      "is_holiday": true
    },
    {
      "day": "17-06_2018",
      "is_holiday": true
    },
    {
      "day": "18-06_2018",
      "is_holiday": false
    },
    {
      "day": "19-06_2018",
      "is_holiday": false
    },
    {
      "day": "20-06_2018",
      "is_holiday": false
    },
    {
      "day": "21-06_2018",
      "is_holiday": false
    },
    {
      "day": "22-06_2018",
      "is_holiday": false
    },
    {
      "day": "23-06_2018",
      "is_holiday": true
    },
    {
      "day": "24-06_2018",
      "is_holiday": true
    },
    {
      "day": "25-06_2018",
      "is_holiday": false
    },
    {
      "day": "26-06_2018",
      "is_holiday": false
    },
    {
      "day": "27-06_2018",
      "is_holiday": false
    },
    {
      "day": "28-06_2018",
      "is_holiday": false
    },
    {
      "day": "29-06_2018",
      "is_holiday": false
    },
    {
      "day": "30-06_2018",
      "is_holiday": true
    },
    {
      "day": "01-07_2018",
      "is_holiday": true
    },
    {
      "day": "02-07_2018",
      "is_holiday": false
    },
    {
      "day": "03-07_2018",
      "is_holiday": false
    },
    {
      "day": "04-07_2018",
      "is_holiday": false
    },
    {
      "day": "05-07_2018",
      "is_holiday": false
    },
    {
      "day": "06-07_2018",
      "is_holiday": false
    },
    {
      "day": "07-07_2018",
      "is_holiday": true
    },
    {
      "day": "08-07_2018",
      "is_holiday": true
    },
    {
      "day": "09-07_2018",
      "is_holiday": false
    },
    {
      "day": "10-07_2018",
      "is_holiday": false
    },
    {
      "day": "11-07_2018",
      "is_holiday": false
    },
    {
      "day": "12-07_2018",
      "is_holiday": false
    },
    {
      "day": "13-07_2018",
      "is_holiday": false
    },
    {
      "day": "14-07_2018",
      "is_holiday": true
    },
    {
      "day": "15-07_2018",
      "is_holiday": true
    },
    {
      "day": "16-07_2018",
      "is_holiday": false
    },
    {
      "day": "17-07_2018",
      "is_holiday": false
    },
    {
      "day": "18-07_2018",
      "is_holiday": false
    },
    {
      "day": "19-07_2018",
      "is_holiday": false
    },
    {
      "day": "20-07_2018",
      "is_holiday": false
    },
    {
      "day": "21-07_2018",
      "is_holiday": true
    },
    {
      "day": "22-07_2018",
      "is_holiday": true
    },
    {
      "day": "23-07_2018",
      "is_holiday": false
    },
    {
      "day": "24-07_2018",
      "is_holiday": false
    },
    {
      "day": "25-07_2018",
      "is_holiday": false
    },
    {
      "day": "26-07_2018",
      "is_holiday": false
    },
    {
      "day": "27-07_2018",
      "is_holiday": false
    },
    {
      "day": "28-07_2018",
      "is_holiday": true
    },
    {
      "day": "29-07_2018",
      "is_holiday": true
    },
    {
      "day": "30-07_2018",
      "is_holiday": false
    },
    {
      "day": "31-07_2018",
      "is_holiday": false
    },
    {
      "day": "01-08_2018",
      "is_holiday": false
    },
    {
      "day": "02-08_2018",
      "is_holiday": false
    },
    {
      "day": "03-08_2018",
      "is_holiday": false
    },
    {
      "day": "04-08_2018",
      "is_holiday": true
    },
    {
      "day": "05-08_2018",
      "is_holiday": true
    },
    {
      "day": "06-08_2018",
      "is_holiday": false
    },
    {
      "day": "07-08_2018",
      "is_holiday": false
    },
    {
      "day": "08-08_2018",
      "is_holiday": false
    },
    {
      "day": "09-08_2018",
      "is_holiday": false
    },
    {
      "day": "10-08_2018",
      "is_holiday": false
    },
    {
      "day": "11-08_2018",
      "is_holiday": true
    },
    {
      "day": "12-08_2018",
      "is_holiday": true
    },
    {
      "day": "13-08_2018",
      "is_holiday": false
    },
    {
      "day": "14-08_2018",
      "is_holiday": false
    },
    {
      "day": "15-08_2018",
      "is_holiday": false
    },
    {
      "day": "16-08_2018",
      "is_holiday": false
    },
    {
      "day": "17-08_2018",
      "is_holiday": false
    },
    {
      "day": "18-08_2018",
      "is_holiday": true
    },
    {
      "day": "19-08_2018",
      "is_holiday": true
    },
    {
      "day": "20-08_2018",
      "is_holiday": false
    },
    {
      "day": "21-08_2018",
      "is_holiday": false
    },
    {
      "day": "22-08_2018",
      "is_holiday": false
    },
    {
      "day": "23-08_2018",
      "is_holiday": false
    },
    {
      "day": "24-08_2018",
      "is_holiday": false
    },
    {
      "day": "25-08_2018",
      "is_holiday": true
    },
    {
      "day": "26-08_2018",
      "is_holiday": true
    },
    {
      "day": "27-08_2018",
      "is_holiday": false
    },
    {
      "day": "28-08_2018",
      "is_holiday": false
    },
    {
      "day": "29-08_2018",
      "is_holiday": false
    },
    {
      "day": "30-08_2018",
      "is_holiday": false
    },
    {
      "day": "31-08_2018",
      "is_holiday": false
    },
    {
      "day": "01-09_2018",
      "is_holiday": true
    },
    {
      "day": "02-09_2018",
      "is_holiday": true
    },
    {
      "day": "03-09_2018",
      "is_holiday": false
    },
    {
      "day": "04-09_2018",
      "is_holiday": false
    },
    {
      "day": "05-09_2018",
      "is_holiday": false
    },
    {
      "day": "06-09_2018",
      "is_holiday": false
    },
    {
      "day": "07-09_2018",
      "is_holiday": false
    },
    {
      "day": "08-09_2018",
      "is_holiday": true
    },
    {
      "day": "09-09_2018",
      "is_holiday": true
    },
    {
      "day": "10-09_2018",
      "is_holiday": false
    },
    {
      "day": "11-09_2018",
      "is_holiday": false
    },
    {
      "day": "12-09_2018",
      "is_holiday": false
    },
    {
      "day": "13-09_2018",
      "is_holiday": false
    },
    {
      "day": "14-09_2018",
      "is_holiday": false
    },
    {
      "day": "15-09_2018",
      "is_holiday": true
    },
    {
      "day": "16-09_2018",
      "is_holiday": true
    },
    {
      "day": "17-09_2018",
      "is_holiday": false
    },
    {
      "day": "18-09_2018",
      "is_holiday": false
    },
    {
      "day": "19-09_2018",
      "is_holiday": false
    },
    {
      "day": "20-09_2018",
      "is_holiday": false
    },
    {
      "day": "21-09_2018",
      "is_holiday": false
    },
    {
      "day": "22-09_2018",
      "is_holiday": true
    },
    {
      "day": "23-09_2018",
      "is_holiday": true
    },
    {
      "day": "24-09_2018",
      "is_holiday": false
    },
    {
      "day": "25-09_2018",
      "is_holiday": false
    },
    {
      "day": "26-09_2018",
      "is_holiday": false
    },
    {
      "day": "27-09_2018",
      "is_holiday": false
    },
    {
      "day": "28-09_2018",
      "is_holiday": false
    },
    {
      "day": "29-09_2018",
      "is_holiday": true
    },
    {
      "day": "30-09_2018",
      "is_holiday": true
    },
    {
      "day": "01-10_2018",
      "is_holiday": false
    },
    {
      "day": "02-10_2018",
      "is_holiday": false
    },
    {
      "day": "03-10_2018",
      "is_holiday": false
    },
    {
      "day": "04-10_2018",
      "is_holiday": false
    },
    {
      "day": "05-10_2018",
      "is_holiday": false
    },
    {
      "day": "06-10_2018",
      "is_holiday": true
    },
    {
      "day": "07-10_2018",
      "is_holiday": true
    },
    {
      "day": "08-10_2018",
      "is_holiday": false
    },
    {
      "day": "09-10_2018",
      "is_holiday": false
    },
    {
      "day": "10-10_2018",
      "is_holiday": false
    },
    {
      "day": "11-10_2018",
      "is_holiday": false
    },
    {
      "day": "12-10_2018",
      "is_holiday": false
    },
    {
      "day": "13-10_2018",
      "is_holiday": true
    },
    {
      "day": "14-10_2018",
      "is_holiday": true
    },
    {
      "day": "15-10_2018",
      "is_holiday": false
    },
    {
      "day": "16-10_2018",
      "is_holiday": false
    },
    {
      "day": "17-10_2018",
      "is_holiday": false
    },
    {
      "day": "18-10_2018",
      "is_holiday": false
    },
    {
      "day": "19-10_2018",
      "is_holiday": false
    },
    {
      "day": "20-10_2018",
      "is_holiday": true
    },
    {
      "day": "21-10_2018",
      "is_holiday": true
    },
    {
      "day": "22-10_2018",
      "is_holiday": false
    },
    {
      "day": "23-10_2018",
      "is_holiday": false
    },
    {
      "day": "24-10_2018",
      "is_holiday": false
    },
    {
      "day": "25-10_2018",
      "is_holiday": false
    },
    {
      "day": "26-10_2018",
      "is_holiday": false
    },
    {
      "day": "27-10_2018",
      "is_holiday": true
    },
    {
      "day": "28-10_2018",
      "is_holiday": true
    },
    {
      "day": "29-10_2018",
      "is_holiday": false
    },
    {
      "day": "30-10_2018",
      "is_holiday": false
    },
    {
      "day": "31-10_2018",
      "is_holiday": false
    },
    {
      "day": "01-11_2018",
      "is_holiday": false
    },
    {
      "day": "02-11_2018",
      "is_holiday": false
    },
    {
      "day": "03-11_2018",
      "is_holiday": true
    },
    {
      "day": "04-11_2018",
      "is_holiday": true
    },
    {
      "day": "05-11_2018",
      "is_holiday": true
    },
    {
      "day": "06-11_2018",
      "is_holiday": false
    },
    {
      "day": "07-11_2018",
      "is_holiday": false
    },
    {
      "day": "08-11_2018",
      "is_holiday": false
    },
    {
      "day": "09-11_2018",
      "is_holiday": false
    },
    {
      "day": "10-11_2018",
      "is_holiday": true
    },
    {
      "day": "11-11_2018",
      "is_holiday": true
    },
    {
      "day": "12-11_2018",
      "is_holiday": false
    },
    {
      "day": "13-11_2018",
      "is_holiday": false
    },
    {
      "day": "14-11_2018",
      "is_holiday": false
    },
    {
      "day": "15-11_2018",
      "is_holiday": false
    },
    {
      "day": "16-11_2018",
      "is_holiday": false
    },
    {
      "day": "17-11_2018",
      "is_holiday": true
    },
    {
      "day": "18-11_2018",
      "is_holiday": true
    },
    {
      "day": "19-11_2018",
      "is_holiday": false
    },
    {
      "day": "20-11_2018",
      "is_holiday": false
    },
    {
      "day": "21-11_2018",
      "is_holiday": false
    },
    {
      "day": "22-11_2018",
      "is_holiday": false
    },
    {
      "day": "23-11_2018",
      "is_holiday": false
    },
    {
      "day": "24-11_2018",
      "is_holiday": true
    },
    {
      "day": "25-11_2018",
      "is_holiday": true
    },
    {
      "day": "26-11_2018",
      "is_holiday": false
    },
    {
      "day": "27-11_2018",
      "is_holiday": false
    },
    {
      "day": "28-11_2018",
      "is_holiday": false
    },
    {
      "day": "29-11_2018",
      "is_holiday": false
    },
    {
      "day": "30-11_2018",
      "is_holiday": false
    },
    {
      "day": "01-12_2018",
      "is_holiday": true
    },
    {
      "day": "02-12_2018",
      "is_holiday": true
    },
    {
      "day": "03-12_2018",
      "is_holiday": false
    },
    {
      "day": "04-12_2018",
      "is_holiday": false
    },
    {
      "day": "05-12_2018",
      "is_holiday": false
    },
    {
      "day": "06-12_2018",
      "is_holiday": false
    },
    {
      "day": "07-12_2018",
      "is_holiday": false
    },
    {
      "day": "08-12_2018",
      "is_holiday": true
    },
    {
      "day": "09-12_2018",
      "is_holiday": true
    },
    {
      "day": "10-12_2018",
      "is_holiday": false
    },
    {
      "day": "11-12_2018",
      "is_holiday": false
    },
    {
      "day": "12-12_2018",
      "is_holiday": false
    },
    {
      "day": "13-12_2018",
      "is_holiday": false
    },
    {
      "day": "14-12_2018",
      "is_holiday": false
    },
    {
      "day": "15-12_2018",
      "is_holiday": true
    },
    {
      "day": "16-12_2018",
      "is_holiday": true
    },
    {
      "day": "17-12_2018",
      "is_holiday": false
    },
    {
      "day": "18-12_2018",
      "is_holiday": false
    },
    {
      "day": "19-12_2018",
      "is_holiday": false
    },
    {
      "day": "20-12_2018",
      "is_holiday": false
    },
    {
      "day": "21-12_2018",
      "is_holiday": false
    },
    {
      "day": "22-12_2018",
      "is_holiday": true
    },
    {
      "day": "23-12_2018",
      "is_holiday": true
    },
    {
      "day": "24-12_2018",
      "is_holiday": false
    },
    {
      "day": "25-12_2018",
      "is_holiday": false
    },
    {
      "day": "26-12_2018",
      "is_holiday": false
    },
    {
      "day": "27-12_2018",
      "is_holiday": false
    },
    {
      "day": "28-12_2018",
      "is_holiday": false
    },
    {
      "day": "29-12_2018",
      "is_holiday": true
    },
    {
      "day": "30-12_2018",
      "is_holiday": true
    },
    {
      "day": "31-12_2018",
      "is_holiday": true
    }
  ],
  "2019": [
    {
      "day": "01-01_2019",
      "is_holiday": true
    },
    {
      "day": "02-01_2019",
      "is_holiday": true
    },
    {
      "day": "03-01_2019",
      "is_holiday": true
    },
    {
      "day": "04-01_2019",
      "is_holiday": true
    },
    {
      "day": "05-01_2019",
      "is_holiday": true
    },
    {
      "day": "06-01_2019",
      "is_holiday": true
    },
    {
      "day": "07-01_2019",
      "is_holiday": true
    },
    {
      "day": "08-01_2019",
      "is_holiday": true
    },
    {
      "day": "09-01_2019",
      "is_holiday": false
    },
    {
      "day": "10-01_2019",
      "is_holiday": false
    },
    {
      "day": "11-01_2019",
      "is_holiday": false
    },
    {
      "day": "12-01_2019",
      "is_holiday": true
    },
    {
      "day": "13-01_2019",
      "is_holiday": true
    },
    {
      "day": "14-01_2019",
      "is_holiday": false
    },
    {
      "day": "15-01_2019",
      "is_holiday": false
    },
    {
      "day": "16-01_2019",
      "is_holiday": false
    },
    {
      "day": "17-01_2019",
      "is_holiday": false
    },
    {
      "day": "18-01_2019",
      "is_holiday": false
    },
    {
      "day": "19-01_2019",
      "is_holiday": true
    },
    {
      "day": "20-01_2019",
      "is_holiday": true
    },
    {
      "day": "21-01_2019",
      "is_holiday": false
    },
    {
      "day": "22-01_2019",
      "is_holiday": false
    },
    {
      "day": "23-01_2019",
      "is_holiday": false
    },
    {
      "day": "24-01_2019",
      "is_holiday": false
    },
    {
      "day": "25-01_2019",
      "is_holiday": false
    },
    {
      "day": "26-01_2019",
      "is_holiday": true
    },
    {
      "day": "27-01_2019",
      "is_holiday": true
    },
    {
      "day": "28-01_2019",
      "is_holiday": false
    },
    {
      "day": "29-01_2019",
      "is_holiday": false
    },
    {
      "day": "30-01_2019",
      "is_holiday": false
    },
    {
      "day": "31-01_2019",
      "is_holiday": false
    },
    {
      "day": "01-02_2019",
      "is_holiday": false
    },
    {
      "day": "02-02_2019",
      "is_holiday": true
    },
    {
      "day": "03-02_2019",
      "is_holiday": true
    },
    {
      "day": "04-02_2019",
      "is_holiday": false
    },
    {
      "day": "05-02_2019",
      "is_holiday": false
    },
    {
      "day": "06-02_2019",
      "is_holiday": false
    },
    {
      "day": "07-02_2019",
      "is_holiday": false
    },
    {
      "day": "08-02_2019",
      "is_holiday": false
    },
    {
      "day": "09-02_2019",
      "is_holiday": true
    },
    {
      "day": "10-02_2019",
      "is_holiday": true
    },
    {
      "day": "11-02_2019",
      "is_holiday": false
    },
    {
      "day": "12-02_2019",
      "is_holiday": false
    },
    {
      "day": "13-02_2019",
      "is_holiday": false
    },
    {
      "day": "14-02_2019",
      "is_holiday": false
    },
    {
      "day": "15-02_2019",
      "is_holiday": false
    },
    {
      "day": "16-02_2019",
      "is_holiday": true
    },
    {
      "day": "17-02_2019",
      "is_holiday": true
    },
    {
      "day": "18-02_2019",
      "is_holiday": false
    },
    {
      "day": "19-02_2019",
      "is_holiday": false
    },
    {
      "day": "20-02_2019",
      "is_holiday": false
    },
    {
      "day": "21-02_2019",
      "is_holiday": false
    },
    {
      "day": "22-02_2019",
      "is_holiday": true
    },
    {
      "day": "23-02_2019",
      "is_holiday": true
    },
    {
      "day": "24-02_2019",
      "is_holiday": true
    },
    {
      "day": "25-02_2019",
      "is_holiday": false
    },
    {
      "day": "26-02_2019",
      "is_holiday": false
    },
    {
      "day": "27-02_2019",
      "is_holiday": false
    },
    {
      "day": "28-02_2019",
      "is_holiday": false
    },
    {
      "day": "01-03_2019",
      "is_holiday": false
    },
    {
      "day": "02-03_2019",
      "is_holiday": true
    },
    {
      "day": "03-03_2019",
      "is_holiday": true
    },
    {
      "day": "04-03_2019",
      "is_holiday": false
    },
    {
      "day": "05-03_2019",
      "is_holiday": false
    },
    {
      "day": "06-03_2019",
      "is_holiday": false
    },
    {
      "day": "07-03_2019",
      "is_holiday": true
    },
    {
      "day": "08-03_2019",
      "is_holiday": true
    },
    {
      "day": "09-03_2019",
      "is_holiday": true
    },
    {
      "day": "10-03_2019",
      "is_holiday": true
    },
    {
      "day": "11-03_2019",
      "is_holiday": false
    },
    {
      "day": "12-03_2019",
      "is_holiday": false
    },
    {
      "day": "13-03_2019",
      "is_holiday": false
    },
    {
      "day": "14-03_2019",
      "is_holiday": false
    },
    {
      "day": "15-03_2019",
      "is_holiday": false
    },
    {
      "day": "16-03_2019",
      "is_holiday": true
    },
    {
      "day": "17-03_2019",
      "is_holiday": true
    },
    {
      "day": "18-03_2019",
      "is_holiday": false
    },
    {
      "day": "19-03_2019",
      "is_holiday": false
    },
    {
      "day": "20-03_2019",
      "is_holiday": false
    },
    {
      "day": "21-03_2019",
      "is_holiday": false
    },
    {
      "day": "22-03_2019",
      "is_holiday": false
    },
    {
      "day": "23-03_2019",
      "is_holiday": true
    },
    {
      "day": "24-03_2019",
      "is_holiday": true
    },
    {
      "day": "25-03_2019",
      "is_holiday": false
    },
    {
      "day": "26-03_2019",
      "is_holiday": false
    },
    {
      "day": "27-03_2019",
      "is_holiday": false
    },
    {
      "day": "28-03_2019",
      "is_holiday": false
    },
    {
      "day": "29-03_2019",
      "is_holiday": false
    },
    {
      "day": "30-03_2019",
      "is_holiday": true
    },
    {
      "day": "31-03_2019",
      "is_holiday": true
    },
    {
      "day": "01-04_2019",
      "is_holiday": false
    },
    {
      "day": "02-04_2019",
      "is_holiday": false
    },
    {
      "day": "03-04_2019",
      "is_holiday": false
    },
    {
      "day": "04-04_2019",
      "is_holiday": false
    },
    {
      "day": "05-04_2019",
      "is_holiday": false
    },
    {
      "day": "06-04_2019",
      "is_holiday": true
    },
    {
      "day": "07-04_2019",
      "is_holiday": true
    },
    {
      "day": "08-04_2019",
      "is_holiday": false
    },
    {
      "day": "09-04_2019",
      "is_holiday": false
    },
    {
      "day": "10-04_2019",
      "is_holiday": false
    },
    {
      "day": "11-04_2019",
      "is_holiday": false
    },
    {
      "day": "12-04_2019",
      "is_holiday": false
    },
    {
      "day": "13-04_2019",
      "is_holiday": true
    },
    {
      "day": "14-04_2019",
      "is_holiday": true
    },
    {
      "day": "15-04_2019",
      "is_holiday": false
    },
    {
      "day": "16-04_2019",
      "is_holiday": false
    },
    {
      "day": "17-04_2019",
      "is_holiday": false
    },
    {
      "day": "18-04_2019",
      "is_holiday": false
    },
    {
      "day": "19-04_2019",
      "is_holiday": false
    },
    {
      "day": "20-04_2019",
      "is_holiday": true
    },
    {
      "day": "21-04_2019",
      "is_holiday": true
    },
    {
      "day": "22-04_2019",
      "is_holiday": false
    },
    {
      "day": "23-04_2019",
      "is_holiday": false
    },
    {
      "day": "24-04_2019",
      "is_holiday": false
    },
    {
      "day": "25-04_2019",
      "is_holiday": false
    },
    {
      "day": "26-04_2019",
      "is_holiday": false
    },
    {
      "day": "27-04_2019",
      "is_holiday": true
    },
    {
      "day": "28-04_2019",
      "is_holiday": true
    },
    {
      "day": "29-04_2019",
      "is_holiday": false
    },
    {
      "day": "30-04_2019",
      "is_holiday": true
    },
    {
      "day": "01-05_2019",
      "is_holiday": true
    },
    {
      "day": "02-05_2019",
      "is_holiday": true
    },
    {
      "day": "03-05_2019",
      "is_holiday": true
    },
    {
      "day": "04-05_2019",
      "is_holiday": true
    },
    {
      "day": "05-05_2019",
      "is_holiday": true
    },
    {
      "day": "06-05_2019",
      "is_holiday": false
    },
    {
      "day": "07-05_2019",
      "is_holiday": false
    },
    {
      "day": "08-05_2019",
      "is_holiday": true
    },
    {
      "day": "09-05_2019",
      "is_holiday": true
    },
    {
      "day": "10-05_2019",
      "is_holiday": true
    },
    {
      "day": "11-05_2019",
      "is_holiday": true
    },
    {
      "day": "12-05_2019",
      "is_holiday": true
    },
    {
      "day": "13-05_2019",
      "is_holiday": false
    },
    {
      "day": "14-05_2019",
      "is_holiday": false
    },
    {
      "day": "15-05_2019",
      "is_holiday": false
    },
    {
      "day": "16-05_2019",
      "is_holiday": false
    },
    {
      "day": "17-05_2019",
      "is_holiday": false
    },
    {
      "day": "18-05_2019",
      "is_holiday": true
    },
    {
      "day": "19-05_2019",
      "is_holiday": true
    },
    {
      "day": "20-05_2019",
      "is_holiday": false
    },
    {
      "day": "21-05_2019",
      "is_holiday": false
    },
    {
      "day": "22-05_2019",
      "is_holiday": false
    },
    {
      "day": "23-05_2019",
      "is_holiday": false
    },
    {
      "day": "24-05_2019",
      "is_holiday": false
    },
    {
      "day": "25-05_2019",
      "is_holiday": true
    },
    {
      "day": "26-05_2019",
      "is_holiday": true
    },
    {
      "day": "27-05_2019",
      "is_holiday": false
    },
    {
      "day": "28-05_2019",
      "is_holiday": false
    },
    {
      "day": "29-05_2019",
      "is_holiday": false
    },
    {
      "day": "30-05_2019",
      "is_holiday": false
    },
    {
      "day": "31-05_2019",
      "is_holiday": false
    },
    {
      "day": "01-06_2019",
      "is_holiday": true
    },
    {
      "day": "02-06_2019",
      "is_holiday": true
    },
    {
      "day": "03-06_2019",
      "is_holiday": false
    },
    {
      "day": "04-06_2019",
      "is_holiday": false
    },
    {
      "day": "05-06_2019",
      "is_holiday": false
    },
    {
      "day": "06-06_2019",
      "is_holiday": false
    },
    {
      "day": "07-06_2019",
      "is_holiday": false
    },
    {
      "day": "08-06_2019",
      "is_holiday": true
    },
    {
      "day": "09-06_2019",
      "is_holiday": true
    },
    {
      "day": "10-06_2019",
      "is_holiday": false
    },
    {
      "day": "11-06_2019",
      "is_holiday": true
    },
    {
      "day": "12-06_2019",
      "is_holiday": true
    },
    {
      "day": "13-06_2019",
      "is_holiday": false
    },
    {
      "day": "14-06_2019",
      "is_holiday": false
    },
    {
      "day": "15-06_2019",
      "is_holiday": true
    },
    {
      "day": "16-06_2019",
      "is_holiday": true
    },
    {
      "day": "17-06_2019",
      "is_holiday": false
    },
    {
      "day": "18-06_2019",
      "is_holiday": false
    },
    {
      "day": "19-06_2019",
      "is_holiday": false
    },
    {
      "day": "20-06_2019",
      "is_holiday": false
    },
    {
      "day": "21-06_2019",
      "is_holiday": false
    },
    {
      "day": "22-06_2019",
      "is_holiday": true
    },
    {
      "day": "23-06_2019",
      "is_holiday": true
    },
    {
      "day": "24-06_2019",
      "is_holiday": false
    },
    {
      "day": "25-06_2019",
      "is_holiday": false
    },
    {
      "day": "26-06_2019",
      "is_holiday": false
    },
    {
      "day": "27-06_2019",
      "is_holiday": false
    },
    {
      "day": "28-06_2019",
      "is_holiday": false
    },
    {
      "day": "29-06_2019",
      "is_holiday": true
    },
    {
      "day": "30-06_2019",
      "is_holiday": true
    },
    {
      "day": "01-07_2019",
      "is_holiday": false
    },
    {
      "day": "02-07_2019",
      "is_holiday": false
    },
    {
      "day": "03-07_2019",
      "is_holiday": false
    },
    {
      "day": "04-07_2019",
      "is_holiday": false
    },
    {
      "day": "05-07_2019",
      "is_holiday": false
    },
    {
      "day": "06-07_2019",
      "is_holiday": true
    },
    {
      "day": "07-07_2019",
      "is_holiday": true
    },
    {
      "day": "08-07_2019",
      "is_holiday": false
    },
    {
      "day": "09-07_2019",
      "is_holiday": false
    },
    {
      "day": "10-07_2019",
      "is_holiday": false
    },
    {
      "day": "11-07_2019",
      "is_holiday": false
    },
    {
      "day": "12-07_2019",
      "is_holiday": false
    },
    {
      "day": "13-07_2019",
      "is_holiday": true
    },
    {
      "day": "14-07_2019",
      "is_holiday": true
    },
    {
      "day": "15-07_2019",
      "is_holiday": false
    },
    {
      "day": "16-07_2019",
      "is_holiday": false
    },
    {
      "day": "17-07_2019",
      "is_holiday": false
    },
    {
      "day": "18-07_2019",
      "is_holiday": false
    },
    {
      "day": "19-07_2019",
      "is_holiday": false
    },
    {
      "day": "20-07_2019",
      "is_holiday": true
    },
    {
      "day": "21-07_2019",
      "is_holiday": true
    },
    {
      "day": "22-07_2019",
      "is_holiday": false
    },
    {
      "day": "23-07_2019",
      "is_holiday": false
    },
    {
      "day": "24-07_2019",
      "is_holiday": false
    },
    {
      "day": "25-07_2019",
      "is_holiday": false
    },
    {
      "day": "26-07_2019",
      "is_holiday": false
    },
    {
      "day": "27-07_2019",
      "is_holiday": true
    },
    {
      "day": "28-07_2019",
      "is_holiday": true
    },
    {
      "day": "29-07_2019",
      "is_holiday": false
    },
    {
      "day": "30-07_2019",
      "is_holiday": false
    },
    {
      "day": "31-07_2019",
      "is_holiday": false
    },
    {
      "day": "01-08_2019",
      "is_holiday": false
    },
    {
      "day": "02-08_2019",
      "is_holiday": false
    },
    {
      "day": "03-08_2019",
      "is_holiday": true
    },
    {
      "day": "04-08_2019",
      "is_holiday": true
    },
    {
      "day": "05-08_2019",
      "is_holiday": false
    },
    {
      "day": "06-08_2019",
      "is_holiday": false
    },
    {
      "day": "07-08_2019",
      "is_holiday": false
    },
    {
      "day": "08-08_2019",
      "is_holiday": false
    },
    {
      "day": "09-08_2019",
      "is_holiday": false
    },
    {
      "day": "10-08_2019",
      "is_holiday": true
    },
    {
      "day": "11-08_2019",
      "is_holiday": true
    },
    {
      "day": "12-08_2019",
      "is_holiday": false
    },
    {
      "day": "13-08_2019",
      "is_holiday": false
    },
    {
      "day": "14-08_2019",
      "is_holiday": false
    },
    {
      "day": "15-08_2019",
      "is_holiday": false
    },
    {
      "day": "16-08_2019",
      "is_holiday": false
    },
    {
      "day": "17-08_2019",
      "is_holiday": true
    },
    {
      "day": "18-08_2019",
      "is_holiday": true
    },
    {
      "day": "19-08_2019",
      "is_holiday": false
    },
    {
      "day": "20-08_2019",
      "is_holiday": false
    },
    {
      "day": "21-08_2019",
      "is_holiday": false
    },
    {
      "day": "22-08_2019",
      "is_holiday": false
    },
    {
      "day": "23-08_2019",
      "is_holiday": false
    },
    {
      "day": "24-08_2019",
      "is_holiday": true
    },
    {
      "day": "25-08_2019",
      "is_holiday": true
    },
    {
      "day": "26-08_2019",
      "is_holiday": false
    },
    {
      "day": "27-08_2019",
      "is_holiday": false
    },
    {
      "day": "28-08_2019",
      "is_holiday": false
    },
    {
      "day": "29-08_2019",
      "is_holiday": false
    },
    {
      "day": "30-08_2019",
      "is_holiday": false
    },
    {
      "day": "31-08_2019",
      "is_holiday": true
    },
    {
      "day": "01-09_2019",
      "is_holiday": true
    },
    {
      "day": "02-09_2019",
      "is_holiday": false
    },
    {
      "day": "03-09_2019",
      "is_holiday": false
    },
    {
      "day": "04-09_2019",
      "is_holiday": false
    },
    {
      "day": "05-09_2019",
      "is_holiday": false
    },
    {
      "day": "06-09_2019",
      "is_holiday": false
    },
    {
      "day": "07-09_2019",
      "is_holiday": true
    },
    {
      "day": "08-09_2019",
      "is_holiday": true
    },
    {
      "day": "09-09_2019",
      "is_holiday": false
    },
    {
      "day": "10-09_2019",
      "is_holiday": false
    },
    {
      "day": "11-09_2019",
      "is_holiday": false
    },
    {
      "day": "12-09_2019",
      "is_holiday": false
    },
    {
      "day": "13-09_2019",
      "is_holiday": false
    },
    {
      "day": "14-09_2019",
      "is_holiday": true
    },
    {
      "day": "15-09_2019",
      "is_holiday": true
    },
    {
      "day": "16-09_2019",
      "is_holiday": false
    },
    {
      "day": "17-09_2019",
      "is_holiday": false
    },
    {
      "day": "18-09_2019",
      "is_holiday": false
    },
    {
      "day": "19-09_2019",
      "is_holiday": false
    },
    {
      "day": "20-09_2019",
      "is_holiday": false
    },
    {
      "day": "21-09_2019",
      "is_holiday": true
    },
    {
      "day": "22-09_2019",
      "is_holiday": true
    },
    {
      "day": "23-09_2019",
      "is_holiday": false
    },
    {
      "day": "24-09_2019",
      "is_holiday": false
    },
    {
      "day": "25-09_2019",
      "is_holiday": false
    },
    {
      "day": "26-09_2019",
      "is_holiday": false
    },
    {
      "day": "27-09_2019",
      "is_holiday": false
    },
    {
      "day": "28-09_2019",
      "is_holiday": true
    },
    {
      "day": "29-09_2019",
      "is_holiday": true
    },
    {
      "day": "30-09_2019",
      "is_holiday": false
    },
    {
      "day": "01-10_2019",
      "is_holiday": false
    },
    {
      "day": "02-10_2019",
      "is_holiday": false
    },
    {
      "day": "03-10_2019",
      "is_holiday": false
    },
    {
      "day": "04-10_2019",
      "is_holiday": false
    },
    {
      "day": "05-10_2019",
      "is_holiday": true
    },
    {
      "day": "06-10_2019",
      "is_holiday": true
    },
    {
      "day": "07-10_2019",
      "is_holiday": false
    },
    {
      "day": "08-10_2019",
      "is_holiday": false
    },
    {
      "day": "09-10_2019",
      "is_holiday": false
    },
    {
      "day": "10-10_2019",
      "is_holiday": false
    },
    {
      "day": "11-10_2019",
      "is_holiday": false
    },
    {
      "day": "12-10_2019",
      "is_holiday": true
    },
    {
      "day": "13-10_2019",
      "is_holiday": true
    },
    {
      "day": "14-10_2019",
      "is_holiday": false
    },
    {
      "day": "15-10_2019",
      "is_holiday": false
    },
    {
      "day": "16-10_2019",
      "is_holiday": false
    },
    {
      "day": "17-10_2019",
      "is_holiday": false
    },
    {
      "day": "18-10_2019",
      "is_holiday": false
    },
    {
      "day": "19-10_2019",
      "is_holiday": true
    },
    {
      "day": "20-10_2019",
      "is_holiday": true
    },
    {
      "day": "21-10_2019",
      "is_holiday": false
    },
    {
      "day": "22-10_2019",
      "is_holiday": false
    },
    {
      "day": "23-10_2019",
      "is_holiday": false
    },
    {
      "day": "24-10_2019",
      "is_holiday": false
    },
    {
      "day": "25-10_2019",
      "is_holiday": false
    },
    {
      "day": "26-10_2019",
      "is_holiday": true
    },
    {
      "day": "27-10_2019",
      "is_holiday": true
    },
    {
      "day": "28-10_2019",
      "is_holiday": false
    },
    {
      "day": "29-10_2019",
      "is_holiday": false
    },
    {
      "day": "30-10_2019",
      "is_holiday": false
    },
    {
      "day": "31-10_2019",
      "is_holiday": false
    },
    {
      "day": "01-11_2019",
      "is_holiday": false
    },
    {
      "day": "02-11_2019",
      "is_holiday": true
    },
    {
      "day": "03-11_2019",
      "is_holiday": true
    },
    {
      "day": "04-11_2019",
      "is_holiday": true
    },
    {
      "day": "05-11_2019",
      "is_holiday": false
    },
    {
      "day": "06-11_2019",
      "is_holiday": false
    },
    {
      "day": "07-11_2019",
      "is_holiday": false
    },
    {
      "day": "08-11_2019",
      "is_holiday": false
    },
    {
      "day": "09-11_2019",
      "is_holiday": true
    },
    {
      "day": "10-11_2019",
      "is_holiday": true
    },
    {
      "day": "11-11_2019",
      "is_holiday": false
    },
    {
      "day": "12-11_2019",
      "is_holiday": false
    },
    {
      "day": "13-11_2019",
      "is_holiday": false
    },
    {
      "day": "14-11_2019",
      "is_holiday": false
    },
    {
      "day": "15-11_2019",
      "is_holiday": false
    },
    {
      "day": "16-11_2019",
      "is_holiday": true
    },
    {
      "day": "17-11_2019",
      "is_holiday": true
    },
    {
      "day": "18-11_2019",
      "is_holiday": false
    },
    {
      "day": "19-11_2019",
      "is_holiday": false
    },
    {
      "day": "20-11_2019",
      "is_holiday": false
    },
    {
      "day": "21-11_2019",
      "is_holiday": false
    },
    {
      "day": "22-11_2019",
      "is_holiday": false
    },
    {
      "day": "23-11_2019",
      "is_holiday": true
    },
    {
      "day": "24-11_2019",
      "is_holiday": true
    },
    {
      "day": "25-11_2019",
      "is_holiday": false
    },
    {
      "day": "26-11_2019",
      "is_holiday": false
    },
    {
      "day": "27-11_2019",
      "is_holiday": false
    },
    {
      "day": "28-11_2019",
      "is_holiday": false
    },
    {
      "day": "29-11_2019",
      "is_holiday": false
    },
    {
      "day": "30-11_2019",
      "is_holiday": true
    },
    {
      "day": "01-12_2019",
      "is_holiday": true
    },
    {
      "day": "02-12_2019",
      "is_holiday": false
    },
    {
      "day": "03-12_2019",
      "is_holiday": false
    },
    {
      "day": "04-12_2019",
      "is_holiday": false
    },
    {
      "day": "05-12_2019",
      "is_holiday": false
    },
    {
      "day": "06-12_2019",
      "is_holiday": false
    },
    {
      "day": "07-12_2019",
      "is_holiday": true
    },
    {
      "day": "08-12_2019",
      "is_holiday": true
    },
    {
      "day": "09-12_2019",
      "is_holiday": false
    },
    {
      "day": "10-12_2019",
      "is_holiday": false
    },
    {
      "day": "11-12_2019",
      "is_holiday": false
    },
    {
      "day": "12-12_2019",
      "is_holiday": false
    },
    {
      "day": "13-12_2019",
      "is_holiday": false
    },
    {
      "day": "14-12_2019",
      "is_holiday": true
    },
    {
      "day": "15-12_2019",
      "is_holiday": true
    },
    {
      "day": "16-12_2019",
      "is_holiday": false
    },
    {
      "day": "17-12_2019",
      "is_holiday": false
    },
    {
      "day": "18-12_2019",
      "is_holiday": false
    },
    {
      "day": "19-12_2019",
      "is_holiday": false
    },
    {
      "day": "20-12_2019",
      "is_holiday": false
    },
    {
      "day": "21-12_2019",
      "is_holiday": true
    },
    {
      "day": "22-12_2019",
      "is_holiday": true
    },
    {
      "day": "23-12_2019",
      "is_holiday": false
    },
    {
      "day": "24-12_2019",
      "is_holiday": false
    },
    {
      "day": "25-12_2019",
      "is_holiday": false
    },
    {
      "day": "26-12_2019",
      "is_holiday": false
    },
    {
      "day": "27-12_2019",
      "is_holiday": false
    },
    {
      "day": "28-12_2019",
      "is_holiday": true
    },
    {
      "day": "29-12_2019",
      "is_holiday": true
    },
    {
      "day": "30-12_2019",
      "is_holiday": false
    },
    {
      "day": "31-12_2019",
      "is_holiday": true
    }
  ],
  "2020": [
    {
      "day": "01-01_2020",
      "is_holiday": true
    },
    {
      "day": "02-01_2020",
      "is_holiday": true
    },
    {
      "day": "03-01_2020",
      "is_holiday": true
    },
    {
      "day": "04-01_2020",
      "is_holiday": true
    },
    {
      "day": "05-01_2020",
      "is_holiday": true
    },
    {
      "day": "06-01_2020",
      "is_holiday": true
    },
    {
      "day": "07-01_2020",
      "is_holiday": true
    },
    {
      "day": "08-01_2020",
      "is_holiday": true
    },
    {
      "day": "09-01_2020",
      "is_holiday": false
    },
    {
      "day": "10-01_2020",
      "is_holiday": false
    },
    {
      "day": "11-01_2020",
      "is_holiday": true
    },
    {
      "day": "12-01_2020",
      "is_holiday": true
    },
    {
      "day": "13-01_2020",
      "is_holiday": false
    },
    {
      "day": "14-01_2020",
      "is_holiday": false
    },
    {
      "day": "15-01_2020",
      "is_holiday": false
    },
    {
      "day": "16-01_2020",
      "is_holiday": false
    },
    {
      "day": "17-01_2020",
      "is_holiday": false
    },
    {
      "day": "18-01_2020",
      "is_holiday": true
    },
    {
      "day": "19-01_2020",
      "is_holiday": true
    },
    {
      "day": "20-01_2020",
      "is_holiday": false
    },
    {
      "day": "21-01_2020",
      "is_holiday": false
    },
    {
      "day": "22-01_2020",
      "is_holiday": false
    },
    {
      "day": "23-01_2020",
      "is_holiday": false
    },
    {
      "day": "24-01_2020",
      "is_holiday": false
    },
    {
      "day": "25-01_2020",
      "is_holiday": true
    },
    {
      "day": "26-01_2020",
      "is_holiday": true
    },
    {
      "day": "27-01_2020",
      "is_holiday": false
    },
    {
      "day": "28-01_2020",
      "is_holiday": false
    },
    {
      "day": "29-01_2020",
      "is_holiday": false
    },
    {
      "day": "30-01_2020",
      "is_holiday": false
    },
    {
      "day": "31-01_2020",
      "is_holiday": false
    },
    {
      "day": "01-02_2020",
      "is_holiday": true
    },
    {
      "day": "02-02_2020",
      "is_holiday": true
    },
    {
      "day": "03-02_2020",
      "is_holiday": false
    },
    {
      "day": "04-02_2020",
      "is_holiday": false
    },
    {
      "day": "05-02_2020",
      "is_holiday": false
    },
    {
      "day": "06-02_2020",
      "is_holiday": false
    },
    {
      "day": "07-02_2020",
      "is_holiday": false
    },
    {
      "day": "08-02_2020",
      "is_holiday": true
    },
    {
      "day": "09-02_2020",
      "is_holiday": true
    },
    {
      "day": "10-02_2020",
      "is_holiday": false
    },
    {
      "day": "11-02_2020",
      "is_holiday": false
    },
    {
      "day": "12-02_2020",
      "is_holiday": false
    },
    {
      "day": "13-02_2020",
      "is_holiday": false
    },
    {
      "day": "14-02_2020",
      "is_holiday": false
    },
    {
      "day": "15-02_2020",
      "is_holiday": true
    },
    {
      "day": "16-02_2020",
      "is_holiday": true
    },
    {
      "day": "17-02_2020",
      "is_holiday": false
    },
    {
      "day": "18-02_2020",
      "is_holiday": false
    },
    {
      "day": "19-02_2020",
      "is_holiday": false
    },
    {
      "day": "20-02_2020",
      "is_holiday": false
    },
    {
      "day": "21-02_2020",
      "is_holiday": false
    },
    {
      "day": "22-02_2020",
      "is_holiday": true
    },
    {
      "day": "23-02_2020",
      "is_holiday": true
    },
    {
      "day": "24-02_2020",
      "is_holiday": true
    },
    {
      "day": "25-02_2020",
      "is_holiday": false
    },
    {
      "day": "26-02_2020",
      "is_holiday": false
    },
    {
      "day": "27-02_2020",
      "is_holiday": false
    },
    {
      "day": "28-02_2020",
      "is_holiday": false
    },
    {
      "day": "29-02_2020",
      "is_holiday": true
    },
    {
      "day": "01-03_2020",
      "is_holiday": true
    },
    {
      "day": "02-03_2020",
      "is_holiday": false
    },
    {
      "day": "03-03_2020",
      "is_holiday": false
    },
    {
      "day": "04-03_2020",
      "is_holiday": false
    },
    {
      "day": "05-03_2020",
      "is_holiday": false
    },
    {
      "day": "06-03_2020",
      "is_holiday": false
    },
    {
      "day": "07-03_2020",
      "is_holiday": true
    },
    {
      "day": "08-03_2020",
      "is_holiday": true
    },
    {
      "day": "09-03_2020",
      "is_holiday": true
    },
    {
      "day": "10-03_2020",
      "is_holiday": false
    },
    {
      "day": "11-03_2020",
      "is_holiday": false
    },
    {
      "day": "12-03_2020",
      "is_holiday": false
    },
    {
      "day": "13-03_2020",
      "is_holiday": false
    },
    {
      "day": "14-03_2020",
      "is_holiday": true
    },
    {
      "day": "15-03_2020",
      "is_holiday": true
    },
    {
      "day": "16-03_2020",
      "is_holiday": false
    },
    {
      "day": "17-03_2020",
      "is_holiday": false
    },
    {
      "day": "18-03_2020",
      "is_holiday": false
    },
    {
      "day": "19-03_2020",
      "is_holiday": false
    },
    {
      "day": "20-03_2020",
      "is_holiday": false
    },
    {
      "day": "21-03_2020",
      "is_holiday": true
    },
    {
      "day": "22-03_2020",
      "is_holiday": true
    },
    {
      "day": "23-03_2020",
      "is_holiday": false
    },
    {
      "day": "24-03_2020",
      "is_holiday": false
    },
    {
      "day": "25-03_2020",
      "is_holiday": false
    },
    {
      "day": "26-03_2020",
      "is_holiday": false
    },
    {
      "day": "27-03_2020",
      "is_holiday": false
    },
    {
      "day": "28-03_2020",
      "is_holiday": true
    },
    {
      "day": "29-03_2020",
      "is_holiday": true
    },
    {
      "day": "30-03_2020",
      "is_holiday": false
    },
    {
      "day": "31-03_2020",
      "is_holiday": false
    },
    {
      "day": "01-04_2020",
      "is_holiday": false
    },
    {
      "day": "02-04_2020",
      "is_holiday": false
    },
    {
      "day": "03-04_2020",
      "is_holiday": false
    },
    {
      "day": "04-04_2020",
      "is_holiday": true
    },
    {
      "day": "05-04_2020",
      "is_holiday": true
    },
    {
      "day": "06-04_2020",
      "is_holiday": false
    },
    {
      "day": "07-04_2020",
      "is_holiday": false
    },
    {
      "day": "08-04_2020",
      "is_holiday": false
    },
    {
      "day": "09-04_2020",
      "is_holiday": false
    },
    {
      "day": "10-04_2020",
      "is_holiday": false
    },
    {
      "day": "11-04_2020",
      "is_holiday": true
    },
    {
      "day": "12-04_2020",
      "is_holiday": true
    },
    {
      "day": "13-04_2020",
      "is_holiday": false
    },
    {
      "day": "14-04_2020",
      "is_holiday": false
    },
    {
      "day": "15-04_2020",
      "is_holiday": false
    },
    {
      "day": "16-04_2020",
      "is_holiday": false
    },
    {
      "day": "17-04_2020",
      "is_holiday": false
    },
    {
      "day": "18-04_2020",
      "is_holiday": true
    },
    {
      "day": "19-04_2020",
      "is_holiday": true
    },
    {
      "day": "20-04_2020",
      "is_holiday": false
    },
    {
      "day": "21-04_2020",
      "is_holiday": false
    },
    {
      "day": "22-04_2020",
      "is_holiday": false
    },
    {
      "day": "23-04_2020",
      "is_holiday": false
    },
    {
      "day": "24-04_2020",
      "is_holiday": false
    },
    {
      "day": "25-04_2020",
      "is_holiday": true
    },
    {
      "day": "26-04_2020",
      "is_holiday": true
    },
    {
      "day": "27-04_2020",
      "is_holiday": false
    },
    {
      "day": "28-04_2020",
      "is_holiday": false
    },
    {
      "day": "29-04_2020",
      "is_holiday": false
    },
    {
      "day": "30-04_2020",
      "is_holiday": true
    },
    {
      "day": "01-05_2020",
      "is_holiday": true
    },
    {
      "day": "02-05_2020",
      "is_holiday": true
    },
    {
      "day": "03-05_2020",
      "is_holiday": true
    },
    {
      "day": "04-05_2020",
      "is_holiday": true
    },
    {
      "day": "05-05_2020",
      "is_holiday": true
    },
    {
      "day": "06-05_2020",
      "is_holiday": false
    },
    {
      "day": "07-05_2020",
      "is_holiday": false
    },
    {
      "day": "08-05_2020",
      "is_holiday": true
    },
    {
      "day": "09-05_2020",
      "is_holiday": true
    },
    {
      "day": "10-05_2020",
      "is_holiday": true
    },
    {
      "day": "11-05_2020",
      "is_holiday": true
    },
    {
      "day": "12-05_2020",
      "is_holiday": false
    },
    {
      "day": "13-05_2020",
      "is_holiday": false
    },
    {
      "day": "14-05_2020",
      "is_holiday": false
    },
    {
      "day": "15-05_2020",
      "is_holiday": false
    },
    {
      "day": "16-05_2020",
      "is_holiday": true
    },
    {
      "day": "17-05_2020",
      "is_holiday": true
    },
    {
      "day": "18-05_2020",
      "is_holiday": false
    },
    {
      "day": "19-05_2020",
      "is_holiday": false
    },
    {
      "day": "20-05_2020",
      "is_holiday": false
    },
    {
      "day": "21-05_2020",
      "is_holiday": false
    },
    {
      "day": "22-05_2020",
      "is_holiday": false
    },
    {
      "day": "23-05_2020",
      "is_holiday": true
    },
    {
      "day": "24-05_2020",
      "is_holiday": true
    },
    {
      "day": "25-05_2020",
      "is_holiday": false
    },
    {
      "day": "26-05_2020",
      "is_holiday": false
    },
    {
      "day": "27-05_2020",
      "is_holiday": false
    },
    {
      "day": "28-05_2020",
      "is_holiday": false
    },
    {
      "day": "29-05_2020",
      "is_holiday": false
    },
    {
      "day": "30-05_2020",
      "is_holiday": true
    },
    {
      "day": "31-05_2020",
      "is_holiday": true
    },
    {
      "day": "01-06_2020",
      "is_holiday": false
    },
    {
      "day": "02-06_2020",
      "is_holiday": false
    },
    {
      "day": "03-06_2020",
      "is_holiday": false
    },
    {
      "day": "04-06_2020",
      "is_holiday": false
    },
    {
      "day": "05-06_2020",
      "is_holiday": false
    },
    {
      "day": "06-06_2020",
      "is_holiday": true
    },
    {
      "day": "07-06_2020",
      "is_holiday": true
    },
    {
      "day": "08-06_2020",
      "is_holiday": false
    },
    {
      "day": "09-06_2020",
      "is_holiday": false
    },
    {
      "day": "10-06_2020",
      "is_holiday": false
    },
    {
      "day": "11-06_2020",
      "is_holiday": true
    },
    {
      "day": "12-06_2020",
      "is_holiday": true
    },
    {
      "day": "13-06_2020",
      "is_holiday": true
    },
    {
      "day": "14-06_2020",
      "is_holiday": true
    },
    {
      "day": "15-06_2020",
      "is_holiday": false
    },
    {
      "day": "16-06_2020",
      "is_holiday": false
    },
    {
      "day": "17-06_2020",
      "is_holiday": false
    },
    {
      "day": "18-06_2020",
      "is_holiday": false
    },
    {
      "day": "19-06_2020",
      "is_holiday": false
    },
    {
      "day": "20-06_2020",
      "is_holiday": true
    },
    {
      "day": "21-06_2020",
      "is_holiday": true
    },
    {
      "day": "22-06_2020",
      "is_holiday": false
    },
    {
      "day": "23-06_2020",
      "is_holiday": false
    },
    {
      "day": "24-06_2020",
      "is_holiday": false
    },
    {
      "day": "25-06_2020",
      "is_holiday": false
    },
    {
      "day": "26-06_2020",
      "is_holiday": false
    },
    {
      "day": "27-06_2020",
      "is_holiday": true
    },
    {
      "day": "28-06_2020",
      "is_holiday": true
    },
    {
      "day": "29-06_2020",
      "is_holiday": false
    },
    {
      "day": "30-06_2020",
      "is_holiday": false
    },
    {
      "day": "01-07_2020",
      "is_holiday": false
    },
    {
      "day": "02-07_2020",
      "is_holiday": false
    },
    {
      "day": "03-07_2020",
      "is_holiday": false
    },
    {
      "day": "04-07_2020",
      "is_holiday": true
    },
    {
      "day": "05-07_2020",
      "is_holiday": true
    },
    {
      "day": "06-07_2020",
      "is_holiday": false
    },
    {
      "day": "07-07_2020",
      "is_holiday": false
    },
    {
      "day": "08-07_2020",
      "is_holiday": false
    },
    {
      "day": "09-07_2020",
      "is_holiday": false
    },
    {
      "day": "10-07_2020",
      "is_holiday": false
    },
    {
      "day": "11-07_2020",
      "is_holiday": true
    },
    {
      "day": "12-07_2020",
      "is_holiday": true
    },
    {
      "day": "13-07_2020",
      "is_holiday": false
    },
    {
      "day": "14-07_2020",
      "is_holiday": false
    },
    {
      "day": "15-07_2020",
      "is_holiday": false
    },
    {
      "day": "16-07_2020",
      "is_holiday": false
    },
    {
      "day": "17-07_2020",
      "is_holiday": false
    },
    {
      "day": "18-07_2020",
      "is_holiday": true
    },
    {
      "day": "19-07_2020",
      "is_holiday": true
    },
    {
      "day": "20-07_2020",
      "is_holiday": false
    },
    {
      "day": "21-07_2020",
      "is_holiday": false
    },
    {
      "day": "22-07_2020",
      "is_holiday": false
    },
    {
      "day": "23-07_2020",
      "is_holiday": false
    },
    {
      "day": "24-07_2020",
      "is_holiday": false
    },
    {
      "day": "25-07_2020",
      "is_holiday": true
    },
    {
      "day": "26-07_2020",
      "is_holiday": true
    },
    {
      "day": "27-07_2020",
      "is_holiday": false
    },
    {
      "day": "28-07_2020",
      "is_holiday": false
    },
    {
      "day": "29-07_2020",
      "is_holiday": false
    },
    {
      "day": "30-07_2020",
      "is_holiday": false
    },
    {
      "day": "31-07_2020",
      "is_holiday": false
    },
    {
      "day": "01-08_2020",
      "is_holiday": true
    },
    {
      "day": "02-08_2020",
      "is_holiday": true
    },
    {
      "day": "03-08_2020",
      "is_holiday": false
    },
    {
      "day": "04-08_2020",
      "is_holiday": false
    },
    {
      "day": "05-08_2020",
      "is_holiday": false
    },
    {
      "day": "06-08_2020",
      "is_holiday": false
    },
    {
      "day": "07-08_2020",
      "is_holiday": false
    },
    {
      "day": "08-08_2020",
      "is_holiday": true
    },
    {
      "day": "09-08_2020",
      "is_holiday": true
    },
    {
      "day": "10-08_2020",
      "is_holiday": false
    },
    {
      "day": "11-08_2020",
      "is_holiday": false
    },
    {
      "day": "12-08_2020",
      "is_holiday": false
    },
    {
      "day": "13-08_2020",
      "is_holiday": false
    },
    {
      "day": "14-08_2020",
      "is_holiday": false
    },
    {
      "day": "15-08_2020",
      "is_holiday": true
    },
    {
      "day": "16-08_2020",
      "is_holiday": true
    },
    {
      "day": "17-08_2020",
      "is_holiday": false
    },
    {
      "day": "18-08_2020",
      "is_holiday": false
    },
    {
      "day": "19-08_2020",
      "is_holiday": false
    },
    {
      "day": "20-08_2020",
      "is_holiday": false
    },
    {
      "day": "21-08_2020",
      "is_holiday": false
    },
    {
      "day": "22-08_2020",
      "is_holiday": true
    },
    {
      "day": "23-08_2020",
      "is_holiday": true
    },
    {
      "day": "24-08_2020",
      "is_holiday": false
    },
    {
      "day": "25-08_2020",
      "is_holiday": false
    },
    {
      "day": "26-08_2020",
      "is_holiday": false
    },
    {
      "day": "27-08_2020",
      "is_holiday": false
    },
    {
      "day": "28-08_2020",
      "is_holiday": false
    },
    {
      "day": "29-08_2020",
      "is_holiday": true
    },
    {
      "day": "30-08_2020",
      "is_holiday": true
    },
    {
      "day": "31-08_2020",
      "is_holiday": false
    },
    {
      "day": "01-09_2020",
      "is_holiday": false
    },
    {
      "day": "02-09_2020",
      "is_holiday": false
    },
    {
      "day": "03-09_2020",
      "is_holiday": false
    },
    {
      "day": "04-09_2020",
      "is_holiday": false
    },
    {
      "day": "05-09_2020",
      "is_holiday": true
    },
    {
      "day": "06-09_2020",
      "is_holiday": true
    },
    {
      "day": "07-09_2020",
      "is_holiday": false
    },
    {
      "day": "08-09_2020",
      "is_holiday": false
    },
    {
      "day": "09-09_2020",
      "is_holiday": false
    },
    {
      "day": "10-09_2020",
      "is_holiday": false
    },
    {
      "day": "11-09_2020",
      "is_holiday": false
    },
    {
      "day": "12-09_2020",
      "is_holiday": true
    },
    {
      "day": "13-09_2020",
      "is_holiday": true
    },
    {
      "day": "14-09_2020",
      "is_holiday": false
    },
    {
      "day": "15-09_2020",
      "is_holiday": false
    },
    {
      "day": "16-09_2020",
      "is_holiday": false
    },
    {
      "day": "17-09_2020",
      "is_holiday": false
    },
    {
      "day": "18-09_2020",
      "is_holiday": false
    },
    {
      "day": "19-09_2020",
      "is_holiday": true
    },
    {
      "day": "20-09_2020",
      "is_holiday": true
    },
    {
      "day": "21-09_2020",
      "is_holiday": false
    },
    {
      "day": "22-09_2020",
      "is_holiday": false
    },
    {
      "day": "23-09_2020",
      "is_holiday": false
    },
    {
      "day": "24-09_2020",
      "is_holiday": false
    },
    {
      "day": "25-09_2020",
      "is_holiday": false
    },
    {
      "day": "26-09_2020",
      "is_holiday": true
    },
    {
      "day": "27-09_2020",
      "is_holiday": true
    },
    {
      "day": "28-09_2020",
      "is_holiday": false
    },
    {
      "day": "29-09_2020",
      "is_holiday": false
    },
    {
      "day": "30-09_2020",
      "is_holiday": false
    },
    {
      "day": "01-10_2020",
      "is_holiday": false
    },
    {
      "day": "02-10_2020",
      "is_holiday": false
    },
    {
      "day": "03-10_2020",
      "is_holiday": true
    },
    {
      "day": "04-10_2020",
      "is_holiday": true
    },
    {
      "day": "05-10_2020",
      "is_holiday": false
    },
    {
      "day": "06-10_2020",
      "is_holiday": false
    },
    {
      "day": "07-10_2020",
      "is_holiday": false
    },
    {
      "day": "08-10_2020",
      "is_holiday": false
    },
    {
      "day": "09-10_2020",
      "is_holiday": false
    },
    {
      "day": "10-10_2020",
      "is_holiday": true
    },
    {
      "day": "11-10_2020",
      "is_holiday": true
    },
    {
      "day": "12-10_2020",
      "is_holiday": false
    },
    {
      "day": "13-10_2020",
      "is_holiday": false
    },
    {
      "day": "14-10_2020",
      "is_holiday": false
    },
    {
      "day": "15-10_2020",
      "is_holiday": false
    },
    {
      "day": "16-10_2020",
      "is_holiday": false
    },
    {
      "day": "17-10_2020",
      "is_holiday": true
    },
    {
      "day": "18-10_2020",
      "is_holiday": true
    },
    {
      "day": "19-10_2020",
      "is_holiday": false
    },
    {
      "day": "20-10_2020",
      "is_holiday": false
    },
    {
      "day": "21-10_2020",
      "is_holiday": false
    },
    {
      "day": "22-10_2020",
      "is_holiday": false
    },
    {
      "day": "23-10_2020",
      "is_holiday": false
    },
    {
      "day": "24-10_2020",
      "is_holiday": true
    },
    {
      "day": "25-10_2020",
      "is_holiday": true
    },
    {
      "day": "26-10_2020",
      "is_holiday": false
    },
    {
      "day": "27-10_2020",
      "is_holiday": false
    },
    {
      "day": "28-10_2020",
      "is_holiday": false
    },
    {
      "day": "29-10_2020",
      "is_holiday": false
    },
    {
      "day": "30-10_2020",
      "is_holiday": false
    },
    {
      "day": "31-10_2020",
      "is_holiday": true
    },
    {
      "day": "01-11_2020",
      "is_holiday": true
    },
    {
      "day": "02-11_2020",
      "is_holiday": false
    },
    {
      "day": "03-11_2020",
      "is_holiday": true
    },
    {
      "day": "04-11_2020",
      "is_holiday": true
    },
    {
      "day": "05-11_2020",
      "is_holiday": false
    },
    {
      "day": "06-11_2020",
      "is_holiday": false
    },
    {
      "day": "07-11_2020",
      "is_holiday": true
    },
    {
      "day": "08-11_2020",
      "is_holiday": true
    },
    {
      "day": "09-11_2020",
      "is_holiday": false
    },
    {
      "day": "10-11_2020",
      "is_holiday": false
    },
    {
      "day": "11-11_2020",
      "is_holiday": false
    },
    {
      "day": "12-11_2020",
      "is_holiday": false
    },
    {
      "day": "13-11_2020",
      "is_holiday": false
    },
    {
      "day": "14-11_2020",
      "is_holiday": true
    },
    {
      "day": "15-11_2020",
      "is_holiday": true
    },
    {
      "day": "16-11_2020",
      "is_holiday": false
    },
    {
      "day": "17-11_2020",
      "is_holiday": false
    },
    {
      "day": "18-11_2020",
      "is_holiday": false
    },
    {
      "day": "19-11_2020",
      "is_holiday": false
    },
    {
      "day": "20-11_2020",
      "is_holiday": false
    },
    {
      "day": "21-11_2020",
      "is_holiday": true
    },
    {
      "day": "22-11_2020",
      "is_holiday": true
    },
    {
      "day": "23-11_2020",
      "is_holiday": false
    },
    {
      "day": "24-11_2020",
      "is_holiday": false
    },
    {
      "day": "25-11_2020",
      "is_holiday": false
    },
    {
      "day": "26-11_2020",
      "is_holiday": false
    },
    {
      "day": "27-11_2020",
      "is_holiday": false
    },
    {
      "day": "28-11_2020",
      "is_holiday": true
    },
    {
      "day": "29-11_2020",
      "is_holiday": true
    },
    {
      "day": "30-11_2020",
      "is_holiday": false
    },
    {
      "day": "01-12_2020",
      "is_holiday": false
    },
    {
      "day": "02-12_2020",
      "is_holiday": false
    },
    {
      "day": "03-12_2020",
      "is_holiday": false
    },
    {
      "day": "04-12_2020",
      "is_holiday": false
    },
    {
      "day": "05-12_2020",
      "is_holiday": true
    },
    {
      "day": "06-12_2020",
      "is_holiday": true
    },
    {
      "day": "07-12_2020",
      "is_holiday": false
    },
    {
      "day": "08-12_2020",
      "is_holiday": false
    },
    {
      "day": "09-12_2020",
      "is_holiday": false
    },
    {
      "day": "10-12_2020",
      "is_holiday": false
    },
    {
      "day": "11-12_2020",
      "is_holiday": false
    },
    {
      "day": "12-12_2020",
      "is_holiday": true
    },
    {
      "day": "13-12_2020",
      "is_holiday": true
    },
    {
      "day": "14-12_2020",
      "is_holiday": false
    },
    {
      "day": "15-12_2020",
      "is_holiday": false
    },
    {
      "day": "16-12_2020",
      "is_holiday": false
    },
    {
      "day": "17-12_2020",
      "is_holiday": false
    },
    {
      "day": "18-12_2020",
      "is_holiday": false
    },
    {
      "day": "19-12_2020",
      "is_holiday": true
    },
    {
      "day": "20-12_2020",
      "is_holiday": true
    },
    {
      "day": "21-12_2020",
      "is_holiday": false
    },
    {
      "day": "22-12_2020",
      "is_holiday": false
    },
    {
      "day": "23-12_2020",
      "is_holiday": false
    },
    {
      "day": "24-12_2020",
      "is_holiday": false
    },
    {
      "day": "25-12_2020",
      "is_holiday": false
    },
    {
      "day": "26-12_2020",
      "is_holiday": true
    },
    {
      "day": "27-12_2020",
      "is_holiday": true
    },
    {
      "day": "28-12_2020",
      "is_holiday": false
    },
    {
      "day": "29-12_2020",
      "is_holiday": false
    },
    {
      "day": "30-12_2020",
      "is_holiday": false
    },
    {
      "day": "31-12_2020",
      "is_holiday": true
    }
  ]
}
```
