//prob-3: check-leap-year
function isleapYear(year) {
    if ((year % 4 == 0) && (year % 400 == 0) || (year % 100 != 0)) {
        console.log(year, 'this is year is leapyear');
    } else {
        console.log(year, 'this is year is not leapyear');
    };
    isleapYear();
}
