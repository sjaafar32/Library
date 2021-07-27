const cardsDiv = document.getElementById('card-div');
const submitBtn = document.getElementsByClassName('submit')[0];
const cancelBtn = document.getElementsByClassName('cancel')[0];
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
    const cardTitle = document.createElement('h1');
    cardTitle.classList.add('title');
    cardTitle.textContent = this.title.toUpperCase();
    newCard.appendChild(cardTitle);
    
    const authorInfo = document.createElement('li');
    authorInfo.classList.add('book-info');
    authorInfo.textContent = 'Author: ' + this.author;
    newCard.appendChild(authorInfo);
    
    const pagesInfo = document.createElement('li');
    pagesInfo.classList.add('book-info');
    pagesInfo.textContent = 'Pages: ' + this.pages;
    newCard.appendChild(pagesInfo);

    const readInfo = document.createElement('li');
    readInfo.classList.add('book-info');
    readInfo.textContent = 'Finished Reading? ' + this.read;
    newCard.appendChild(readInfo);

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
}

addBookBtn.addEventListener('click', () => {
  title = '';
  author = '';
  pages = '';
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
  
  title = "";
  author = "";
  pages = "";
});

cancelBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--display', 'none');
});

function addBookToLibrary() {

}