var dice = document.getElementById('dice')
var rollDiceBtn = document.getElementById('rollDiceBtn')
var currentClass = ''
var playerActive, scores, roundScore 
/*
var player1 = document.getElementById('player-0-container')
var player2 = document.getElementById('player-1-container')
var playerActive = document.querySelector('current-player')
players = [ player1, player2 ]*/


document.getElementById('newGame').addEventListener("click", newGame);
function newGame(){
  init();
  scores = [0, 0];
  roundScore = 0;
  playerActive = 0;
}

/* JOUEURS */
/*  Initialiser le score  */ 

function init(){
  let scoreTotal1 = document.getElementById('scoreTotal-0')
  scoreTotal1.innerText = 0
  let roundScore1 = document.getElementById('roundScore-0')
  roundScore1.innerText = 0
  let scoreTotal2 = document.getElementById('scoreTotal-1')
  scoreTotal2.innerText = 0
  let roundScore2 = document.getElementById('roundScore-1')
  roundScore2.innerText = 0
}
init();

roundScore = 0;
//fonction au clic pour faire apparaitre la face en fonction de rollDiceRand

rollDiceBtn.addEventListener("click", ()=>{
  //fonction qui génère un nombre entre 1 et 6
  var rollDiceRand = Math.floor(Math.random() * 6) + 1
  var randNum = rollDiceRand;

  //faire apparaitre la face show- correspondant au randNum
  var showClass = 'show-' + randNum
  if ( currentClass ) {
    dice.classList.remove( currentClass )
  }
  dice.classList.add( showClass )
  currentClass = showClass

  // additionner le score ou Game Over
  if (rollDiceRand >= 2) {
    roundScore += rollDiceRand
    document.getElementById('roundScore-'+ playerActive).innerText = roundScore
  } else if(rollDiceRand == 1) {
    roundScore = 0
    document.getElementById('roundScore-'+ playerActive).innerText = "Ooops"
    nextPlayer();
  } else {
    document.getElementById('roundScore-'+ playerActive).innerText = "Erreur"
  }
}) 

/*    Joueur suivant et joueur actif   */
playerActive = 0;
function nextPlayer(){
  if(playerActive === 0){
    playerActive = 1;
  } else {
    playerActive = 0;
  }
  roundScore = 0
  document.getElementById('roundScore-'+playerActive).innerText = 0
}

/*    stocker le score   */
scores = [0, 0];
holdBtn.addEventListener("click", ()=>{
  scores[playerActive] += roundScore
  document.getElementById('scoreTotal-'+playerActive).innerText = scores[playerActive]
  console.log(scores)
  winner();
  nextPlayer()
})

function winner(){
  if(scores[playerActive] >= 100){
    window.alert('YOU WIN')
  }
}

//créer mon dé
//visuel du dé de 6

/*créer l'objet dé avec canvas et l'animer
var canvas, ctx;
var diceColor = '#fff'
var pointColor = 'crimson'

const canvas = document.getElementById('dice')
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
