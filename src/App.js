import './App.css';
import Navbar from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">    
        <Header />
        <p>
         NYTT
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      <footer>
        <Navbar />
      </footer>
    </div>
  );
}

export default App;
