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

  this.createCard = function (){ //for each component of the card, an element is created, a class is added, the content is added, and it is appended to its parent
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

    const readBtn = document.createElement('button'); //this button flips the text between 'read' and 'not read'
    readBtn.type = 'button';
    readBtn.classList.add('read-btn');

    if(this.read =='No'){readBtn.textContent = 'Not Read';}
    else if(this.read == 'Yes'){readBtn.textContent = 'Read';}

    readBtn.onclick = function() {
      if(readBtn.textContent == 'Read'){readBtn.textContent = 'Not Read';}
      else if(readBtn.textContent == 'Not Read'){readBtn.textContent = 'Read';}
    };
    newCard.appendChild(readBtn);

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
  document.documentElement.style.setProperty('--display', 'block'); //this makes the form visible after the add button is clicked
});

submitBtn.addEventListener('click', () => {
  const title = document.getElementById('input-title').value; //.value is the input
  const author = document.getElementById('input-author').value;
  const pages = document.getElementById('input-pages').value;

  if(title == '' || author == '' || pages == ''){alert('Do not leave any of the fields blank'); return;}
  
  if(document.getElementById('read').checked == false &&
  document.getElementById('notRead').checked == false){
    alert(`Please select either "Read" or "Not Read"`);
    return;
  } 

  let readOrNot;
  if(document.getElementById('read').checked == true){readOrNot = 'Yes';}
  else if(document.getElementById('notRead').checked == true){readOrNot = 'No';}
  
  myLibrary.push(title);
  console.log(myLibrary);
  myLibrary[myLibrary.length-1] = new Book(title, author, pages, readOrNot, myLibrary.length-1); //creates an object based on name of title that is store in array
  myLibrary[myLibrary.length-1].createCard();

  myLibrary[myLibrary.length-1].createDeleteBtn();
  document.documentElement.style.setProperty('--display', 'none'); //this makes the form disappear after the submit button is clicked

  document.getElementById('input-title').value = ''; //sets the values of the inputs to blank so next time the form is opened, the textbox is blank
  document.getElementById('input-author').value = '';
  document.getElementById('input-pages').value = '';
  document.getElementById('read').checked = false; //this unchecks the radio buttons
  document.getElementById('notRead').checked = false;
});

cancelBtn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--display', 'none'); //this makes the form disappear after the cancel button is clicked
  document.getElementById('input-title').value = '';
  document.getElementById('input-author').value = '';
  document.getElementById('input-pages').value = '';
  document.getElementById('read').checked = false;
  document.getElementById('notRead').checked = false;
});