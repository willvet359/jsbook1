var leftButton = document.querySelector("#left");
var rightButton = document.querySelector("#right");

leftButton.addEventListener("click", setDirectionLeft, false);
window.addEventListener("keydown", determineDirection, false);

rightButton.addEventListener("click", setDirectionRight, false);

function setDirectionLeft(e) {
    console.log("going left");

    flipPhoto("left");
}

function setDirectionRight(e) {
    console.log("going right");

    flipPhoto("right");
}

function determineDirection(e) {
    if (e.key == 'ArrowLeft') {
        flipPhoto("left");
    } else if (e.key == 'ArrowRight') {
        flipPhoto("right");
    }
}

function flipPhoto(dir) {
    
    var thePicElement = document.querySelector("#thePic");
    
    if (dir == "left") {
        thePicElement.setAttribute("src", "resources/Pic04.jpg");
    } else if (dir == "right") {
        thePicElement.setAttribute("src", "resources/Pic02.jpg");
    }
    
}

