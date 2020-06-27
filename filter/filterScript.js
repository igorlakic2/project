let add = document.querySelector("#add");
let addDiv = document.querySelector(".addDiv");
let select = document.querySelector("select");
let icon = document.querySelector("#icn");
let addBtn = document.querySelector(".addBtn");
let table = document.querySelector("#myTable tbody");
let addInput = document.querySelector("#addInput");
let selectList = document.querySelector("#select");
let group = document.querySelectorAll(".groupEl");
let row = document.querySelectorAll("tr.row");
let searchInput = document.querySelector("#searchInput");
let deleteSpan = document.querySelectorAll("span");

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

// for(let i=0; i<group.length; i++){
//     group[i].addEventListener('click', () => {
//         let x = group[i].textContent.toLowerCase();
//         for(let j=0; j<row.length; j++){
//             console.log(row.length);
//             row[j].style.display = 'none';
//             if(x == 'all'){
//                 row[j].style.display = 'table-row';
//             }else if(x == 'serbia'){
//                 if(row[j].className.indexOf('serbia') > -1){
//                     row[j].style.display = 'table-row';
//                 }
//             }else if(x == 'spain'){
//                 if(row[j].className.indexOf('spain') > -1){
//                     row[j].style.display = 'table-row';
//                 }
//             }else if(x == 'russia'){
//                 if(row[j].className.indexOf('russia') > -1){
//                     row[j].style.display = 'table-row';
//                 }
//             }else if(x == 'china'){
//                 if(row[j].className.indexOf('china') > -1){
//                     row[j].style.display = 'table-row';
//                 }
//             }
//         }
//     })
// }

const display = (country) => {    
    row = document.querySelectorAll("tr.row");
    for(let i=0; i<row.length; i++){
        row[i].style.display = 'none';
        if(country != 'all'){
            if(row[i].className.indexOf(country) > -1){
                row[i].style.display = 'table-row';
            }
        }else{
            row[i].style.display = 'table-row';
        }
    }
}

const search = () => {
    row = document.querySelectorAll("tr.row");
    let x = searchInput.value.toLowerCase();
    for(let i=0; i<row.length; i++){ 
        let a = row[i];       
        txtValue = a.textContent || a.innerText;
        if (txtValue.toLowerCase().indexOf(x) > -1) {
            a.style.display = "table-row";
        }else {
            a.style.display = "none";
        }
    }
}

const deleteRow = (el) => {
    let row = el.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

// for(let i=0; i<deleteSpan.length; i++){
//     deleteSpan[i].addEventListener('click', () =>{
//         row = document.querySelectorAll("tr.row");    
//         for(let i=0; i<row.length; i++){ 
//             row[i].style.display = "none";
//         }  
//     });
// }

addBtn.addEventListener('click', () => {
    let strUser = selectList.options[selectList.selectedIndex].text;

    table.innerHTML += `<tr class="row ${strUser.toLowerCase()}" style="display: table-row">
                            <td>${addInput.value}</td>
                            <td>${strUser}  <span class="delete" onclick="deleteRow(this)">&times;</span></td>
                        </tr>`;
    addInput.value = "";
})


display('all');