/*jslint browser:true*/
/*global window*/

// Function for generating the Bingo card
function generateGrids() {
    "use.strict";

    // Creates an array for the Bingo numbers
    var grid = [];

    // Introduces newNum to be used in the while loop
    var newNum;

    while (grid.length < 25) {

        // Draws a random integer between 1 and 75
        newNum = Math.floor(Math.random() * 75) + 1;

        // Checks if the array already has the number drawn in the last step, if not, pushes the number to the array
        if (grid.indexOf(newNum) === -1) {
            grid.push(newNum);
        }

        // Prints the generated Bingo card to the console
        window.console.log(grid);
    }

}

generateGrids();