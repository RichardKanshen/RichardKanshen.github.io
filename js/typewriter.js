const texts = ["リチャード カンシェン", "RICHARD KANSHEN","РИХАРД КАНШЕН"];
const speed = 50; //ms
const pause = 5000; // ms
const typewriter = document.getElementById("typewriter");

let index = 0;
let textIndex = 0;
let currentElement;

function type() {
    currentElement = document.getElementById(`phrase${textIndex + 1}`);
    if (index < texts[textIndex].length) {
        currentElement.innerHTML += texts[textIndex].charAt(index);
        index++;
        setTimeout(type, speed);
    } else {
        setTimeout(erase, pause);
 
    }
}

function erase() {
  currentElement.innerHTML = "";
  index = 0;
  textIndex++;
  if (textIndex >= texts.length) textIndex = 0;
  setTimeout(type, speed);
}

setTimeout(type, speed);