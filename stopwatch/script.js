    let minutes = 00;
    let seconds = 00;
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");
    let Interval;
    let timeLimit;
    let yellowBackground;
    let redBackground;
    let totalSeconds = 00;
    let stopStartToggle = true;
    const containingElement = document.getElementById("toggleArea");

    function startButtonClick() {
        //changed this so it counts seconds not tenths of a second
        timeLimit = parseInt(document.getElementById("mySelect").value);
        //I think I want to take timeLimit and round it to % to set to yellowBackground and another % to redBackground instead of setting it by hand for each time limit
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        document.body.style.backgroundColor = "green"; //this sets the background to green when the start button is clicked
        redBackground = timeLimit * 60;
        if (timeLimit > 1) {
            yellowBackground = (timeLimit - 1) * 60;
        } else {
            yellowBackground = 30;
        } //if timeLimit is more than a minute it sets yellow to a minute less than the limit. if not it sets it to 30 seconds. currently doesn't work because the seconds only counts up to 59 then resets to 0. 
        console.log(yellowBackground);
        stopStartToggle = false;
    };

    //so this calls startTimer and every time startTimer is called it adds one to tens so I think i could do something like set a goal variable and when buttonStart sets the background to Green and time > 70% of goal or something it turns the background yellow
    buttonStart.onclick = startButtonClick; //refactoring this to call a function so that I can start it by clicking anywhere not just the button
    function stopButtonClick() {
        clearInterval(Interval);
        document.body.style.backgroundColor = "black"; //this sets the background to black when stop button is clicked
        stopStartToggle = true;
    };
    buttonStop.onclick = stopButtonClick;

    function resetTimer() {
        clearInterval(Interval);
        seconds = "00"; //this works because the ++ spec says it will turn it into a number. And it has to be a string because if it is a number it will only display as 0 and not 00 
        totalSeconds = 00;
        minutes = "00";
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
        document.body.style.backgroundColor = "#ffa600"; //sets the background back to the default orangish
        stopStartToggle = true;
    };
    buttonReset.onclick = resetTimer;
    // containingElement = document.querySelector('#toggleArea');


    containingElement.addEventListener('click', function () {
        console.log('clicked');
        if (stopStartToggle == true) {

            startButtonClick();
            console.log(stopStartToggle);
            //A better approach would be to set this in the function? same with stopButtonClick and reset
        } else {
            stopButtonClick();
            console.log('stop was clicked');
            console.log(stopStartToggle);
            //if I want this to work then I think I need to refactor the buttonStart, buttonStop, and buttonReset to call named functions so that this can then call the functions directly and not startTimer because that doesn't have all the stuff to work correctly. https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dom 
        }
    });

    function startTimer() {

        seconds++;
        totalSeconds++;
        if (totalSeconds > yellowBackground && totalSeconds < redBackground) {
            document.body.style.backgroundColor = "yellow";
        } else if (totalSeconds >= redBackground) {
            document.body.style.backgroundColor = "red";
        };
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
