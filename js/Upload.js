// ニフクラ設定
const ncmb = new NCMB("0578f008d529a2aac21c4ac90565de916d630496becf28ece0a97a1f2041cedf","fc224f4329c8e447d5ddc78992f054684d2cb587f0c4c9a2cf8181311ed7768c");
const ncmbLoginedUser = new ncmb.User.getCurrentUser();
console.log(ncmbLoginedUser);

const storageRef = firebase.storage().ref();
let aRef = storageRef.child("images")
const fileTarget = document.getElementById("file-data");
const filename = document.getElementById("fileName");
// let result = document.getElementById("result");

//ファイル名から拡張子を取得する関数
function getExt(filename)
{
	let pos = filename.lastIndexOf('.');
	if (pos === -1) return '';
	return filename.slice(pos + 1);
}

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let fileData = fileTarget.files[0];
    let downloadFileRef = aRef.child(filename.value + "." + getExt(fileData.name));
    downloadFileRef.put(fileData).then(function(snapshot){
        // console.log("Uploaded a blob or file!");
        window.alert("OK!");
    });
});