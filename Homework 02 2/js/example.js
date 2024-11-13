var listItems = document.getElementsByTagName('li');                   // All <li> elements

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');                        // h2 element
var headingText = heading.firstChild.nodeValue;                    // h2 text
var totalItems = listItems.length;                                 // No. of <li> elements
var newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


/*  WRITE YOUR CODE BELOW */


// Part1. Hint: Use the listItems object to iterate through the elements of the list
// Get all list items
var listItems = document.getElementsByTagName('li');

// Loop through each list item and check for specific items
for (var i = 0; i < listItems.length; i++) {
    var itemText = listItems[i].textContent.toLowerCase(); // convert to lowercase for comparison

    // Check if item is one of the target items
    if (itemText === 'fresh figs' || itemText === 'kale' || itemText === 'honey') {
        listItems[i].className = 'cool'; // apply 'cool' class
    }
}

// Update the heading with the number of items in the list
var heading = document.querySelector('h2'); // select h2 element
var totalItems = listItems.length;          // count items
heading.innerHTML = `Buy groceries <span>${totalItems}</span>`; // set new heading text






// Part2. Hint: Use the heading and newHeading to show the number of items in the shopping list





