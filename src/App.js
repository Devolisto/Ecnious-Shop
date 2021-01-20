import logo from './logo.svg';
import './App.css';
import shopFront from './images/shopFront.jpg'

// const title = "Ecnious Shop"

function App() {
  return (
  
      // <title>{title}</title>
      <div>
        <h1 className="welcome">Welcome to Ecnious Shop</h1>
        <h3 className="description">You're best destination for all anime stuff</h3>
        <img className="image" src={shopFront} alt="shop front" ></img>
      </div>

  );
}

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
