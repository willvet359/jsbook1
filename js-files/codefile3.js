alert("yup");

var images = document.querySelectorAll(".theImage");

for (i = 0; i < images.length; i++) {
    var image = images[i];
    alert(image.getAttribute("src"));
}



/* var isLucky = function () {
    var foo = Math.round(Math.random() * 100);

    if (foo > 50) {
        return "You are lucky!";
    } else {
        return "You are not lucky.";
    }
};

var me = isLucky();
alert(me);

window.setTimeout(function () {
    alert("everything is awesome");
}, 2000);

(function() {
    var shout = "I AM ALIVE";
    alert(shout);
})(); */
