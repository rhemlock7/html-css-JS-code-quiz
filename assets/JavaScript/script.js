// ---------- Variables ---------- //
const root = $('#root');
let timer = document.getElementById("timer");
let timeLeft = 20; // Time allotted for timer = seconds
let timeInterval;

// ---------- High Score ---------- //
const highScore = JSON.parse(localStorage.getItem('highScores'));

function stringifyArray() {
    localStorage.setItem('highScores', JSON.stringify(highScore))

    console.log("registered to local storage")
}

function printHighScores() {
    let lastHighScore = JSON.parse(localStorage.getItem('highScores'))
    console.log(lastHighScore)

    lastHighScore.forEach(display => {
        const scoreLi = document.createElement('li');
        const leaderBoard = document.getElementById('high-score-list');
        scoreLi.textContent = display.initials + ": " + display.score;

        leaderBoard.append(scoreLi);
    })
}

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
function displayQuestion(questionArray) {
    questionh1.textContent = questionArray.question;
    paragraph.textContent = "";
    const multipleChoiceContainer = document.createElement('div');
    multipleChoiceContainer.className = "multiple-choice-container"

    // Add the multiple choice answers
    questionArray.answers.forEach(answer => {
        // create multiple choice container div
        // create the buttons to be within the div
        const choiceButton = document.createElement('button');
        // $("<button>")

        // Button value === index. Passing index through displayQuestion function
        choiceButton.dataset.answer = answer.isCorrect;
        choiceButton.textContent = answer.option;

        // Append the button to the container
        multipleChoiceContainer.append(choiceButton);
        paragraph.append(multipleChoiceContainer);

        // Event listener to handle click
        choiceButton.addEventListener('click', selectAnswer);
    });
}

// ---------- Determines if answer is correct ---------- //
function selectAnswer(event) {
    const selectButton = event.target;

    // Create div containing the answer status
    const answerDiv = document.createElement('div');
    answerDiv.className = "answer-status";
    const answerText = document.createElement('p');
    answerDiv.append(answerText)
    // Append the status div to the root
    root.append(answerDiv);

    // Determine if the button selected is correct or not
    if (selectButton.dataset.answer === "true") {
        if (timeLeft < 0 || currentQuestionIndex > 4) {
            clearInterval(timeInterval);
            endQuiz();
        } else {
            answerText.textContent = "✅ Correct"
            setTimeout(function () {
                currentQuestionIndex++;
                score = timeLeft + 20;
                answerText.textContent = "";
                displayQuestion(questions[currentQuestionIndex])
            }, 500)

        }
    } else {
        timeLeft = timeLeft - 10;
        score = timeLeft - 10;
        if (timeLeft < 0 || currentQuestionIndex > 4) {
            clearInterval(timeInterval);
            endQuiz();
        } else {
            answerText.textContent = "❌ Wrong answer... deducting 10 seconds."
            setTimeout(function () {
                currentQuestionIndex++;
                score = timeLeft + 10;
                answerText.textContent = "";
                displayQuestion(questions[currentQuestionIndex])
            }, 500)
        }
    }
}

// ---------- Timer countdown function ---------- //
function startQuiz() {
    // Remove start button and style text-align:left;
    startButton.setAttribute("style", "display:none;");
    document.body.setAttribute("style", "text-align:left;")

    timeInterval = setInterval(timerFunction, 1000)

    // Set score and display the first question
    score = 0;
    displayQuestion(questions[currentQuestionIndex]);
}

function timerFunction() {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
}

function displayMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    paragraph.append(messageElement);
}

// ---------- End of Quiz - Submit Score ---------- //
function endQuiz() {

    // Clear timer
    clearInterval()
    timer.textContent = "Out of time!";
    timer.setAttribute("style", "color:red")

    // Update text on screen
    const endText = document.createElement('p');
    questionh1.textContent = "All done! ";
    paragraph.textContent = "Your final score is " + score;
    endText.textContent = "Input your initials to save your score:"
    paragraph.append(endText);

    // Create an input
    const input = document.createElement('input')
    const submitButton = document.createElement('button')
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Input your initials");
    input.id = "score-input"
    submitButton.textContent = "Submit Your Score";

    root.append(input);
    root.append(submitButton);


    // Accept the input
    submitButton.addEventListener("click", function () {
        let initials = input.value.trim();
        if (initials === "") {
            displayMessage("Email cannot be blank");
        } else {
            displayMessage("Registered successfully");

            // Store the input
            localStorage.setItem("Player", initials);
            localStorage.setItem("Score", score)

            // Function that pushes intials to an array
            highScore.push({ initials, score });
            console.log(highScore)

            stringifyArray();
            questionh1.reset();
            paragraph.reset();
            startButton.reset();
        }
    })
}

printHighScores();