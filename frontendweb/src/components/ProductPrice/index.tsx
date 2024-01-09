import { FormarterPrice } from '../../utils/FormartterPrice';
import './style.css';

type Price ={
    price: number;
}

const ProductPrice =({price}: Price) =>{
    return (
        <div className="product-price-container">      
         <span>R$</span>
         <h3>{FormarterPrice(price)}</h3>
        </div>
    );
}

export default ProductPrice;