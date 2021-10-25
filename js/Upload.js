// ニフクラ設定
const ncmb = new NCMB("b7aa0c69b8a15ec5b9707874fda1bed7df735d8235a20d983ce611e01333462f","03b895aa242a7e73cd7d33aede1a2336d4064c864ce186c77c2be238062b78fe");
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
let userRef = storageRef.child("banana");   //POTATO
// if(ncmbLoginedUser.get("isAnonymous")){
//     userRef = storageRef.child("匿名ユーザー/" + ncmbLoginedUser.get("userName"));
// }else{
//     userRef = storageRef.child("正規ユーザー/" + ncmbLoginedUser.get("userName"));
// }
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
            console.log("OK!");
        });
    }
});