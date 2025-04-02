const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', alreadyRead: true },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', alreadyRead: false }
];

books.forEach(book => {
    const info = `"${book.title}" by ${book.author}`;
    if (book.alreadyRead) console.log(`You already read ${info}`);
    else console.log(`You still need to read ${info}`);
});