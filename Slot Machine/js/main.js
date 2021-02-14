/* Build a simple slot machine with minimum 5 items per reel and 3 reels
the pictures in the slot machine should visablly shuffle before one is selected  -
user should be able to bet min or max and have their total update aka how much money they have won or lost.
 two buttons or a drop down selector for how much the user wants to bet
 Min bet does $5 and Max bet does $50. They should start with $1000.
 track how much money is had through subtracting the bet from total
  Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
  if three pictures dont match up the user will lose the money that they put up to bet
  when balance reaches 0 a message alerts the user that theyve lost
*/
//variables
const lReel = document.querySelector('#leftReel');
const mReel = document.querySelector('#midReel');
const rReel = document.querySelector('#rightReel');
const spin = document.querySelector('#spinBtn').addEventListener('click', slotMachine);
const bet = document.querySelector('#bet');
const balance = document.querySelector('#currentBalance');

//images connected to slotMachine function so they can change when spinBtn is clicked
let imgReelL = document.querySelector('#imgReelL');
let imgReelM = document.querySelector('#imgReelM');
let imgReelR = document.querySelector('#imgReelR');

const items = ['assets/gold.jpg','assets/earrings.jpg','assets/watch.jpg','assets/bitcoin.jpg','assets/necklaces.jpg']

//currentBalance(1000) is assigned to HTML to be displayed and currentBet is assigned to the value of the bet in HTML
let currentBalance = 1000;
balance.textContent = `$ ${currentBalance}`;
let currentBet = bet.value;

//change value of bet upon changing it in document
bet.addEventListener('change', function(){
  currentBet = this.value;
});

function slotMachine(){
  let lReelImg = items[Math.floor(Math.random() * items.length)];
  let mReelImg = items[Math.floor(Math.random() * items.length)];
  let rReelImg = items[Math.floor(Math.random() * items.length)];
   imgReelL.src = lReelImg;
   imgReelM.src = mReelImg;
   imgReelR.src = rReelImg;
  if (currentBalance <= 0){
    alert('We took everything from you, stop gambling :\'(')
    window.location.reload();
  }else{
    if((lReelImg == mReelImg) && (lReelImg == rReelImg)){
      balance.textContent = `$ ${currentBalance += (parseInt(currentBet)* 10)}`
      alert('You win! What are you waiting for? Get right back in!');
    }else{
      balance.textContent = `$ ${currentBalance -= parseInt(currentBet)}`
    }
  }
}
