function leapYear(year) {
    let isLeap = false;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        isLeap = true;
    }
    console.log(isLeap == true ? "yes" : "no");
}
leapYear(2000);
leapYear(1999);
leapYear(1900);