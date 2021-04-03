import React from "react";

import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

class BookList extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <AuthContext.Consumer>
                {(authContext) => (
                    <ThemeContext.Consumer>
                        {(themeContext) => {
                            const { isLightTheme, light, dark } = themeContext;
                            const { isAuth, toggleAuth } = authContext;
                            const theme = isLightTheme ? light : dark;
                            return (
                                <div
                                    className="book-list"
                                    style={{
                                        color: theme.syntax,
                                        background: theme.bg,
                                    }}
                                >
                                    <ul>
                                        <li style={{ background: theme.ui }}>
                                            The way of kings
                                        </li>
                                        <li style={{ background: theme.ui }}>
                                            The name of the wind
                                        </li>
                                        <li style={{ background: theme.ui }}>
                                            The final empire
                                        </li>
                                    </ul>
                                </div>
                            );
                        }}
                    </ThemeContext.Consumer>
                )}
            </AuthContext.Consumer>
        );
    }
}

export default BookList;
