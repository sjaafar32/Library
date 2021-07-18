let myLibrary = [];

function Book() {
  // the constructor...
}

const addBookBtn = document.getElementById('new-book');
const cardsDiv = document.getElementById('cards-div');

addBookBtn.addEventListener('click', () => {
    let input = prompt("Enter Book Title");
    myLibrary.push(input);
    console.log(myLibrary);

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.textContent = input;
    cardsDiv.appendChild(newCard);

});

function addBookToLibrary() {
}