import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = (props) => {
    const { books } = useContext(BookContext);
    console.log(useContext(BookContext));
    return (
        <div className="navbar">
            <h1>Ninja reading list.</h1>
            <p>Currently you have {books.length}</p>
        </div>
    );
};

export default Navbar;
