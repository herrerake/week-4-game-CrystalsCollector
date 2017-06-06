$(document).ready(function() {

  //creating an array that holds the four random numbers that will be used in each crystal
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
  function generateBtns() {

    for (var i = 0; i < numbers.length; i++) {
      var crystalBtn = $("<button>");
      crystalBtn.addClass("crystal-button number");
      crystalBtn.attr("data-number", numbers[i]);
      // crystalBtn.text(numbers[i]);
      $("#buttons").append(crystalBtn);
    }
    return crystalBtn
  }
  var crystals = generateBtns();
  //console.log(crystals)
  function generateScore(min, max) {
    var target = Math.floor(Math.random()* (121 - 19)) + 19;
    return target
  }
  var targetScore = generateScore();
  //console.log(targetScore)
  var wins = "";
  var loss = "";


});
