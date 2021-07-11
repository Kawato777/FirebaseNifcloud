var storageRef = firebase.storage().ref();
// console.log(firebase.storage());
// console.log(firebase.storage.ref);
// console.log(firebase.storage().ref());
var rikoRef = storageRef.child("riko.jpg");
var fileTarget = document.getElementById("file-data");

var btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    var fileData = fileTarget.files[0];
    rikoRef.put(fileData).then(function(snapshot){
        console.log("Uploaded a blob or file!");
    });
});