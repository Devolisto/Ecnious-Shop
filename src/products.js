
import Nezuko from "./images/Nezuko.jpg"
import Luffy from './images/luffy.jpg'

const products = [
    {
        id: 1,
        name: "Nezuko Action figure",
        price: "250SR",
        image: <img src={Nezuko} alt="Nezuko"></img>
    },
    {
        id: 2,
        name: "Luffy Action figure",
        price: "350SR",
        image: <img src={Luffy} alt="Luffy"></img>
    }
]

export default products;