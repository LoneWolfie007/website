function randomLudo() {
  var randomNumber = Math.random()*6+1;
  randomNumber = Math.floor(randomNumber);
  var diceImage = "dice" + randomNumber;
  var imageSource = "images/" + diceImage + ".png";
  return [randomNumber ,imageSource];
}


var images = document.querySelectorAll("img");
var array1 = randomLudo();
images[0].setAttribute("src", array1[1]);
var array2 = randomLudo();
images[1].setAttribute("src", array2[1]);

if(array1[0] == array2[0]){
  document.querySelector("h1").textContent = "Tied!, Refresh Again";
}
else if(array1[0] > array2[0]){
  document.querySelector("h1").textContent = "🏆Player 1 wins!";
}
else{
  document.querySelector("h1").textContent = "Player 2 wins!🏆";
}
