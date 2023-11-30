// Variables
let timer = document.getElementById("timer");
let timeLeft = 90; // Time allotted for timer = seconds

// Questions & Options
let questionArray = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition of an if/else statement is enclosed with ______.",
        options: ["Parenthesis", "Curly Brackets", "Quotes", "Square Brackets"],
        correctAnswer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        options: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ["Commas", "Quotes", "Curly Brackets", "Parenthesis"],
        correctAnswer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "Terminal/Bash", "For Loops", "Console Log"],
        correctAnswer: "Console Log"
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
let questionCount;
questionCount = 0;
let buttonValue;

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

    // Check correct answer
}


// Question functions
function displayQuestion(indexNumber) {
    question.textContent = questionArray[indexNumber].question;

    if (indexNumber === 0) {
        addMultipleChoice(questionArray[indexNumber].options[0]);
        addMultipleChoice(questionArray[indexNumber].options[1]);
        addMultipleChoice(questionArray[indexNumber].options[2]);
        addMultipleChoice(questionArray[indexNumber].options[3]);
    } else {
        $("#Strings").val(questionArray[indexNumber].options[0])
        $("#Booleans").val(questionArray[indexNumber].options[1])
        $("#Alerts").val(questionArray[indexNumber].options[2])
        $("#Numbers").val(questionArray[indexNumber].options[3])
    }

    // Append answer reveal
    answerDiv.id = 'answer-div'
    answerDiv.appendChild(answerText);

    form.on('click', function(){
        console.log("click")
    })
} 


// Timer countdown function
function startQuiz(indexNumber) {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    // Questions - Start at the first question "0"
    displayQuestion(indexNumber);
    
    // Timer countdown. Stop quiz if timer hits 0
    // let timeInterval = setInterval(function() {
    //     timeLeft--;
    //     timer.textContent = "Time: " + timeLeft;

    //     if(timeLeft === -1) {
    //         clearInterval(timeInterval);
    //         timer.textContent = "Out of time!";
    //         timer.setAttribute("style", "color:red")
    //         question.textContent = "Quiz Ended 😔";
    //         answerText.textContent = "";
    //         form.textContent = "";
    //     }

    // }, 1000)
}

startQuiz(questionCount);


// form.on("click", ".button-choice", function(){
//     buttonValue = bttnValue;
//     console.log("clicked")
    // if (buttonValue === questionArray[questionCount].correctAnswer ) {
    //     console.log(questionCount)
    //     form.appendChild(answerDiv);
    //     answerText.textContent = "✅ Correct!"
    //     setTimeout(() => {
    //         answerText.textContent = ""
    //         questionCount++;
    //         buttonValue = "NEW ITEM!";
    //         displayQuestion(questionCount)
    //     }, 2000);
        
    // } else {
    //     form.appendChild(answerDiv);
    //     answerText.textContent = "❌ Wrong answer... Deducting 10 seconds."
    //     timeLeft = timeLeft - 10;
    //     setTimeout(() => {
    //         answerText.textContent = ""
    //         questionCount++;
    //         displayQuestion(questionCount)
    //     }, 2000);
    // }