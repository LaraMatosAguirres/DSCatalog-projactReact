import ProductImg from '../../assets/img/product.png';
import ProductPrice from '../ProductPrice';
import './style.css';

const ProductCard = () => {
    return (
        <div className="base-card product-container">
            <div className="product-top-container">
                <img src={ProductImg} alt="Nome do Produto" />
            </div>
            <div className="product-bottom-container">
                <h6>Nome do produto</h6>
                <ProductPrice />
            </div>
        </div>

    );
}

export default ProductCard;