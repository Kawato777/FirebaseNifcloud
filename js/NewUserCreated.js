// ニフクラ設定
const ncmb = new NCMB("b7aa0c69b8a15ec5b9707874fda1bed7df735d8235a20d983ce611e01333462f","03b895aa242a7e73cd7d33aede1a2336d4064c864ce186c77c2be238062b78fe");
let ncmbUser = new ncmb.User();

let loginButton = document.getElementById("LoginButton");
loginButton.addEventListener("click",()=>{
    ncmb.User.login(sessionStorage.getItem("UserID"), sessionStorage.getItem("Password"))
    .then(function(data){
        // ログイン後処理
        location.href = "Upload.html";
    })
    .catch(function(err){
        // エラー処理
        console.log("NO!" + err.code + err.error);
    });
});