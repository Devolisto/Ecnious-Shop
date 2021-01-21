
const ActionFigureItems = (props) => {
   
    
    return (
        // (props.product.image, 
        // props.product.name, 
        // props.product.price)

        <div className="side">
        <img className="figures" src={props.product.image} alt="Nezuko" />
        <h4>Nezuko Action figure {props.product.name}</h4>
        <h4>250SR {props.product.price}</h4>
        </div>

        
    )
}

export default ActionFigureItems;