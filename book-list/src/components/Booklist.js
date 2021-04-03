import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetails from "./Bookdetails";

const Booklist = () => {
    const { books } = useContext(BookContext);
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book) => {
                    return <BookDetails book={book} key={book.id} />;
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No Books to read, free time :)</div>
    );
};

export default Booklist;
