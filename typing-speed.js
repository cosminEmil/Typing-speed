let seconds = 60;
let container = document.getElementById("textBox");
let secondsCnt = document.getElementById("secondsCounter");
let txt = "Grey sheets hang in lines inside the chaotically cramped \nlaundry Steam hisses from irons and there is a giant \nthumping sound of a steam hammer coming from a forging and \npressing factory nearby The heavy wet sheets are being scrubbed on steel washboards \nby Chinese children aged seven to eleven There are old \ngrandmothers using the steam irons some with babies asleep \nin slings on their backs An old man lies asleep on an \nironing board Through the steam we hear a dozen urgent \nconversations in the same language ";
let letterPos = 0;

for (let i = 0; i < txt.length; ++i) {
    let letter = document.createElement("text");
    letter.innerText = txt[i];
    container.appendChild(letter);
}   

let textContainer = container.getElementsByTagName("text");

let getInputLastLetter = setInterval(function() {
    let textHolder = document.getElementById("textHolder").value;  
    if (textHolder.length - 1 == letterPos) {
        if (textHolder[textHolder.length - 1] == textContainer[letterPos].innerHTML) {
            textContainer[letterPos].style.color = "green";
        } else {
            textContainer[letterPos].style.color = "red";
        }
        ++letterPos;
    }
}, 1);  

let score = setInterval(function() { 
    if (seconds ==  1) {
        let wordsCnt = 0, lettersCnt = 0, correctLetterCnt = 0;
        for (let i = 0; i < textContainer.length; ++i) {
            if (textContainer[i].innerHTML != " " && textContainer[i].innerHTML != "\n") {
                if (textContainer[i].style.color == "green") {
                    ++correctLetterCnt;
                }
                ++lettersCnt;
            } else {
                if (lettersCnt == correctLetterCnt) {
                    ++wordsCnt;
                }
                lettersCnt = 0;
                correctLetterCnt = 0;
            }
        }
        alert("WORDS COUNTER: " + wordsCnt);
        window.location.reload();
    }
    --seconds;
    secondsCnt.innerText = seconds;
}, 1000);
