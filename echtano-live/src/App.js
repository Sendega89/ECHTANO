import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/MainContent/Content";

function App() {
    return <div className="wrapper">
            <header className="header">
                <Header/>
            </header>
            <main className="main">
                <Content />
            </main>
            <footer className="footer">
                <Footer/>
            </footer>
        </div>

}

export default App;
