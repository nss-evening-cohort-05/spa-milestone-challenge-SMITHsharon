
console.log("in main.js");

function populatePage (inventory) {
console.log("in populatePage");
  // Loop over the inventory and populate the page
  
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
populatePage(CarLot.getCarInventory());