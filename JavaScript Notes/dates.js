function Submit() {
    
    //learning how to use date objects here
    //https://www.w3schools.com/js/js_dates.asp

    //Short dates are written with an "MM/DD/YYYY" syntax like this:
    //let date = new Date("10/31/2020");
    
    //JavaScript counts months from 0 to 11.January is 0. December is 11.
    //that means below code will print month as January
    //You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
    //console.log(new Date(2020, 00, 01));
    //console.log(new Date(2020));

    //Previous Century
    //One and two digit years will be interpreted as 19xx:
    //console.log(new Date(99, 11, 24));

    //JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).

    //getFullYear
    //console.log(date.getFullYear());

    //getMonth
    //console.log(date.getMonth()+1);

    // let today, someday, text;
    // today = new Date();
    // someday = new Date();
    // someday.setFullYear(2020, 0, 14);

    // if (someday > today) {
    //     text = "Today is before January 14, 2100.";
    // }
    // else {
    //     text = "Today is after January 14, 2100.";
    // }

    // console.log(text);
}