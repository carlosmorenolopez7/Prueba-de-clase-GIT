class BookList {
    constructor() {
        this.read = false;
        this.next = undefined;
        this.current = undefined;
        this.last = undefined;
        this.collection = [];
    }

    get add() {
        return this.addBook();
    }

    get finish() {
        return this.finishCurrentBook();
    }

    addBook()
    {
        this.collection.push();
    }

    finishCurrentBook()
    {
        this.read = true;
        this.last = this.current;
        this.current = this.next;
        this.next = this.collection.shift()
    }
}

class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.date = undefined;
        this.read = false;
    }

    get leido() {
        return this.updateRead();
    }

    get fecha() {
        return this.updateDate();
    }

    updateRead()
    {
        this.read = true;
    }

    updateDate()
    {
        this.date = newDate();
    }
}


milista=new BookList()