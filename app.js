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
        const StoreBooks = [
            {
                name: 'Book 1',
                author: 'XYZ',
                publishing: '1999',
                isbn: '77777',
            },
            {
                name: 'Book 2',
                author: 'abc',
                publishing: '1991',
                isbn: '88888',

            }
        ];

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

    static clearFields(){
        document.querySelector('#name').value = '';
        document.querySelector('#authore').value = '';
        document.querySelector('#publishing').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Store Class: Handle Storage

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
        alert('Please fill in all fields');

    } else {

        // Instatiate Book
    const book = new Book(name,author,publishing,isbn);

    // Add Book in UI
    UI.addBookToList(book);

    // clear fields
    UI.clearFields();
    }

    

});

//Event: REmove a Book

document.querySelector('#book-list').addEventListener('click', (e)=>{
    UI.deleteBook(e.target)
});