Phase 1: The Pet Blueprint

I created a Pet class with a constructor that stores each pet's name and type. I also added a describe() method that returns a sentence about the pet. I created two pet instances using the new keyword and printed their descriptions to the console.

The Pet class is the blueprint that defines the properties and behavior of pets. An instance is an individual pet created from that blueprint. Each instance can have its own name and type while using the same class methods.

One thing I learned is that the this keyword lets each pet access its own properties.

----------------

Phase 2: State and Static Interaction

I updated the Pet class to include a hunger property that starts at 50. I added a feed() method that decreases hunger by 10. I also created an HTML page with a Feed Pet button and a display showing the current hunger level.

I used document.getElementById() to find the HTML elements and addEventListener() to make the button call the feed() method. I used textContent to update the hunger value on the page.

The most intuitive part was using the button to trigger the feed() method. The part that required more attention was making sure the IDs in the HTML matched the IDs used in JavaScript. This helped me understand how JavaScript can change a webpage through the DOM.

----------------

Phase 3: The Pet Sanctuary (Dynamic UI)

I updated my application so users can add multiple pets by entering a name and clicking the Add Pet button. Each pet gets its own card with a hunger display and Feed button.

I used document.createElement() to create the HTML elements and appendChild() to add them to the page. Each time a pet is added, the program creates a new Pet instance with its own hunger value.

My mental model changed because I now understand that a webpage can create new elements while it is running. The Pet class makes managing multiple pets easier because every pet follows the same blueprint but keeps its own state. Each Feed button updates only the pet associated with that button.

I also added a check to prevent empty pet names from being added.
