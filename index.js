
// this section of code is for -  when the button is pressed
var buttonArrayLength = document.querySelectorAll(".drum").length;
for(var i = 0; i < buttonArrayLength; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var expression = this.innerHTML
    makeSound(expression);
    animations(expression);
  });
}


//this section of code is for -  when a key is pressed
document.addEventListener("keypress", function (event){
  var expression = event.key;
  makeSound(expression);
  animations(expression);
});



function makeSound(expression){

  switch (expression) {
      case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

      case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

      case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

      case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

      case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

      case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;


    default:

  }
}


function animations(expression) {
  var animateButton = document.querySelector("." + expression);
  animateButton.classList.add("pressed");

  setTimeout(function () {
    animateButton.classList.remove("pressed");
  },100);
}
