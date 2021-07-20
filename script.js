const cardsDiv = document.getElementById('cards-div');
const submitBtn = document.getElementsByClassName('submit')[0];

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read

  
  let deleteArray;
  const newCard = document.createElement('div');
  const deleteBtn = document.createElement('button');

  this.createCard = function (){
    newCard.classList.add('card');
    newCard.textContent = 'Title: ' + title + '\n Author:' + author + '\n Pages:' + pages + '\nRead: ' + read;
    cardsDiv.appendChild(newCard);
  }

  this.createDeleteBtn = function(){
    deleteBtn.innerHTML = "Delete Book";
    deleteBtn.classList.add('delete-button');
    newCard.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      deleteArray = Array.from(cardsDiv.childNodes);
      console.log(this.author);
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

submitBtn.addEventListener('click', () => {
  let title = document.getElementById('input-title').value; //.value is the input
  const author = document.getElementById('input-author').value;
  const pages = document.getElementById('input-pages').value;
 

  let readOrNot;
  if(document.getElementById('read').checked == true){readOrNot = 'Yes';}
  else if(document.getElementById('notRead').checked == true){readOrNot = 'No';}
  
  myLibrary.push(title);
  console.log(myLibrary);
  console.log(myLibrary[myLibrary.length-1]);
  myLibrary[myLibrary.length-1] = new Book(title, author, pages, readOrNot); //creates an object based on name of title that is store in array
  myLibrary[myLibrary.length-1].createCard();
  console.log(myLibrary);
  console.log(myLibrary[myLibrary.length-1]);
  console.log("Book title is " + myLibrary[myLibrary.length-1].title + "\nPages is " + myLibrary[myLibrary.length-1].pages);

  myLibrary[myLibrary.length-1].createDeleteBtn();
  
});

function addBookToLibrary() {

}