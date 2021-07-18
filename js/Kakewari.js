const a = document.getElementById("a");
const b = document.getElementById("b");
const ab = document.getElementById("ab");
const setButton = document.getElementById("setButton");
const answerButton = document.getElementById("answerButton");
const resetButton = document.getElementById("resetButton");
const counter = document.getElementById("counter");
let counterNum = 0;

setButton.addEventListener("click",()=>{
    a.innerText = Math.floor(Math.random() * 10);
    b.innerText = Math.floor(Math.random() * 10);
    ab.innerText = "";
    answerButton.removeAttribute("disabled","");
})

answerButton.addEventListener("click",()=>{
    if(!a.innerText == "" || !b.innerText == ""){
        ab.innerText = a.innerText * b.innerText;
        answerButton.setAttribute("disabled","");
        counterNum++;
        counter.innerText = counterNum;
    }
})

resetButton.addEventListener("click",()=>{
    counterNum = 0;
    counter.innerText = counterNum;
})

const c = document.getElementById("c");
const d = document.getElementById("d");
const cd = document.getElementById("cd");
const setButton2 = document.getElementById("setButton2");
const answerButton2 = document.getElementById("answerButton2");
let cNum;
let dNum;

setButton2.addEventListener("click",()=>{
    cNum = Math.floor(Math.random() * 9) + 1;
    dNum = Math.floor(Math.random() * 10);
    cd.innerText = cNum * dNum;
    c.innerText = cNum;
    d.innerText = "";
    answerButton2.removeAttribute("disabled","");
})

answerButton2.addEventListener("click",()=>{
    if(!cd.innerText == "" || !c.innerText == ""){
        d.innerText = dNum;
        answerButton2.setAttribute("disabled","");
    }
})