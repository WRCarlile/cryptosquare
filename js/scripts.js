

// business logic start

var length = 0;
var squareRoot = 0;
var arrayFinal = [];
var arrayOfLetter = [];


var stringArray = function(first) {
  first = first.replace(/\s|\.|\?|\!|\&/g,'');
  first = first.toLowerCase();
  length = first.length;
  arrayOfLetter = first.split("");
  console.log(arrayOfLetter);
  squareRoot = Math.sqrt(length);

  // console.log(squareRoot);
  if (squareRoot % 1 === 0) {
    perfectSquare = true;
    for (index = 0 ; index < squareRoot ; index ++) {
    var arraySplice  = arrayOfLetter.splice(0,squareRoot);
    arrayFinal.push(arraySplice);
    }
    } else {
    perfectSquare = false;
  };
  console.log(arrayFinal);
  // console.log(perfectSquare);
};



// business logic end

// User logic

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val();
    stringArray(userInput);
  });
});
