const myLibrary = [];

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

const book = document.createElement("div");
book.classList.add("book");
book.textContent = 'Harry Potterer';
console.log(book);
container.appendChild(book);