let timer = document.getElementById("timer");

function countdown() {
    let timeLeft = 60;

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

// countdown()