// import logo from './logo.svg';
  
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import ActionFigures from "./components/ActionFigures";
import ThemeProvider from "styled-components";

// const title = "Ecnious Shop"

const theme = {
  fontColorMain : "#B8B2AD",
  backgroundMain : "#F0EDEB",
  priceColor : "#D4CCC3"
};

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
      <ActionFigures/>
    </ThemeProvider>

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
