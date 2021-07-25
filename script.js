const cardsDiv = document.getElementById('card-div');
const submitBtn = document.getElementsByClassName('submit')[0];
const addBookBtn = document.getElementById('add-book');

let myLibrary = [];

function Book(title, author, pages, read, arrayPosition) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
  this.arrayPosition = arrayPosition;

  const newCard = document.createElement('div');
  const deleteBtn = document.createElement('button');

  this.createCard = function (){
    newCard.classList.add('card');
    const cardContent = document.createElement('p');
    cardContent.classList.add('card-content');
    cardContent.textContent = 'Title: ' + this.title + '\n Author:' + this.author + '\n Pages:' + this.pages + '\n Read: ' + this.read;
    newCard.appendChild(cardContent);
    cardsDiv.appendChild(newCard);
  }

  this.createDeleteBtn = function(){ //adds delete button
    deleteBtn.innerHTML = "Delete Book";
    deleteBtn.classList.add('delete-button');
    newCard.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
     cardsDiv.removeChild(newCard); //removes the newCard since it is a child of cardsDiv
    });
  }

  this.deleteCard = function (){
    
  }
}

/*
newBookBtn.addEventListener('click', () => {
    let input = prompt("Enter Book Title");
    myLibrary.push(input);
    console.log(myLibrary);

    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.textContent = input;
    cardsDiv.appendChild(newCard);

});
*/

addBookBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--display', 'block');
});

submitBtn.addEventListener('click', () => {
  const title = document.getElementById('input-title').value; //.value is the input
  const author = document.getElementById('input-author').value;
  const pages = document.getElementById('input-pages').value;
 

  let readOrNot;
  if(document.getElementById('read').checked == true){readOrNot = 'Yes';}
  else if(document.getElementById('notRead').checked == true){readOrNot = 'No';}
  
  myLibrary.push(title);
  console.log(myLibrary);
  myLibrary[myLibrary.length-1] = new Book(title, author, pages, readOrNot, myLibrary.length-1); //creates an object based on name of title that is store in array
  myLibrary[myLibrary.length-1].createCard();

  myLibrary[myLibrary.length-1].createDeleteBtn();
  document.documentElement.style.setProperty('--display', 'none');
  
});

function addBookToLibrary() {

}