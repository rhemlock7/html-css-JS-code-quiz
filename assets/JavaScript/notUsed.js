// Variables
const root = $('#root');
let timer = document.getElementById("timer");
let timeLeft = 90; // Time allotted for timer = seconds

// Questions & Options
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
let question = document.getElementById("h1");
let startButton = document.getElementById("bttn");
let answerDiv = document.createElement("div")
let answerText = document.createElement("p")

// Multiple choice container and buttons
let paragraph = document.getElementById("p");
let form = document.createElement("form");
//unsure about these
let questionCount;
questionCount = 0;
let buttonValue;


function createAnswerButton(multipleChoice) {
    // Create a div container
    const multipleChoiceOption = document.createElement('div');

    // Create the radio button
    const input = document.createElement('input');
    input.type = 'radio';
    input.className = 'button-choice';
    input.value = multipleChoice;
    input.id = multipleChoice;
    input.name = 'button-choice';

    multipleChoiceOption.appendChild(input);

    return multipleChoiceOption;
};

function createQuestion(questionObject) {
    // Create a div container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';

    // Change the h1 to = question
    question.text(questionObject.name);
    questionContainer.appendChild(question);

    // Append each multiple choice question to the form
    questionObject.options.forEach(({ multipleChoice }) => form.appendChild(createAnswerButton(multipleChoice)));
    questionContainer.appendChild(form);

    return questionContainer;
};


// Timer countdown function
function startQuiz() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    // Questions - Start at the first question "0"
    root.appendChild(createQuestion(questions[0]));
    
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