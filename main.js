const myLibrary = [];
const container = document.querySelector(".container");

//book object prototype
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = myLibrary.length;
}

//no longer used function
function addBookToLibrary(book) {
    myLibrary.push(book.title);
    console.log(myLibrary);
}

//initializing books for myLibrary array
const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read");
myLibrary.push(thehobbit);
const harrypotter = new Book("Harry Potter", "J.K. Rowling", "200", "unread");
myLibrary.push(harrypotter);
const howtokilladragon = new Book("How To Kill A Dragon", "Calvert Watkins", "630", "unread");
myLibrary.push(howtokilladragon);
const stevejobs = new Book("Steve Jobs", "Walter Isaacson", "656", "read");
myLibrary.push(stevejobs);
console.log(myLibrary);

//function to provide all delete buttons with algorithm for removing book from library(display) and myLibrary array
let allDelBtns;
let deleteBtn;
function enableDelBtns() {
    allDelBtns = document.querySelectorAll(".delete");
    console.log('im running');
    allDelBtns.forEach((btn) => {
        console.log(btn.parentNode);
        btn.addEventListener('click', () => {
            container.removeChild(btn.parentNode);
            let info = btn.previousSibling.textContent;
            let bookTitle = info.substring(0, info.indexOf(','));
            let index = myLibrary.map(e => e.title).indexOf(bookTitle);
            myLibrary.splice(index, 1);
        })
    })
};

//initializing books for the library(display)
let book
myLibrary.forEach((myBook) => {
    book = document.createElement("div");
    book.classList.add("book");
    book.textContent = `${myBook.title}, ${myBook.author}, ${myBook.pages}, ${myBook.read}`;
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add("delete");
    book.appendChild(deleteBtn);
    container.appendChild(book);
});

enableDelBtns();

//function to add book to library(display) and add the delete button
function updateLibrary() {
    book = document.createElement("div");
    book.classList.add("book");
    book.textContent = `${myLibrary[myLibrary.length - 1].title}, ${myLibrary[myLibrary.length - 1].author}, ${myLibrary[myLibrary.length - 1].pages}, ${myLibrary[myLibrary.length - 1].read}`;
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add("delete");
    book.appendChild(deleteBtn);
    container.appendChild(book);
}

//setting up the new book button and buttons in the pop up modal
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

//event listener for add book button in the pop up modal, where the add button closes the modal, adds the book to both myLibrary array and the library(display), and gets the delete buttons working
const addBtn = document.querySelector('#add')
addBtn.addEventListener('click', (event) => {
    let newRead;
    event.preventDefault();
    const newTitle = document.getElementById('title').value;
    const newAuthor = document.getElementById('author').value;
    const newPages = document.getElementById('pages').value;
    if (document.getElementById('read').checked == true) {
        newRead = 'read'
    } else {
        newRead = 'unread'
    }
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
    //addBookToLibrary(newBook);
    dialog.close();
    form.reset();
    updateLibrary();
    enableDelBtns();
    console.log(myLibrary);
})

console.log(myLibrary);