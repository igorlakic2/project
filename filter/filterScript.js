let add = document.querySelector("#add");
let addDiv = document.querySelector(".addDiv");
let select = document.querySelector("select");
let icon = document.querySelector("#icn");
let addBtn = document.querySelector(".addBtn");

add.addEventListener('click', () => {
    if(addDiv.style.height == "0px"){
        addDiv.style.height = '57px';
        select.style.display = 'inline-block';
        icon.style.transform = 'rotate(180deg)';
        addBtn.style.display = 'inline-block';
    }else{
        addDiv.style.height = '0px'; 
        select.style.display = 'none'; 
        icon.style.transform = 'rotate(0deg)';
        addBtn.style.display = 'none';
    }
});