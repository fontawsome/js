document.addEventListener('DOMContentLoaded', function() {
    var targetDate = new Date("2024-05-10T13:36:00");

    if (new Date().getTime() >= targetDate.getTime()) {
        alert("wow");
        console.log("shesh");

        var secondsLeft = 3;
        var interval = setInterval(function() {
            var minutes = Math.floor(secondsLeft / 60);
            var seconds = secondsLeft % 60;
            var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            console.log(minutes + ":" + formattedSeconds);
            
            if (--secondsLeft < 0) {
                clearInterval(interval);
                window.location.href = "https://www.youtube.com/watch?v=cvh0nX08nRw";
            }
        }, 1000);
    } else {
        console.log("Not the target date and time. Script will not run.");
    }
});
