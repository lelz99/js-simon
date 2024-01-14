// Recupero elementi
const boxNumber = document.querySelector('.random-number');
const timer = document.querySelector('.timer');
const listNumbers = [];
const guessedNumbers = []


// Creazione numeri random e visualizzazione in pagina 
let randomNumber;
let createList = '<ul>';

for(let i = 0; i < 5; i++){

    randomNumber = Math.floor(Math.random() * 100 );
    listNumbers.push(randomNumber);
    createList += `<li>${listNumbers[i]}</li>`;
}
createList +='</ul>';
boxNumber.innerHTML = createList;


// Timer inizio gioco
let second = 5;
timer.innerText = second
let questionNumber;
let pointCount = 0;

const countdown = setInterval(() => {

    timer.innerText = --second;
    
    if (second === 0) {
        
        boxNumber.innerText = '';
        timer.innerText = 'Start Game';
        clearInterval(countdown);

    } 

}, 1000)
    

// Gioco effettivo
const startGame = setTimeout (() =>{

    if (second === 0){
            
        let i = 0

        while(i < listNumbers.length){
                
            questionNumber = parseInt(prompt('Inserisci un numero '))
                
            if (questionNumber === listNumbers[i]) {
                pointCount += 1
                guessedNumbers.push(questionNumber)
            }
            
            i++

        }
            
        if (pointCount > 1) {
            alert(`Hai totalizzato ${pointCount} punti e hai indovinato i numeri ${guessedNumbers}`)
        } else if (pointCount === 1) {
            alert(`Hai totalizzato 1 punt0 e hai indovinato il numero ${guessedNumbers}`)
        }
         else {
            alert('Non hai indovinato numeri')
        }

    }

}, 5500)