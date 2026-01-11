document.addEventListener("DOMContentLoaded", function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    console.log('Player 1 dice":${randomNumber1}');
    console.log('Player 2 dice":${randomNumber2}');

    let diceImage1=document.querySelector(".img1");
    
    let diceImage2=document.querySelector(".img2");
    diceImage1.setAttribute("src","images/dice"+randomNumber1+".png");

    diceImage2.setAttribute("src","images/dice"+randomNumber2+".png");

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
    }
    else{
        document.querySelector("h1").innerHTML="Draw!";
    }

    document.addEventListener('keydown', function(event) {
        if(event.key==='r' || event.key==='R' || event.code=='Space'){
            location.reload();
        }
    });

});