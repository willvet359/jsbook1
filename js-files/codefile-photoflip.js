var leftButton = document.querySelector("#left");
var rightButton = document.querySelector("#right");

leftButton.addEventListener("click", flipPhoto, false);
window.addEventListener("keydown", flipPhoto, false);

rightButton.addEventListener("click", flipPhoto, false);
//window.addEventListener("keydown", flipPhoto(), false);


function flipPhoto(e) {
    console.log("hm");
    console.log(e.key);

    var thePicElement = document.querySelector("#thePic");

    
    if (e.key == 'ArrowLeft') {
        thePicElement.setAttribute("src", "resources/Pic10.jpg");
    }
    
}

