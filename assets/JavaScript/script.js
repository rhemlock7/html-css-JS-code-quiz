// ---------- Variables ---------- //
const root = $('#root');
let timer = document.getElementById("timer");
let timeLeft = 90; // Time allotted for timer = seconds

// Array containing the Questions & Options
const questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: [
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
        answers: [
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
        answers: [
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
        answers: [
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
        answers: [
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

// ---------- HTML Elements ---------- //
let questionh1 = document.getElementById("h1");
let startButton = document.getElementById("bttn");
let paragraph = document.getElementById("p")

// ---------- Question & Score tracking ---------- //
let currentQuestionIndex = 0;
let score = 0;


// ---------- Create question ---------- //
function displayQuestion(questionArray){
    questionh1.textContent = questionArray.question;

    const multipleChoiceContainer = document.createElement('div');
    
    // Add the multiple choice answers
    questionArray.answers.forEach(answer => {
        // console.log(answer.option);
        // create multiple choice container div
        // create the buttons to be within the div
        const choiceButton = document.createElement('button');
        // $("<button>")

        // Button value === index. Passing index through displayQuestion function
        choiceButton.dataset.answer = answer.isCorrect;
        choiceButton.textContent = answer.option;

        // Append the button to the container
        multipleChoiceContainer.append(choiceButton);
        paragraph.replaceWith(multipleChoiceContainer);

        // Event listener to handle click
        choiceButton.addEventListener('click', selectAnswer);
    });
}

// ---------- Determines if answer is correct ---------- //
function selectAnswer(event) {
    const selectButton = event.target;
    // console.log(selectButton)
    if (selectButton.dataset.answer === "true") {
        console.log("true")
        const answerDisplay = document.createElement('div')
        const answerText = document.createElement('p');
        // setTimeout(
        //     answerText.textContent = "✅ Correct!"
        //     answerDisplay.append(answerText)
        //     paragraph.append(answerDisplay)
        // ,1000)
        // say "✅ Correct"
        
        // increase "currentQuestionIndex" to go to next question
    } else {
        console.log("false")
        // say "❌ Wrong answer... deducting 10 seconds."
        // increase "currentQuestionIndex" to go to next question
    }
}

// ---------- Timer countdown function ---------- //
function startQuiz() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    currentQuestionIndex = 0;
    score = 0;
    displayQuestion(questions[currentQuestionIndex]);
    
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

// ---------- End of Quiz - Submit Score ---------- //


// ---------- Show High Scores ---------- //

startQuiz()
