// PROMISE
const books = [
    { name: "Pinball 1973", author: "Haruki Murakami" },
    { name: "Azadliq", author: "Zygmunt Bauman" },
    { name: "Baskervillerin iti", author: "Artur Konan Doyl" }
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index);
    })
}

const addNewBook = (newBook, callback) => {
    books.push(newBook);
    callback();
}

addNewBook({ name: "Berlin xatireleri", author: "Husrev Gerede" }, listBooks);

const promise = new Promise(function(resolve, reject) {
    // resolve('DATA');
    reject();
})

console.log(promise);