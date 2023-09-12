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
    var imgUrl = thePicElement.getAttribute("src");
    var imgNumber = imgUrl.slice(13,15);
    
    if (dir == "left") {
        if (imgNumber > 1) {
            imgNumber--;
        } else {
            return;
        }
        imgUrl = "resources/Pic0" + imgNumber.toString() + ".jpg"
        thePicElement.setAttribute("src", imgUrl);
    } else if (dir == "right") {
        if (imgNumber < 4) {
            imgNumber++;
        } else {
            return;
        }
        imgUrl = "resources/Pic0" + imgNumber.toString() + ".jpg"
        thePicElement.setAttribute("src", imgUrl);
    }
    
}

