// Variables
const root = $('#root');
let timer = document.getElementById("timer");
let timeLeft = 90; // Time allotted for timer = seconds

// Array containing the Questions & Options
const questions = [
    {
        question: "Commonly used data types do NOT include:",
        options: [
            {
                option: "Strings",
                isCorrect: false
            },
            {
                option: "Booleans",
                isCorrect: false
            },
            {
                option: "Alerts",
                isCorrect: true
            },
            {
                option: "Numbers",
                isCorrect: false
            }]
    },
    {
        question: "The condition of an if/else statement is enclosed with ______.",
        options: [
            {
                option: "Parenthesis",
                isCorrect: true
            },
            {
                option: "Curly Brackets",
                isCorrect: false
            },
            {
                option: "Quotes",
                isCorrect: false
            },
            {
                option: "Square Brackets",
                isCorrect: false
            }]
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        options: [
            {
                option: "Numbers & Strings",
                isCorrect: false
            },
            {
                option: "Other Arrays",
                isCorrect: false
            },
            {
                option: "Booleans",
                isCorrect: false
            },
            {
                option: "All of the above",
                isCorrect: true
            }]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: [
            {
                option: "Commas",
                isCorrect: false
            },
            {
                option: "Quotes",
                isCorrect: true
            },
            {
                option: "Curly Brackets",
                isCorrect: false
            },
            {
                option: "Parenthesis",
                isCorrect: false
            }]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            {
                option: "JavaScript",
                isCorrect: false
            },
            {
                option: "Terminal/Bash",
                isCorrect: false
            },
            {
                option: "For Loops",
                isCorrect: false
            },
            {
                option: "Console Log",
                isCorrect: true
            }]
    }
]

// HTML Elements
let questionh1 = document.getElementById("h1");
let startButton = document.getElementById("bttn");


// Create multiple choice options
function createMultipleChoice() {
    const optionDiv = document.createElement('div');

    const choiceButton = document.createElement('button');
}


// Create question
function displayQuestion(index){
    questionh1.textContent = questions[index].question;
}





// function createQuestion(questionArray) {
//     const questionContainer = document.createElement('div');
//     questionContainer.className = 'question-container';

//     // Update the h1 with the object's question
//     questionh1.textContent = questionArray.question;
//     // Append h1 to the questionContainer div
//     questionContainer.appendChild(questionh1);

//     const form = document.createElement('form');
//     questionArray.options.forEach(({ options }) => form.appendChild(createMultipleChoice()));
//     container.appendChild(form);
// }


// Timer countdown function
function startQuiz() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")
    
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

startQuiz();