const btns = document.querySelectorAll("button");
let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".num");
let operations = document.getElementsByClassName("operations");
let number1 = null;
let number2 = null;
let operator = null;

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", () => {
        if(display.textContent == "0" && btns[i].className == "num"){
            display.textContent = "";
        }        

        display.innerHTML += btns[i].textContent;

        if(btns[i].className == "operation"){
            let temp = display.textContent;
            number1 = temp.slice(0, temp.length-1);
            display.textContent = "0";
            //console.log(number1);
            operator = btns[i].textContent;
            //console.log(operator);
        }

        if(btns[i].className == "equal"){
            number2 = display.textContent; 
            //console.log(number2);
        }

        if(number1 && number2){            
            let res = calculate(number1, number2, operator);
            display.textContent = res;
            setTimeout(() => {
                alert("Done!");
                display.textContent = "0";
                number1 = null;
                number2 = null;
                operator = null;

            }, 1500);            
        }


        if(btns[i].dataset.action == "clear"){
            display.textContent = "0";
        }
    })
}

const calculate = (num1, num2, op) => {
    let result = 0;
    switch (op) {
        case '+':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            break;
    }

    return result;
}



        // if(btns[i].className == "operation"){
        //     console.log(display.textContent);
        //     display.textContent = "0";

        //     calculate(number1, number2, btns[i].textContent);
        // }


// for(let i=0; i<operations.length; i++){
//     operations[i].addEventListener('click', () => {
//         number1 = display.textContent;
//         operator = operations[i];
//         display.textContent = "0";
//     })
// }


        

        // for(let j=0; j<operations.length; j++){
        //     operations[j].addEventListener("click", () => {
        //         number1 = display.textContent;
        //         console.log(`First number: ${number1}`);
        //         display.textContent = "0";                
    
        //         //calculate(number1, number2, btns[i].textContent);
        //     })
        // }