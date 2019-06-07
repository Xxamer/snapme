var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    var butt = document.getElementById("snap-btn");
    butt.style.display = "block";
    var uplobutt = document.getElementById("button-upload");
    uplobutt.style.display = "none";
};