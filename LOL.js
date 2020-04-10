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

// write in function that changes the picture based on the time in the displayClock() function
function pictureGenerator() {
var catPicture = document.getElementById('catPicture');
const catPictureSpan = document.getElementById('randomCatPic');
const currentTime = new Date();
var hour = currentTime.getHours();

   if (hour >= 7 && hour < 12) {
    catPicture.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    catPictureSpan.innerText = "Good Morning! Hope You enjoyed your cat nap!";
}  else if (hour >= 12 && hour < 2) {
    catPicture.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    catPictureSpan.innerText = "It's lunch time kitties!";
}  else if (hour >= 14 && hour < 16) {
    catPicture.src = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    catPictureSpan.innerText = "Let's relax and take another cat nap.";
}  else if (hour >= 16 && hour < 18) {
    catPicture.src = 'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg';
    catPictureSpan.innerText = "IT'S PARTY TIIIME!"
}  else {
    catPicture.src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    catPictureSpan.innerText = "Let's go to sleep for the night.";
}
};

pictureGenerator();

// add a caption to the picture based on the time in the displayClock() function
