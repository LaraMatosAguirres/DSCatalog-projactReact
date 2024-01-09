import { Product } from '../../types/product';
import ProductPrice from '../ProductPrice';
import './style.css';

type Props = {
    product: Product;
}

const ProductCard = ({product}: Props) => {
    return (
        <div className="base-card product-container">
            <div className="product-top-container">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="product-bottom-container">
                <h6>{product.name}</h6>
                <ProductPrice price={product.price} />
            </div>
        </div>

    );
}

export default ProductCard;