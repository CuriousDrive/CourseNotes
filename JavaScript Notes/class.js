function Submit() {

    let adam = new Person("Fahad",
        "Mullaji",
        new Date("12/08/1988"),
        80,
        67
    );
    console.log(adam.getTotalScore());
}

//Use the keyword class to create a class.
//Always add a method named constructor():

class Person{
    constructor(firstName, lastName, dateOfBirth, science, history) { 
        debugger;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.scoreScience = science;
        this.scoreHistory = history;
    }
    getAge = () => new Date().getFullYear() - this.dateOfBirth.getFullYear();
    getTotalScore = () => this.scoreHistory + this.scoreScience;
}