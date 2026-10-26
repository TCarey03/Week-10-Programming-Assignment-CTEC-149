class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }
}

// Create two different pet instances
const pet1 = new Pet("Sparky", "Dragon");
const pet2 = new Pet("Whiskers", "Cat");

// Print their descriptions
console.log(pet1.describe());
console.log(pet2.describe());
