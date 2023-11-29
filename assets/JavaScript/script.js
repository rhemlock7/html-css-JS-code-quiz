// Variables
let timer = document.getElementById("timer");
let timeLeft = 60; // Time allotted for timer = seconds

// Questions & Options
let questionArray = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "This is a test for question 2",
        options: ["Option", "Ryan", "Hemlock", "Code"],
        correctAnswer: "Option"
    }
];
    

// HTML Elements
let question = document.getElementById("h1");
let startButton = document.getElementById("bttn");
let answerDiv = document.createElement("div")
let answerText = document.createElement("p")

// Multiple choice container and buttons
let paragraph = document.getElementById("p");
let form = document.createElement("form");

// Add dynamic multiple choice questions
function addMultipleChoice(bttnValue, correct) {
    let radio = document.createElement("input");
    
    //Set the input's value
    radio.type = 'button';
    radio.value = bttnValue;
    radio.id = bttnValue;
    radio.className = 'button-choice'

    // Append the button to the form
    form.appendChild(radio);
    paragraph.replaceWith(form);

    // Append answer reveal
    answerDiv.id = 'answer-div'
    answerDiv.appendChild(answerText);
    

    // Check if answer was correct
    radio.addEventListener("click", function(){
        if (correct === true) {
            form.appendChild(answerDiv);
            answerText.textContent = "✅ Correct!"
        } else {
            form.appendChild(answerDiv);
            answerText.textContent = "❌ Wrong answer... Deducting 10 seconds."
            timeLeft = timeLeft - 10;
        }
    })
}

// Question functions
function displayQuestion() {
    question.textContent = questionArray[0].question;

    addMultipleChoice(questionArray[0].options[0]);
    addMultipleChoice(questionArray[0].options[1]);
    addMultipleChoice(questionArray[0].options[2]);
    addMultipleChoice(questionArray[0].options[3]);

}

// Timer countdown function
function countdown() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    // Questions
    displayQuestion();

    
    // Timer countdown. Stop quiz if timer hits 0
    let timeInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;

        if(timeLeft === -1) {
            clearInterval(timeInterval);
            timer.textContent = "Out of time!";
            timer.setAttribute("style", "color:red")
            question.textContent = "Quiz Ended 😔";
            answerText.textContent = "";
            form.textContent = "";
        }

    }, 1000)
}

countdown()

// Window.location and local storage for "view highscores"!!