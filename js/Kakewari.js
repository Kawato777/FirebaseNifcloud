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
    //     for(let i = 1; i < 10; i++){
    //         for(let m = 1; m < 10; m++){
    //             const result = i.toString() + m.toString();
    //             kakeList.push(result);
    //         }
    //     }
    kakeList.push("11");
    kakeList.push("12");
    }
    kakeListSelectNum = Math.floor(Math.random() * kakeList.length);
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
        SetCounter(counterNum);
        kakeList.splice(kakeListSelectNum,1);
        if(kakeList.length == 0){
            ShowWarningModal(true);
            setButton.setAttribute("disabled","");
        }
    }
})

resetButton.addEventListener("click",()=>{
    ResetKake();
    window.alert("リセットします。");
})

function SetCounter(num) {
    counter.innerText = num;
}

function ResetKake() {
    SetCounter(0);
    counterNum = 0;
    kakeList = [];
    setButton.removeAttribute("disabled","");
}

const c = document.getElementById("c");
const d = document.getElementById("d");
const cd = document.getElementById("cd");
const setButton2 = document.getElementById("setButton2");
const answerButton2 = document.getElementById("answerButton2");
const resetButton2 = document.getElementById("resetButton2");
const counter2 = document.getElementById("counter2");
let dNum;
let counterNum2 = 0;
let wariList = [];
let wariListSelectNum;

setButton2.addEventListener("click",()=>{
    if(counterNum2 == 0 && wariList.length == 0){
        for(let i = 1; i < 10; i++){
            for(let m = 1; m < 10; m++){
                const result = i.toString() + m.toString();
                wariList.push(result);
            }
        }
    }
    wariListSelectNum = Math.floor(Math.random() * kakeList.length);
    const cStr = wariList[wariListSelectNum].substring(0,1);
    const dStr = wariList[wariListSelectNum].substring(1,2); 
    cd.innerText = Number(cStr) * Number(dStr);
    c.innerText = Number(cStr);
    d.innerText = "";
    dNum = Number(dStr);
    answerButton2.removeAttribute("disabled","");
})

answerButton2.addEventListener("click",()=>{
    if(!cd.innerText == "" || !c.innerText == ""){
        d.innerText = dNum;
        answerButton2.setAttribute("disabled","");
        counterNum2++;
        SetCounter2(counterNum2);
        wariList.splice(wariListSelectNum,1);
        if(wariList.length == 0){
            ShowWarningModal(false);
            setButton2.setAttribute("disabled","");
        }
    }
})

resetButton2.addEventListener("click",()=>{
    ResetWari();
    window.alert("リセットします。");
})

function SetCounter2(num) {
    counter2.innerText = num;
}

function ResetWari() {
    SetCounter2(0);
    counterNum2 = 0;
    wariList = [];
    setButton2.removeAttribute("disabled","");
}

const myModal = new bootstrap.Modal(document.getElementById('warning'), { keyboard: false });
const warningLabel = document.getElementById("warningLabel");
const yesButton = document.getElementById("yesButton");
let isKakeInModal;
function ShowWarningModal(isKake){
    isKakeInModal = isKake;
    if(isKake){
        warningLabel.innerText = "かけ算81問終了!"
    }else{
        warningLabel.innerText = "わり算８１問終了！"
    }
    myModal.show();
}

yesButton.addEventListener("click",()=>{
    if(isKakeInModal){
        ResetKake();
    }else{
        ResetWari();
    }
})