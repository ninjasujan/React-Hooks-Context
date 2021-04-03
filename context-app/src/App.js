import React from "react";
import BookList from "./components/Booklist";
import Navbar from "./components/Navbar";
import ToggleTheme from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar />
                    <BookList />
                    <ToggleTheme />
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
