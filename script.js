let randomNumber1 = Math.floor(Math.random()*6) + 1;

let dice = "dice"+randomNumber1

let path = "images/"+dice+".png"

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , path);

let randomNumber2 = Math.floor(Math.random()*6)+1;

let path2 = "images/dice" + randomNumber2 +".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , path2);

// Player 1 Wins

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}
else{
  document.querySelector("h1").innerHTML = "Draw!😑"
}
