setInterval(function () {
    let timeNow = new Date();
let hours = timeNow.getHours();
let mins = timeNow.getMinutes();
let seconds = timeNow.getSeconds();
//console.log(timeNow , hours , mins, seconds);


let rotateSec = seconds * 6;
let secondHand = document.querySelector('.second-hand');
//console.log(rotateSec);
secondHand.style.transform = `rotate(${rotateSec + 90}deg)`;

let rotateMins = mins * 6;
let minuteHand = document.querySelector('.min-hand');
//console.log(rotateMins);
minuteHand.style.transform = `rotate(${rotateMins + 90}deg)`;

let rotateHour = hours * 30;
let hourHand = document.querySelector('.hour-hand');
//console.log(rotateHour);
hourHand.style.transform = `rotate(${rotateHour + 90}deg)`;
} , 1000);