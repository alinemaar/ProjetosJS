// cartas viradas para baixo
// escolhe a primeira e segunda carta
// funções, para mostrar as cartas e virar cartas
//função de verificar se são iguais
const cardBoard = document.querySelector('#cardboard');



let firstCard, secondCard;
let lockCard = false;
let wCard = 0;
let rCard = 0;
let cardHTML = '';

const images = [
    'naruto.png',
    'guy.png',
    'jiraiya.png',
    'kakashi.png',
    'madara.png',
    'minato.png',
    'sasuke.png',
    'itachi.png',
    'sakura.png',
];

// faz a construção das div tanto face qnt verso
images.forEach(img => {
    cardHTML += `
        <div class="memory-card" data-card="${img}">
            <img class="front-face" src="images/${img}">
            <img class="back-face" src="images/blank.png">
        </div>`
});


//repete a renderição das cartas
cardBoard.innerHTML = cardHTML + cardHTML;
// fim do html


const cards = document.querySelectorAll(".memory-card");


function flipCard() {
    //verifico se as cartas estão blocked
    if (lockCard === true) return false;
    this.classList.add("flip")

    //checando se a primeira carta já foi definida
    if (!firstCard) {
        firstCard = this;
        return false;
    }

    secondCard = this;

    checkForMatch();
}


//verificando se as cartas são iguais
function checkForMatch() {
    let isMatch = firstCard.dataset.card === secondCard.dataset.card;


    if (isMatch) {
        rightCard();
    } else {
        wrongCard();
    }
    //    wrongCards();
    //se não for igual retorna as cartas
    !isMatch ? disableCards() : resetCards();

}

//se as cartas não forem iguais elas resetam 

function disableCards() {
    //vai esperar um segundo e remover os flips 

    lockCard = true;
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetCards();
        lockCard = false;
    }, 1000)

}

(function shuffle() {
    cards.forEach(card => {
        let rand = Math.floor(Math.random() * 12)
        card.style.order = rand;

    })
})()

function resetCards(isMatch = false) {
    if (isMatch) {
        firstCard.removeEventListener('clicl', flipCard)
        secondCard.removeEventListener('clicl', flipCard)
    }

    //faz as duas jogadas e vou limpar
    [firstCard, secondCard, lockCard] = [null, null, false]

}

function wrongCard() {
    wCard++;
    document.getElementById('wrongCard').innerText = wCard;
}

function rightCard() {
    rCard++;
    document.getElementById('rightCard').innerText = rCard;
}
cards.forEach(card => card.addEventListener("click", flipCard));

//  background: #FF9C3D;
//paleta de cores:#2B316F #EB5D13;#BF2F0C #FBF959 #FF9C3D
//   <a href="https://fontmeme.com/naruto-font/"><img src="https://fontmeme.com/permalink/210913/895760488ce94221dd28913a5d3bef93.png" alt="naruto-font" border="0"></a>