// import logo from './logo.svg';
import './App.css';
import shopFront from './images/shopFront.jpg'
import Nezuko from './images/Nezuko.jpg'
import Luffy from './images/luffy.jpg'
import products from "./products";

// const title = "Ecnious Shop"

function App() {

  const productList = products.map((product) => {
      return (product.image, product.name, product.price)
  })
  return (
  
      // <title>{title}</title>
      <div>
        <div>
          <h1 className="welcome">Welcome to Ecnious Shop</h1>
          <h3 className="description">You're best destination for all anime stuff</h3>
          <img className="image" src={shopFront} alt="shop front" ></img>
        </div>

        <div className="side">
        <img className="figures" src={Nezuko} alt="Nezuko" />
        <h4>Nezuko Action figure</h4>
        <h4>250SR</h4>
        </div>

        <div className="side">
        <img className="figures" src={Luffy} alt="Luffy" />
        <h4>Luffy Action figure</h4>
        <h4>350SR</h4>
        </div>

      </div>

  );
}

export default App;


/* <div className="App">
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
    </div> */
