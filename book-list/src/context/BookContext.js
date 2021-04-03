import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: "Hunts man fear", author: "Charles Darvin", id: 1 },
        { title: "Dom Ftyart a jaa", author: "Sujan", id: 2 },
        { title: "Goma Tyua", author: "Yajn ab na", id: 3 },
    ]);

    const addBooks = (title, author) => {
        setBooks([...books, { title, author, id: Math.random() }]);
    };

    const removeBooks = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <BookContext.Provider value={{ books, addBooks, removeBooks }}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;
