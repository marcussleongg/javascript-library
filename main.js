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

function addBookToLibrary() {
    myLibrary.push(this.title)
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

const dialog = document.querySelector("dialog");
const closeBtn = document.querySelector("dialog button")
const addBtn = document.querySelector('#add');
addBtn.addEventListener('click', () => {
    dialog.showModal();
});
closeBtn.addEventListener('click', () => {
    dialog.close();
});