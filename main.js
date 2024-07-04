const myLibrary = ['Harry Potter', 'How to Kill a Dragon', 'Birdman', 'Steve Jobs'];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() { 
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book.title);
    console.log(myLibrary);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
console.log(theHobbit.info());

const container = document.querySelector(".container");
let book

for (myBook of myLibrary) {
    book = document.createElement("div");
    book.classList.add("book");
    book.textContent = myBook;
    console.log(book);
    container.appendChild(book);
}

const dialog = document.querySelector('dialog');
const closeBtn = document.querySelector('dialog button');
const form = document.querySelector('form');
const newBookBtn = document.querySelector('#new');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeBtn.addEventListener('click', () => {
    dialog.close();
    form.reset();
});

const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    const newRead = document.getElementById('read').value;
    let newBook = new Book(newTitle, newAuthor, newPages, newRead);
    addBookToLibrary(newBook);
    dialog.close();
    form.reset();
})

