const storageRef = firebase.storage().ref();
// let downloadFileRef = storageRef.child("riko.jpg");
let downloadFileRef = storageRef.child("riko.jpg");
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
    downloadFileRef = storageRef.child(filename.value + "." + getExt(fileData.name));
    downloadFileRef.put(fileData).then(function(snapshot){
        // console.log("Uploaded a blob or file!");
        window.alert("OK!");
    });
});