let seconds = 60;
let secondsCnt = document.getElementById("secondsCounter");
let cnt = 0;

let checkLetters = setInterval(function() {
    let txt = document.getElementById("textHolder");
    if (cnt % 2 == 0) {
        txt.style.color = "red";
    } else {
        txt.style.color = "green";
    }
    ++cnt;
}, 1000);

let score = setInterval(function() { 
    if (seconds == 1) {
        window.location.reload();
    }
    --seconds;
    secondsCnt.innerText = seconds;
}, 1000);
