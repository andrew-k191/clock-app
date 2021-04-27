/*---Time Logic ---*/
const currentTime = () => {
    const actualTime = document.querySelector('.actualTime');
    const timeObj = new Date();
    const [hour, minutes, seconds] = [
        addLeadingZero(timeObj.getHours()), 
        addLeadingZero(timeObj.getMinutes()), 
        addLeadingZero(timeObj.getSeconds())
    ];

    const isAm = hour < 12 || hour === 0;
    let amPm = isAm ? 'AM' : 'PM';
    actualTime.textContent = `${correctHour(hour)}:${minutes}:${seconds} ${amPm}`;
};

const addLeadingZero = (number) => {
    return ((number < 10) ? ('0' + number) : number);
};

const correctHour = (whatHour) => {
    // whatHour value will be reassigned if either condition is true
    whatHour = (whatHour >= 13) ? (whatHour - 12) : whatHour;
    whatHour = (whatHour === 0) ? (whatHour + 12) : whatHour;
    return whatHour;
};

/*---Date Logic---*/
const currentDate = () => {
    const actualDate = document.querySelector('.actualDate');
    const dateObj = new Date();
    const [dateToday, weekday, month, year] = [
        addDateSuffix(dateObj.getDate()), 
        dateObj.getDay(), 
        dateObj.getMonth(), 
        dateObj.getFullYear()
    ];
    actualDate.textContent = `${week[weekday]}, ${months[month]} ${dateToday} ${year}`;
    // week[weekday] + ', ' + months[month] + ' ' + date + addDateSuffix(date) + ' ' + year;
}

const addDateSuffix = (dateOfMonth) => {
    if ((dateOfMonth < 10) || (dateOfMonth > 20)) {
        switch (dateOfMonth % 10) {
            case 1:
                return dateOfMonth + 'st';
            case 2:
                return dateOfMonth + 'nd';
            case 3:
                return dateOfMonth + 'rd';
        }
    }
    return dateOfMonth + 'th';
};

const week = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
];

const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

currentTime();
currentDate();
setInterval(() => {
    currentDate();
    currentTime();
});


