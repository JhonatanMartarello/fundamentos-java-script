const date = new Date();
console.log(date); // 2021-08-25T00:01:03.185Z

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const d = new Date(2018, 11, 24, 12, 33, 30, 0);
console.log(d); // 2018-12-24T14:33:30.000Z

const dataString = new Date("October 13, 2014 11:13:00");
console.log(dataString); // 2014-10-13T14:13:00.000Z

const dateUtcString = new Date();
console.log(dateUtcString.toUTCString()); // Tue, 24 Aug 2021 23:59:46 GMT

const dateToString = new Date();
console.log(dateToString.toDateString()); // Tue Aug 24 2021

const dateIso = new Date();
console.log(dateIso.toISOString()); // 2021-08-25T00:00:09.395Z

let msec = Date.parse("March 21, 2012");
console.log(msec); // 1332298800000

const dataConvertida = new Date(msec);
console.log(dataConvertida); // 2012-03-21T03:00:00.000Z


// the first month (January) is month number 0, so December returns month number 11.
console.log(date.getMonth()); // 7 - August
console.log(date.getFullYear()); // 2021

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[date.getMonth()]); // August

// The getDay() method returns the weekday of a date as a number (0-6).
// The first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday"
console.log(date.getDay()); // 2
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(days[date.getDay()]); // Tuesday

//---------------------------------------------------

const dateSet = new Date();
dateSet.setFullYear(2020, 11, 3);
console.log(dateSet);

//The setDate() method can also be used to add days to a date:
dateSet.setDate(dateSet.getDate() + 50);
console.log(dateSet);

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
    text = "Today is before January 14, 2100.";
} else {
    text = "Today is after January 14, 2100.";
}
console.log(text);

//-------------------------------------------------

const myDate = new Date();
console.log(isDate(myDate));

function isDate(myDate) {
    return myDate.constructor === Date;
}