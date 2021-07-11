// 警告modalセット
var warningLabel = document.getElementById("warningLabel");
var warningBody = document.getElementById("warningBody");
var myModal = new bootstrap.Modal(document.getElementById('warning'), { keyboard: false });
var noButton = document.getElementById("noButton");
var yesButton = document.getElementById("yesButton");
var isCreateUserOK = false;
function ShowWarningModal(label,body,isYesOnly) {
    warningLabel.innerText = label;
    warningBody.innerText = body;
    if(isYesOnly)
    {
        noButton.style.visibility = "hidden";
        isCreateUserOK = false;
    }
    else
    {
        noButton.style.visibility = "visible";
        isCreateUserOK = true;
    }
    myModal.show();
}

var userID = document.getElementById("userID");
var password = document.getElementById("password");
// userID.value password.value

var createButton = document.getElementById("createButton");
createButton.addEventListener("click",()=>{
    if(userID.value == "" || password.value == "")
    {
        ShowWarningModal("注意","ユーザーIDまたはパスワードが入力されていません。",true);
    }
    else
    {
        ShowWarningModal("アカウント作成の確認","アカウントを作成します。",false);
    }
});

yesButton.addEventListener("click",()=>{
    if(isCreateUserOK){
        
    }
});