alert("yup");

function showDistance(speed, time) {
    alert(speed * time);
}

showDistance(5,1);
showDistance(23,15);

var funnyGuy = {};
funnyGuy.firstName = "Conan";
funnyGuy.lastName = "O'Brien";

funnyGuy["firstName"] = "Eddie";
funnyGuy["lastName"] = "Murphy";

var funnyGuy = {
    firstName: "Hurricane",
    lastName: "theDog",

    getName: function() {
    return "Name is: " + this.firstName + " " + this.lastName;
    }
};

alert(funnyGuy.getName());
