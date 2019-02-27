class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreetting() {
        return `Hi! I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major =  major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `. Their major is ${this.major}`
        } 
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreetting() {
        let grettingMessage = super.getGreetting();
        if (!!this.homeLocation) {
            grettingMessage += ` And I live in ${this.homeLocation}!`
        }
        return grettingMessage; 
    }
}

const me = new Traveler('Lucas', 25, 'Campo Limpo');
console.log(me.getGreetting());