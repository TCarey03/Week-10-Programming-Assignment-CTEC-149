class Pet {
    constructor(name, type = "Pet") {
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }

    describe() {
        return `I am a ${this.type} named ${this.name}.`;
    }

    feed() {
        this.hunger = Math.max(0, this.hunger - 10);
    }

}

// Find the HTML elements
const petNameInput = document.getElementById("petName");
const addPetButton = document.getElementById("addPetButton");
const sanctuary = document.getElementById("sanctuary");

// Create a new pet card
function addPet() {
    const name = petNameInput.value.trim();

    // Make sure the name isn't empty
    if (name === "") {
        alert("Please enter a pet name!");
        return;
    }

    // Create a new pet instance
    const pet = new Pet(name);

    // Create the pet card
    const petCard = document.createElement("div");
    petCard.className = "pet-card";

    // Create the pet name heading
    const petHeading = document.createElement("h2");
    petHeading.textContent = pet.name;

    // Create the hunger display
    const hungerDisplay = document.createElement("p");
    hungerDisplay.textContent = `Hunger: ${pet.hunger}`;

    // Create the feed button
    const feedButton = document.createElement("button");
    feedButton.textContent = "Feed";

    // Feed only this specific pet
    feedButton.addEventListener("click", function () {
        pet.feed();
        hungerDisplay.textContent = `Hunger: ${pet.hunger}`;
    });

    // Add elements to the card
    petCard.appendChild(petHeading);
    petCard.appendChild(hungerDisplay);
    petCard.appendChild(feedButton);

    // Add the card to the sanctuary
    sanctuary.appendChild(petCard);

    // Clear the input
    petNameInput.value = "";
}

// Listen for clicks on the Add Pet button
addPetButton.addEventListener("click", addPet);
