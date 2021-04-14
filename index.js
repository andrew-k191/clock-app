const currentTime = () => {
    const dateObj = new Date();
    // hour, minutes, and seconds
    const [hour, minutes, seconds] = [dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds()];
    // Selecting actualTime div
    const actualTime = document.querySelector('.actualTime');
    actualTime.innerHTML = zeroAddition(hour) + correctHour(hour) + '<span>:</span>' + zeroAddition(minutes) + minutes + '<span>:</span>' + zeroAddition(seconds) + seconds + ' ' + whichMeridiem(hour);
};

const currentDate = () => {
    const dateObj = new Date();
    // current day, current day of the week, current month, current year
    const [today, weekday, month, year] = [dateObj.getDate(), dateObj.getDay(), dateObj.getMonth(), dateObj.getFullYear()];
    // Arrays for weekday and month
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Selecting actualDate div
    const actualDate = document.querySelector('.actualDate');
    actualDate.innerHTML = week[weekday] + ', ' + months[month] + ' ' + today + whichSuffix(today) + ' ' + year;
}

// Zero Addition
const zeroAddition = (value) => {
    return ((value < 10) ? 0 : '');
};
// This function should eliminate 010, 011, 012 hour from being displayed
const correctHour = (whatHour) => {
    if (whatHour >= 13) {
        const hourCorrection = whatHour - 12;
        if (hourCorrection >= 10) {
            return hourCorrection;
        } 
        return '0' + hourCorrection;
    }
    return whatHour;
};
// AM or PM
const whichMeridiem = (whatHour) => {
    return ((whatHour < 12) ? 'AM' : 'PM');
};

// Adds a suffix, 'st', 'nd', 'rd', 'th';
const whichSuffix = (dayOfMonth) => {
    if (([1, 21, 31].indexOf(dayOfMonth)) !== -1) {
        return 'st';
    } 
    else if (([2, 22].indexOf(dayOfMonth)) !== -1){
        return 'nd';
    }
    else if (([3, 23].indexOf(dayOfMonth)) !== -1) {
        return 'rd';
    } 
    else {
        return 'th';
    }
};

// Generates 'live/tick' feature of clock
setInterval(currentTime, 1000); 
setInterval(currentDate, 1000);

