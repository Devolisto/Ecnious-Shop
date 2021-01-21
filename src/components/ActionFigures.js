import ActionFigureItems from "./ActionFigureItems"
import products from "../products";

const ActionFigures = () => {
    const productList = products.map((product) => <ActionFigureItems key={product.id} />

    )
    return (
    <div>
    {productList}
    </div> 
    )  

}

export default ActionFigures;