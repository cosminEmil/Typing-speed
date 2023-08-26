let seconds = 60;
let container = document.getElementById("textBox");
let secondsCnt = document.getElementById("secondsCounter");
let text = ["Honda ", "Volkswagen ", "BMW ", "Porsche ", "Koenigsegg ", "Pagani Zonda ", "Hyundai ", "Lamborghini "]; 
let stringIndex = Math.floor(text.length * Math.random());
let letterPos = 0;

function randomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (let i = 0; i < 45; ++i) {
    let word = randomWord(text);
    for (let j = 0; j < word.length; ++j) {
        let letter = document.createElement("text");
        letter.innerHTML = word.charAt(j);
        container.appendChild(letter);
    }
}

let textContainer = container.getElementsByTagName("text");

function getInputLastLetter(event) {
    let keyNum = event.keyCode;
    let lastLetter = String.fromCharCode(keyNum);
    if (lastLetter == textContainer[letterPos].innerHTML) {
        textContainer[letterPos].style.color = "green";
    } else {
        textContainer[letterPos].style.color = "red";
    }
    ++letterPos;
}

let score = setInterval(function() { 
    if (seconds ==  50) {
        let wordsCnt = 0, lettersCnt = 0, correctLetterCnt = 0;
        for (let i = 0; i < textContainer.length; ++i) {
            if (textContainer[i].innerHTML != " " && textContainer[i].innerHTML != "\n") {
                if (textContainer[i].style.color == "green") {
                    ++correctLetterCnt;
                }
                ++lettersCnt;
            } else {
                if (lettersCnt == correctLetterCnt && lettersCnt != 0) {
                    ++wordsCnt;
                }
                lettersCnt = 0;
                correctLetterCnt = 0;
            }
        }
        let modalText = document.getElementById("modalText");
        modalText.textContent = "SCORE: " + wordsCnt;
        modal.style.display = "block";
        
    }
    --seconds;
    secondsCnt.innerText = seconds;
}, 1000);

var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  window.location.reload();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.reload();
  }
}
