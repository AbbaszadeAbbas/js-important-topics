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

const addNewBook = (newBook) => {
    const promise = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve();
        // reject('ERROR')
    });

    return promise;
}

addNewBook({ name: "Berlin xatireleri", author: "Husrev Gerede" })
    .then(() => {
        listBooks()
    })
    .catch(reason => console.log(reason))