
var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    var butt = document.getElementById("start-btn");
    butt.style.display ="block";
};