class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }

    feed() {
        this.hunger -= 10;
    }
}

// Create one pet
const myPet = new Pet("Sparky", "Dragon");

// Find the HTML elements
const hungerDisplay = document.getElementById("hunger");
const feedButton = document.getElementById("feedButton");

// Display the starting hunger
hungerDisplay.textContent = myPet.hunger;

// Feed the pet when the button is clicked
feedButton.addEventListener("click", function () {
    myPet.feed();
    hungerDisplay.textContent = myPet.hunger;
});
