const myLibrary = [];
const container = document.querySelector(".container");

//book class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//no longer used function
//function addBookToLibrary(book) {
    //myLibrary.push(book.title);
    //console.log(myLibrary);
//}

//initializing books for myLibrary array
const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "Read");
myLibrary.push(thehobbit);
const harrypotter = new Book("Harry Potter", "J.K. Rowling", "200", "Unread");
myLibrary.push(harrypotter);
const howtokilladragon = new Book("How To Kill A Dragon", "Calvert Watkins", "630", "Unread");
myLibrary.push(howtokilladragon);
const stevejobs = new Book("Steve Jobs", "Walter Isaacson", "656", "Read");
myLibrary.push(stevejobs);
//console.log(myLibrary);

//function to provide all delete buttons with algorithm for removing book from library(display) and myLibrary array
let allDelBtns;
let deleteBtn;
function enableDelBtns() {
    allDelBtns = document.querySelectorAll(".delete");
    allDelBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            container.removeChild(btn.parentNode);
            let bookChangeTitle = btn.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
            let index = myLibrary.map(e => e.title).indexOf(bookChangeTitle);
            myLibrary.splice(index, 1);
            console.log(myLibrary);
        })
    })
};

//function to add delete button
function addDelBtn(bookNeedingDelBtn) {
    deleteBtn = document.createElement("button");
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add("delete");
    bookNeedingDelBtn.appendChild(deleteBtn);
};

//function to provide all change read status buttons with algorithm
function enableStatusBtns() {
    allStatusBtns = document.querySelectorAll('.status');
    allStatusBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            let bookChangeTitle = btn.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.textContent;
            let index = myLibrary.map(e => e.title).indexOf(bookChangeTitle);
            if (myLibrary[index].read == 'Unread') {
                myLibrary[index].read = 'Read';
                //console.log('changed');
            } else {
                myLibrary[index].read = 'Unread';
                //console.log('changed');
            }
            //console.log(myLibrary);
            updateLibrary();
        })
    })
};
let statusBtn;
//function to add change read status button
function addStatusBtn(bookNeedingStatusBtn) {
    statusBtn = document.createElement('button');
    statusBtn.textContent = 'Change Read Status';
    statusBtn.classList.add('status');
    bookNeedingStatusBtn.appendChild(statusBtn);
};

//function for updating the books in the library(display) by first removing all child elements in container and then re-adding all from myLibrary array
let book
function updateLibrary() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };
    myLibrary.forEach((myBook) => {
        book = document.createElement("div");
        book.classList.add("book");
        let bookTitle = document.createElement("div");
        bookTitle.classList.add("title");
        let bookAuthor = document.createElement("div");
        bookAuthor.classList.add("author");
        let bookPages = document.createElement("div");
        bookPages.classList.add("pages");
        let bookRead = document.createElement("div");
        bookRead.classList.add("read");
        bookTitle.textContent = myBook.title;
        bookAuthor.textContent = myBook.author;
        bookPages.textContent = `${myBook.pages} pages`;
        bookRead.textContent = myBook.read;
        book.appendChild(bookTitle);
        book.appendChild(bookAuthor);
        book.appendChild(bookPages);
        book.appendChild(bookRead);
        addDelBtn(book);
        addStatusBtn(book);
        container.appendChild(book);
    });
    enableDelBtns();
    enableStatusBtns();
}

//initialize the books already in myLibrary
updateLibrary();

//function to add book to library(display) and add the delete button
//function updateLibrary() {
    //book = document.createElement("div");
    //book.classList.add("book");
    //book.textContent = `${myLibrary[myLibrary.length - 1].title}, ${myLibrary[myLibrary.length - 1].author}, ${myLibrary[myLibrary.length - 1].pages}, ${myLibrary[myLibrary.length - 1].read}`;
    //addDelBtn(book);
    //container.appendChild(book);
//}

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
        newRead = 'Read'
    } else {
        newRead = 'Unread'
    }
    myLibrary.push(new Book(newTitle, newAuthor, newPages, newRead));
    dialog.close();
    form.reset();
    updateLibrary();
    //console.log(myLibrary);
})

//console.log(myLibrary);