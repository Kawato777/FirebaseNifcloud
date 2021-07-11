var storageRef = firebase.storage().ref();
// var downloadFileRef = storageRef.child("riko.jpg");
var downloadFileRef = storageRef.child("riko.jpg");
var fileTarget = document.getElementById("file-data");
var filename = document.getElementById("fileName");
// var result = document.getElementById("result");

//ファイル名から拡張子を取得する関数
function getExt(filename)
{
	var pos = filename.lastIndexOf('.');
	if (pos === -1) return '';
	return filename.slice(pos + 1);
}

var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    var fileData = fileTarget.files[0];
    downloadFileRef = storageRef.child(filename.value + "." + getExt(fileData.name));
    downloadFileRef.put(fileData).then(function(snapshot){
        // console.log("Uploaded a blob or file!");
        window.alert("OK!");
    });
});