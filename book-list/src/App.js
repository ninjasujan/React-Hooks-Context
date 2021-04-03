import Navbar from "./components/Navbar";
import BookContextProvider from "./context/BookContext";
import BookList from "./components/Booklist";
import Bookform from "./components/Bookform";

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Navbar />
                <BookList />
                <Bookform />
            </BookContextProvider>
        </div>
    );
}

export default App;
