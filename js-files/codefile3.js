alert("yup");

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
