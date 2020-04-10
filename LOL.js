function displayClock() {
    const currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();

    var amPm = (hour < 12) ? "AM" : "PM";

    if (hour > 12) {
        hour = hour - 12;
    };

    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    second = ("0" + second).slice(-2);

    // update clock to to be a 12 hr clock, and add AM and PM
    const clock = hour + ":" + minute + ":" + second + amPm;
    const HTMLClock = document.getElementById('currentTime');
    HTMLClock.innerHTML = clock;
    var t = setTimeout(displayClock, 1000);
}

displayClock();