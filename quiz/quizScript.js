let questionDiv = document.getElementById("questionDiv");
let answersList = document.getElementById("answersList");

function Question(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;

    this.display = () => {
        console.log(this.question);
        questionDiv.innerHTML = this.question;

        let node = document.createElement("li");
        let niz = [];
        for(let i=0; i<this.answers.length; i++){
            niz.push(this.answers[i]);
            console.log(niz);
            // document.querySelector(".ol").innerHTML += `<li>${this.answers[i]}</li>`;
            
            document.querySelector(".ol").innerHTML += `<input type="radio"id="">${this.answers[i]}</input>`;
            // node.innerHTML = this.answers[i];
            // answersList.appendChild(node);
            // for(let i=0; i<niz.length; i++){
            //     document.querySelector("ol").innerHTML += `<li>${niz[i]}</li>`;
            // }
            // document.querySelector("ol li").innerHTML = this.answers[i];
        }
    }
}


Question.prototype.displayQ = () => {
    console.log(this.question);
    questionDiv.innerHTML = this.question;    
}

let q1 = new Question("This is javascript?", ["Yes", "No"], 0);
let q2 = new Question("9 > 5", ["True", "False"], 0);
let q3 = new Question("5 + 11", ["2", "6", "16", "21", "26"], 1);

let questions = [q1, q2, q3];

let rnd = Math.round(Math.random() * 2);
console.log(questions[rnd].display());