import React, { useContext, useState } from "react";

import { BookContext } from "../context/BookContext";

export default function Bookform() {
    const { addBooks } = useContext(BookContext);

    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");

    const onAddBook = (e) => {
        e.preventDefault();
        addBooks(title, author);
    };

    return (
        <div>
            <form onSubmit={onAddBook}>
                <input
                    type="text"
                    placeholder="Title.."
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    type="text"
                    placeholder="Author.."
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
}
