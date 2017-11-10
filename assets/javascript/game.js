$(document).ready(function() {
  // GLOBAL Variables
  // ===============================================

  // Crystal Variables
  var crystal = {
    oneCrystal:
    {
      name: "Blue",
      value: 0
    },
    twoCrystal:
    {
      name: "Green",
      value: 0
    },
    threeCrystal:
    {
      name: "Red",
      value: 0
    },
    fourCrystal:
    {
      name: "Yellow",
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

  // var userNumber = 0;
  // var wins = 0;
  // var loss = 0;
  //
  // //creating an array that holds the four random numbers that will be used in each crystal and assigning it to a variable
  // function generateArray() {
  //   var numbersArray = [];
  //
  //   while(numbersArray.length < 4) {
  //     var randomNumber = Math.ceil(Math.random()*12)
  //     if(numbersArray.indexOf(randomNumber) > -1) continue;
  //     numbersArray.push(randomNumber);
  //   }
  //   return numbersArray
  // }
  //
  // var numbers = generateArray();
  // console.log(numbers)
  //
  // //creating the button where the crystals live along with the randomized number value for each crystal and assigning it to a variable
  // function generateBtns() {
  //
  //   for (var i = 0; i < numbers.length; i++) {
  //     var crystalBtn = $("<button>");
  //     crystalBtn.addClass("crystal-button number");
  //     crystalBtn.attr("data-number", numbers[i]);
  //     $("#buttons").append(crystalBtn);
  //   }
  //   return crystalBtn
  // }
  //
  // var crystals = generateBtns();
  // // console.log(crystals)
  //
  //
  // // generating the target score in a function and assigning it to a variable.
  // function generateScore(min, max) {
  //   var target = Math.floor(Math.random()* (121 - 19)) + 19;
  //   return target
  // }
  // var targetNumber = generateScore();
  //
  //
  // //setting the target score and the user score when the start game button is pushed
  // $("#start").click(function(e){
  //   $(".targetScore").html(targetNumber);
  //   $(".userScore").html(userNumber);
  //   crystalClicker();
  // });
  //
  // // adding the userscore to the scoreboard and updating the score
  // function crystalClicker(){
  //   $('.crystal-button').click(function (e) {
  //     var num = parseInt($(e.target).data("number"));
  //     userNumber += num;
  //     $(".userScore").html(userNumber);
  //     didUserWin();
  //   });
  // }
  //
  // // function that determines if the user has won or lost the game
  // function didUserWin() {
  //   if (targetNumber === userNumber) {
  //     wins++
  //     console.log(wins)
  //     $('#winColumn').text(wins)
  //     setGame();
  //   }
  //   else if (targetNumber < userNumber){
  //     loss++
  //     console.log(loss)
  //     $('#lossColumn').text(loss)
  //     setGame();
  //   }
  // }
  //
  // //function that resets the game
  // function setGame() {
  //   var targetNumber = 0;
  //   var userNumber = 0;
  //   // crystals = generateBtns();
  //   // $("#buttons").empty();
  //   // crystals.removeAttr("data-number");
  //   // var numbers = generateArray();
  //   // console.log(numbers)
  //   // console.log(crystals)
  //   // var targetNumber = generateScore();
  //   // $(".targetScore").html(targetNumber);
  //   // $(".userScore").html(userNumber);
  //   // crystalClicker();
  // }


});
