const close = document.querySelector("#close");
const open = document.querySelector("#open");
const nav = document.querySelector("nav");
const background = document.querySelector(".background");
const ul = document.querySelector("nav ul");

open.addEventListener('click', () => { 
    nav.style.width = "300px";
    document.body.style.marginLeft = "300px";
    background.style.width = "100%";
});

close.addEventListener('click', () => { 
    nav.style.width = "0";
    document.body.style.marginLeft = "0";
    background.style.width = "0";
});