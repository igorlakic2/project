const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');


setInterval(() => {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let hourDeg = ((hour / 12) * 360) + 90;
    let minDeg = ((min / 60) * 360) + 90;
    let secDeg = ((sec / 60) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}, 1000);