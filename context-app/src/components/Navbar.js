import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuth, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div>
            <nav
                style={{
                    background: theme.ui,
                    color: theme.syntax,
                }}
            >
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                    {isAuth ? "Logged in" : "Logged out"}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    );
}
