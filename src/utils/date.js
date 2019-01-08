export const convertToTwoDigits = num => {
  return num < 10 ? "0" + num : num;
};

export const isValidMonth = month => {
    month = parseInt(month);
    return month >= 1 && month <= 12;
};

export const isValidYear = year => {
    year = parseInt(year);
    return year >= 1900 && year <= 9999; // 1900 is debatable.
};

export const numOfDaysInMonth = (month, year = getCurrentYear()) => {
    month--;

    return [
        31, // Jan
        isLeapYear(year) ? 29 : 28, // Feb
        31, // Mar
        30, // Apr
        31, // May
        30, // June
        31, // July
        31, // Aug
        30, // Sep
        31, // Oct
        30, // Nov
        31  // Dec
    ][month];
};

export const isLeapYear = year => {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

export const getCurrentYear = () => {
  return ((new Date()).getYear() + 1900);
};

export const getCurrentMonth = () => {
  return ((new Date()).getMonth() + 1);
};


export const getMonthString = month => {
    month--;

    return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ][month];
};
