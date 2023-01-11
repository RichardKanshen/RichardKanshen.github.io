const texts = ["リチャード", "カンシェン", "RICHARD", "KANSHEN","РИХАРД", "КАНШЕН"];
const speed = 50;
const pause = 5000;

let index = 0;
let textIndex = 0;
let currentElement;

function type() {
    currentElement = document.getElementById(`phrase${Math.ceil(textIndex/2 + 1)}`);
    if (index < texts[textIndex].length) {
        currentElement.innerHTML += texts[textIndex][index];
        index++;
        setTimeout(type, speed);
    } else {
        if(textIndex % 2 == 1){
            document.getElementById(`phrase${Math.ceil(textIndex/2 + 1)}-br`).innerHTML = "<br>";
        }
        index = 0;
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        setTimeout(type, pause);
    }
}
setTimeout(type, speed);
