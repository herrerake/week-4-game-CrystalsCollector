# Crystals Collector
Homework assignment for the GW coding book camp.

# jQuery Assignment

### Overview

In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

### Before You Begin

1. Create a new GitHub repo called `week-4-game`, then clone it to your computer.

2. Inside the `week-4-game` folder, create an `index.html` file.

3. Still inside the `week-4-game` directory, make a folder called `assets`.
   * Inside the `assets` directory, make three additional folders: `javascript`, `css` and `images`.
     * In the `javascript` folder, make a file called `game.js`.
     * In the `css` folder, make a file called `style.css`.
     * In the `css` folder, make a file called `reset.css`. Paste into it the code found from the Meyerweb Reset.
     * In the images folder, save any of the images you plan on using.

4. Set up your repository to deploy to Github Pages.

5. Push the above changes to GitHub.

### Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

   * The random number shown at the start of the game should be between 19 - 120.

   * Each crystal should have a random hidden value between 1 - 12.

   ### JS Explanation

   * In line 1 I am loading jquery

   * The first global variable is an object of objects where I store a value and name for each of the four crystals. Later I will use the value key to store the randomized values.

   * The next set of global variables hold the user number and target number. These numbers will be changed as the games progress. Later I will use a randomize function to set a random number to the target number variable.

   * the win loss variables will store the players Score and be updated with a counter as the game progresses

   * the getRandom helper function is used to create the random numbers for the crystals and the target score. First I am passing two perimeters, min and max, that I will pass through later based on the requirements of the assignment. The crystals have a min of 1 and max of 12 and the random number has a min of 19 and max of 120.

   * the start game function gets the game running. Here I reset the current user score. I use the get random helper function to set a target score. Then I use the same helper function to get the values for the crystals. Lastly, I use jquery to write the target number and the user number to the html.

   * Next, the check win function check to see if the user won with and if else conditional. Later I will call on this function inside the function that updates the user score.

   * The add values function takes in one parameter clickedCrystal. Later I will pass in the object in this function for each crystal. Next the user number is updated to dom. And every time a click on a crystal happens the checkWin function is run.

   * Lines 121 - 135 I am using the addValues function on a click event. The add values function is taking the randomized value of the crystal from the object assigned above. Then back in the add values function the value is added to the user number.

   * Lastly lines 138 - 146 I am showing and hiding the Bootstap modal on load and on click by adding and removing classes. 
