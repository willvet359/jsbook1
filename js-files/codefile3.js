alert("yup");

/* var funnyGuy = {};
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

alert(funnyGuy.getName()); */

var person = {
    getName: function () {
        return "Name is: " + this.firstName + " " + this.lastName;
    }
};

var funnyGuy = Object.create(person);
funnyGuy.firstName = "Eddie";
funnyGuy.lastName = "Murphy";

var theDude = Object.create(person);
theDude.firstName = "Jeffrey";
theDude.lastName = "Lebowski";

alert(funnyGuy.getName());
alert(theDude.getName());
