import '../App.css';
// import products from "../products"
import shopFront from '../images/shopFront.jpg'


const Home = () => {
    
    return (
        <div>
        <div>
          <h1 className="welcome">Welcome to Ecnious Shop</h1>
          <h3 className="description">You're best destination for all anime stuff</h3>
          <img className="image" src={shopFront} alt="shop front" ></img>
        </div>

      </div>
    )
}

export default Home;














/* /* <div className="side">
        <img className="figures"  />
        <h4>Nezuko Action figure</h4>
        <h4>250SR</h4>
        </div> */

        // <div className="side">
        // <img className="figures"  />
        // <h4>Luffy Action figure</h4>
        // <h4>350SR</h4>
        // </div>