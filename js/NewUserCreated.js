// ニフクラ設定
let ncmb = new NCMB("0578f008d529a2aac21c4ac90565de916d630496becf28ece0a97a1f2041cedf","fc224f4329c8e447d5ddc78992f054684d2cb587f0c4c9a2cf8181311ed7768c");
let ncmbUser = new ncmb.User();

let loginButton = document.getElementById("LoginButton");
loginButton.addEventListener("click",()=>{
    ncmb.User.login(sessionStorage.getItem("UserID"), sessionStorage.getItem("Password"))
    .then(function(data){
        // ログイン後処理
        console.log(data);
    })
    .catch(function(err){
        // エラー処理
        console.log("NO!" + err.code + err.error);
    });
});