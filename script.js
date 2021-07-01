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

var dice = document.getElementById('dice');
var rollDiceBtn = document.getElementById('rollDiceBtn');
var currentClass = '';

//fonction qui génère un nombre entre 1 et 6
const rollDiceRand = function(){
  const numberRandom = Math.floor(Math.random() * 6) + 1
  return numberRandom
}
const result = rollDiceRand()

//fonction pour faire apparaitre la face en fonction de rollDiceRand
function rollDice() {
 var randNum = rollDiceRand(1,7)
  /*console.log(randNum)*/
  var showClass = 'show-' + randNum;
 /*console.log(showClass)*/
  if ( currentClass ) {
    dice.classList.remove( currentClass );
  }
  dice.classList.add( showClass );
  currentClass = showClass;
}
// initialize
rollDice();

rollDiceBtn.addEventListener("click", rollDice);



//Afficher le dé graphique correspondant à RollDice
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
}



console.log(result)