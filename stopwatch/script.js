window.onload = function () {
    var minutes = 00;
    var seconds = 00;
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;
    var timeLimit;
let yellowBackground;
let redBackground;
    buttonStart.onclick = function () {
        //changed this so it counts seconds not tenths of a second
        timeLimit = parseInt(document.getElementById("mySelect").value);
		//I think I want to take timeLimit and round it to % to set to yellowBackground and another % to redBackground instead of setting it by hand for each time limit
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        document.body.style.backgroundColor = "green"; //this sets the background to green when the start button is clicked
    };
    //so this calls startTimer and every time startTimer is called it adds one to tens so I think i could do something like set a goal variable and when buttonStart sets the background to Green and time > 70% of goal or something it turns the background yellow
    buttonStop.onclick = function () {
        clearInterval(Interval);
        document.body.style.backgroundColor = "white"; //this sets the background to white when start button is clicked
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        minutes = "00";
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
    };

    function startTimer() {
        seconds++;
        if (seconds > timeLimit) {
            document.body.style.backgroundColor = "blue";
        }
        if (seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            console.log("minutes");
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            appendSeconds.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
            appendMinutes.innerHTML = minutes;
        }
    }
};
console.log(parseInt(document.getElementById("mySelect").value));
