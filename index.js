var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage ="dice"+ randomNumber1+".png" ;
var imageSource = "images/" + randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , imageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage= "dice"+randomNumber2+".png" ;
var imageSource = "images/" + randomDiceImage ;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Won"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 Won"
}
else{
    document.querySelector("h1").innerHTML="DRAW!!"
}