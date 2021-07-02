var dice = document.getElementById('dice')
var rollDiceBtn = document.getElementById('rollDiceBtn')
var currentClass = ''
var playerActive, scores, roundScore 

playerActive = 0;
scores = [0, 0];
roundScore = 0;

/*newGame();
document.getElementById("newGame").addEventListener("click", newGame);
function newGame{}*/

/* JOUEUR 1 */
/*  Initialiser le score  */ 
let scoreTotal1 = document.getElementById('scoreTotal-1')
scoreTotal1.innerText = 0

let roundScore1 = document.getElementById('roundScore-1')
roundScore1.innerText = 0


//fonction au clic pour faire apparaitre la face en fonction de rollDiceRand

rollDiceBtn.addEventListener("click", ()=>{
  //fonction qui génère un nombre entre 1 et 6
  var rollDiceRand = Math.floor(Math.random() * 6) + 1
  
  var randNum = rollDiceRand;
  roundScore1.textContent = randNum

  //faire apparaitre la face correspondant au randNum
  var showClass = 'show-' + randNum
  if ( currentClass ) {
    dice.classList.remove( currentClass )
  }
  dice.classList.add( showClass )
  currentClass = showClass

  // stocker le score ou Game Over
  if (rollDiceRand >= 2) {
    roundScore += rollDiceRand
    document.getElementById('roundScore-'+ playerActive).innerText = roundScore
  } else if {
    document.getElementById('roundScore-'+ playerActive).innerText = "Ooops"
    nextPlayer();
  } else {
    document.getElementById('roundScore-'+ playerActive).innerText = "Erreur"
  }
}) 

function nextPlayer(){


}

console.log()
/*while (resultDice >= 2){
  roundScore1 = roundScore1 + resultDice
}*/


//créer mon dé
//visuel du dé de 6
//const roll = document.getElementById('#roll'){};

/*créer l'objet dé avec canvas et l'animer
var canvas, ctx;
var diceColor = '#fff'
var pointColor = 'crimson'

const canvas = document.getElementById('roll')
const ctx = canvas.getContext('2D')
canvas.width = 500
canvas.height = 500

drawDice*/

/*Afficher le dé graphique correspondant à RollDice
switch (result) {
case 1:
  console.log('afficher le dés de 1');
  break;
case 2:
  console.log('afficher le dés de 2');
  break;
case 3:
  console.log('afficher le dés de 3');
  break;
case 4:
  console.log('afficher le dés de 4');
  break;
case 5:
  console.log('afficher le dés de 5');
  break;
case 6:
  console.log('afficher le dés de 6');
  break;
default:
  console.log(`Sorry, we are out of ${result}.`);
}*/
