$(document).ready(function() {

  var userNumber = 0;
  var wins = 0;
  var loss = 0;

  //creating an array that holds the four random numbers that will be used in each crystal and assigning it to a variable
  function generateArray() {
    var numbersArray = [];

    while(numbersArray.length < 4) {
      var randomNumber = Math.ceil(Math.random()*12)
      if(numbersArray.indexOf(randomNumber) > -1) continue;
      numbersArray.push(randomNumber);
    }
    return numbersArray
  }

  var numbers = generateArray();
  console.log(numbers)

  //creating the button where the crystals live along with the randomized number value for each crystal and assigning it to a variable
  function generateBtns() {

    for (var i = 0; i < numbers.length; i++) {
      var crystalBtn = $("<button>");
      crystalBtn.addClass("crystal-button number");
      crystalBtn.attr("data-number", numbers[i]);
      $("#buttons").append(crystalBtn);
    }
    return crystalBtn
  }

  var crystals = generateBtns();
  // console.log(crystals)


  // generating the target score in a function and assigning it to a variable.
  function generateScore(min, max) {
    var target = Math.floor(Math.random()* (121 - 19)) + 19;
    return target
  }
  var targetNumber = generateScore();


  //setting the target score and the user score when the start game button is pushed
    $(".start").click(function(e){
    $(".targetScore").html(targetNumber);
    $(".userScore").html(userNumber);
    crystalClicker();
  });

  // adding the userscore to the scoreboard and updating the score
  function crystalClicker(){
    $('.crystal-button').click(function (e) {
      var num = parseInt($(e.target).data("number"));
      userNumber += num;
      $(".userScore").html(userNumber);
      didUserWin();

    });
  }

  // function that determines if the user has won or lost the game
  function didUserWin() {
    if (targetNumber === userNumber) {
      wins++
      console.log(wins)
      $('#winColumn').text(wins)
      setGame();
    }
    else if (targetNumber < userNumber){
      loss++
      console.log(loss)
      $('#lossColumn').text(loss)
      setGame();
    }
  }
  //function that resets the game
  function setGame() {
    // userNumber = 0;
    // targetNumber = 0;
    // generateScore();
    // $("#buttons").empty();
    // generateArray();
    // generateBtns();
  }


});
