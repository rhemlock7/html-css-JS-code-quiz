// Variables
let timer = document.getElementById("timer");

// HTML Elements
let question = document.getElementById("h1");
let startButton = document.getElementById("bttn");

// Multiple choice container and buttons
let paragraph = document.getElementById("p");


function addMultipleChoice() {
    let form = document.createElement("form");
    let radio = document.createElement("input");

    radio.type = 'button';
    radio.value = 'value';
    radio.className = 'button-choice'

    form.appendChild(radio);
    paragraph.replaceWith(form);
}

// Timer countdown function
function countdown() {
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")
    addMultipleChoice();
    let timeLeft = 60;

    question.textContent = "Testing";
    paragraph.textContent = "Testing 2"

    let timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if(timeLeft === -1) {
            clearInterval(timeInterval);
            timer.textContent = "Out of time!";
            timer.setAttribute("style", "color:red")
        }

    }, 1000)
}

addMultipleChoice();
