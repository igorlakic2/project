let questionDiv = document.getElementById("questionDiv");
let answersList = document.getElementById("answersList");
let next = document.querySelector(".next");
let finish = document.querySelector(".finish");
let score = 0;
let trueAnswer = 0;
let displayDiv = document.querySelector(".quiz");

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.display = () => {
        console.log(this.question);
        questionDiv.innerHTML = this.question;

        for(let i=0; i<this.answers.length; i++){
            document.querySelector(".answersList").innerHTML += `<li class="answer">${this.answers[i]}</li>`;
        }
    }

    this.correctOrWrong = () => {                
        let a = document.querySelectorAll(".answer");

        for(let i=0; i<this.answers.length; i++){          
            a[i].addEventListener('click', () => {  
                for(let i=0; i<this.answers.length; i++){  
                    a[i].classList.remove("selected"); 
                    a[i].style.pointerEvents = 'none';
                }
                a[i].classList.add("selected"); 
                if(this.answers[i] == this.answers[this.correctAnswer]){
                    trueAnswer++;
                }
            });
        }
    }
}

let q1 = new Question("This is javascript?", ["Yes", "No"], 0);
let q2 = new Question("5 * 7?", ["5", "61", "20", "35", "40"], 3);
let q3 = new Question("100 - 22?", ["50", "100", "80", "40", "78"], 4);
let q4 = new Question("9 * 0?", ["90", "1", "0", "9"], 2);
let q5 = new Question("11 + 20?", ["30", "1120", "21", "31"], 3);
let q6 = new Question("0 / 45645?", ["0", "0.45645", "infinty"], 0);
let q7 = new Question("100 / 0?", ["50", "0", "80", "infinity", "78"], 3);
let q8 = new Question("9 * 10?", ["10", "90", "130", "900"], 1);

let questions = [q1, q2, q3, q4, q5, q6, q7, q8];
shuffle(questions);
let x = 0;
let rnd = Math.round(Math.random() * 8);

finish.addEventListener('click', () => {
    let perc = (trueAnswer / questions.length) * 100;
    displayDiv.innerHTML = `<h1>Your result: ${trueAnswer}/${questions.length}</h1>
                            <h3>${perc}%</h3>
                            <a href=""><button>TRY AGAIN</button></a>
                            `

})

next.addEventListener('click', () => {
    next.textContent = "NEXT";
    document.querySelector(".answersList").innerHTML = "";
    questions[x].display();
    questions[x].correctOrWrong();
    x++;

    if(x == questions.length){
        next.style.display = "none";
        finish.style.display = "block";
    }
})

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
