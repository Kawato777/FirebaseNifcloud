const a = document.getElementById("a");
const b = document.getElementById("b");
const ab = document.getElementById("ab");
const setButton = document.getElementById("setButton");
const answerButton = document.getElementById("answerButton");
const resetButton = document.getElementById("resetButton");
const counter = document.getElementById("counter");
let counterNum = 0;
let kakeList = [];
let kakeListSelectNum;

setButton.addEventListener("click",()=>{
    if(counterNum == 0 && kakeList.length == 0){
        for(let i = 1; i < 10; i++){
            for(let m = 1; m < 10; m++){
                const result = i.toString() + m.toString();
                kakeList.push(result);
            }
        }
    }
    kakeListSelectNum = Math.floor(Math.random() * kakeList.length);
    console.log(kakeList.length);
    const aStr = kakeList[kakeListSelectNum].substring(0,1);
    const bStr = kakeList[kakeListSelectNum].substring(1,2);
    a.innerText = Number(aStr);
    b.innerText = Number(bStr);
    ab.innerText = "";
    answerButton.removeAttribute("disabled","");
})

answerButton.addEventListener("click",()=>{
    if(!a.innerText == "" || !b.innerText == ""){
        ab.innerText = a.innerText * b.innerText;
        answerButton.setAttribute("disabled","");
        counterNum++;
        counter.innerText = counterNum;
        kakeList.splice(kakeListSelectNum,1);
        if(kakeList.length == 0){
            window.alert("終了!");
        }
    }
})

resetButton.addEventListener("click",()=>{
    counterNum = 0;
    counter.innerText = counterNum;
    kakeList = [];
})

const c = document.getElementById("c");
const d = document.getElementById("d");
const cd = document.getElementById("cd");
const setButton2 = document.getElementById("setButton2");
const answerButton2 = document.getElementById("answerButton2");
const resetButton2 = document.getElementById("resetButton2");
const counter2 = document.getElementById("counter2");
let cNum;
let dNum;
let counterNum2 = 0;
let wariList = [];

setButton2.addEventListener("click",()=>{
    if(counterNum2 == 0){
        for(let i = 1; i < 10; i++){
            for(let m = 1; m < 10; m++){
                const result = i.toString() + m.toString();
                wariList.push(result);
            }
        }
    }
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
        counterNum2++;
        counter2.innerText = counterNum2;
    }
})

resetButton2.addEventListener("click",()=>{
    counterNum2 = 0;
    counter2.innerText = counterNum;
})