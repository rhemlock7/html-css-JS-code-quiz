// Variables
let timer = document.getElementById("timer");
let timeLeft = 60; // Time allotted for timer = seconds

// HTML Elements
let question = document.getElementById("h1");
let startButton = document.getElementById("bttn");

// Multiple choice container and buttons
let paragraph = document.getElementById("p");
let answerDiv = document.createElement("div")
let form = document.createElement("form");

// Add dynamic multiple choice questions
function addMultipleChoice(bttnValue) {
    let radio = document.createElement("input");
    
    //Set the input's value
    radio.type = 'button';
    radio.value = bttnValue;
    radio.id = bttnValue;
    radio.className = 'button-choice'

    // Append the button to the form
    form.appendChild(radio);
    paragraph.replaceWith(form);
}

// Question functions
function questionOne() {
    question.textContent = "Commonly used data types do NOT include:";

    addMultipleChoice("Strings");
    addMultipleChoice("Booleans");
    addMultipleChoice("Alerts");
    addMultipleChoice("Numbers");

}

// Timer countdown function
function countdown() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    // Questions
    questionOne();

    
    // Timer countdown. Stop quiz if timer hits 0
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