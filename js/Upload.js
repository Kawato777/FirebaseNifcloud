// ニフクラ設定
const ncmb = new NCMB("0578f008d529a2aac21c4ac90565de916d630496becf28ece0a97a1f2041cedf","fc224f4329c8e447d5ddc78992f054684d2cb587f0c4c9a2cf8181311ed7768c");
const ncmbLoginedUser = new ncmb.User.getCurrentUser();

const storageRef = firebase.storage().ref();
const fileTarget = document.getElementById("file-data");
const filename = document.getElementById("fileName");
// let result = document.getElementById("result");

const checkBox = document.getElementById("checkBox");
const fileNameMidashi = document.getElementById("fileNameMidashi");
checkBox.addEventListener("click",()=>{
    if(checkBox.checked){
        fileNameMidashi.innerText = "フォルダ名";
        filename.setAttribute("placeholder","フォルダ名...");
        fileTarget.setAttribute("multiple","");
    }else{
        fileNameMidashi.innerText = "ファイル名";
        filename.setAttribute("placeholder","ファイル名...");
        fileTarget.removeAttribute("multiple");
        fileTarget.value = "";
    }
});

//ファイル名から拡張子を取得する関数
function getExt(filename)
{
    let pos = filename.lastIndexOf('.');
	if (pos === -1) return '';
	return filename.slice(pos + 1);
}

let btn = document.getElementById("btn");
let userRef;
if(ncmbLoginedUser.get("isAnonymous")){
    userRef = storageRef.child("匿名ユーザー/" + ncmbLoginedUser.get("userName"));
}else{
    userRef = storageRef.child("正規ユーザー/" + ncmbLoginedUser.get("userName"));
}
btn.addEventListener("click", () => {
    // アップロード処理
    if(checkBox.checked){
        // 複数ファイルの場合

    }else{
        // 単一ファイルの場合
        let fileData = fileTarget.files[0];
        let downloadFileName;
        if(filename.value == ""){
            downloadFileName = fileData.name;
        }else{
            downloadFileName = filename.value + "." + getExt(fileData.name);
        }
        let downloadFileRef = userRef.child(downloadFileName);
        downloadFileRef.put(fileData).then(function(snapshot){
            // console.log("Uploaded a blob or file!");
            window.alert("OK!");
        });
    }
});