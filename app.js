// Book Class: Represent a Book
class Book {
    constructor(name, author, publishing ,isbn){
        this.name = name;
        this.author = author;
        this.publishing = publishing;
        this.isbn = isbn;
    }

}

// UI Class: Handle UI 
class UI {
    static displayBooks(){
    const books = Store.getBooks();

        const books = StoreBooks;

        books.forEach((book)=> UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.name}</tb>
        <td>${book.author}</tb>
        <td>${book.publishing}</tb>
        <td>${book.isbn}</tb>
        <td><a href="#" class="btn btn-danger btn-sm delete">-</a></tb>
        `;

        list.appendChild(row);

    }

    static deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }

    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.conatiner');
        const form = document.querySelector('#book-list');
        container.insertBefore(div, form);

        // Vanish in few seconds
        setTimeout(() =>document.querySelector('.alert').remove(), 4000 );
    }

    static clearFields(){
        document.querySelector('#name').value = '';
        document.querySelector('#authore').value = '';
        document.querySelector('#publishing').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handle Storage
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') == null){
            books = [];

        } else{
            books = JSON.parse(localStorage.getItem('books'));
        }
    }

    static addBooks(){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books' , JSON.stringifybooks);


    }

    static removeBooks(){
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book,isbn){
                books.splice(index,1);

            }
        });

        localStorage.setItem('books', JSON.stringify(books));


    }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) =>{
    // prevent submit
    e.preventDefault();
    // grt values form
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const publishing = document.querySelector('#publishing').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate
    if(name == '' || author == '' || publishing == '' || isbn == ''){
       UI.showAlert('Please fill in all fields', 'Error !');

    } else {

        // Instatiate Book
    const book = new Book(name,author,publishing,isbn);

    // Add Book in UI
    UI.addBookToList(book);


    // Add book to store
    Store.addBook(book);


    // clear fields
    UI.clearFields();
    }

    

});

//Event: REmove a Book

document.querySelector('#book-list').addEventListener('click', (e)=>{
    
    // Remove Book from UI
    UI.deleteBook(e.target);

    // Remove book from Store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show sucess message
    UI.showAlert('Book Added', 'Success !');
});