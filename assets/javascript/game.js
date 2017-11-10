$(document).ready(function() {
  // GLOBAL Variables
  // ===============================================

  // Crystal Variables
  var crystal = {
    oneCrystal:
    {
      name: "oneCrystal",
      value: 0
    },
    twoCrystal:
    {
      name: "twoCrystal",
      value: 0
    },
    threeCrystal:
    {
      name: "threeCrystal",
      value: 0
    },
    fourCrystal:
    {
      name: "fourCrystal",
      value: 0
    }
  };

  // Scores (Current and Target)
  var userNumber = 0;
  var targetNumber = 0;

  // Wins and Losses
  var winCount = 0;
  var lossCount = 0;

  // FUNCTIONS
  // ==============================================

  // Helper Function for getting random numbers
  var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Starts the Game & restarts the game
  var startGame = function() {

    // Resets the Current Scores
    userNumber = 0;

    // Set a new target score between 19 and 120
    targetNumber = getRandom(19, 120);

    // Set different values for each of the crystals between 1 and 12
    crystal.oneCrystal.value = getRandom(1, 12);
    crystal.twoCrystal.value = getRandom(1, 12);
    crystal.threeCrystal.value = getRandom(1, 12);
    crystal.fourCrystal.value = getRandom(1, 12);

    // change the HTML to reflect all of these changes
    $(".targetScore").html(targetNumber);
    $(".userScore").html(userNumber);

    // Testing console
    console.log("-----------------------------");
    console.log("Target Score: " + targetNumber);
    console.log("First Crystal: " + crystal.oneCrystal.value + " | Second Crystal: " + crystal.twoCrystal.value + " | Third Crystal: " + crystal.threeCrystal.value + " | Fourth Crystal: " + crystal.fourCrystal.value);
    console.log("-----------------------------");

  };

  var checkWin = function() {

    // Check if user won or lost and rest Game
    if (userNumber > targetNumber) {
      alert("GAME OVER!");
      console.log("GAME OVER");

      // Add to Loss Counter
      lossCount++;

      // Change loss count html
      $('#lossColumn').text(lossCount);

      //Restart the Game
      startGame();
    }

    else if (userNumber === targetNumber) {
      alert("YOU WIN!");
      console.log("YOU WIN!");

      // Add to the win Counter
      winCount++;

      // Change win count HTML
      $('#winColumn').text(winCount);

      // Restart the Game
      startGame();
    }

  };

  // Respond to clicks on the crystals
  var addValues = function(clickedCrystal) {

    // change currentScore
    userNumber += clickedCrystal.value;

    // change the HTML to reflect changes in usernumber
    $('.userScore').text(userNumber);

    // Call the checkwin function
    checkWin();

    // Testing console
    console.log("your score: " + userNumber);
  };

  // Start Game
  $("#start").click(function(e){
    startGame();
  });

  $("#one").click(function() {
    addValues(crystal.oneCrystal);
  });

  $("#two").click(function() {
    addValues(crystal.twoCrystal);
  });

  $("#three").click(function() {
    addValues(crystal.threeCrystal);
  });

  $("#four").click(function() {
    addValues(crystal.fourCrystal);
  });
});
