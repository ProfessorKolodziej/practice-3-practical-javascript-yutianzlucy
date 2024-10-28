// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)




// Practical JavaScript
// Show and hide an element on the page

// Selecting the paragraph and button
const toggleParagraph = document.querySelector(".show");
const toggleButton = document.querySelector("#toggle-control");
console.log(toggleButton);

// Function to toggle the show/hide classes
function toggleVisibility() {
    toggleParagraph.classList.toggle("hide");
    toggleParagraph.classList.toggle("show");
    console.log("My toggle function");
    console.log(toggleParagraph);
}

// Adding the event listener to the button
toggleButton.addEventListener("click", toggleVisibility);

