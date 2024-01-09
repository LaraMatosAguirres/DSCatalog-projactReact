import {ReactComponent as Seta} from '../../assets/img/Seta.svg'
import ProductPrice from '../../components/ProductPrice';

import './style.css'

const ProductDatails =() => {
    return (
        <div className=" base-card product-details-container">
            <div className="product-details-card">
                <div className="goback-container">
                    <Seta />
                    <h2>VOLTAR</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src='https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg' />
                        </div>
                        <div className="product-details-content">
                            <h1>Nome do produto</h1>
                            <ProductPrice price={2345.67} />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className='decription-container'>
                            <h2>Descriçãop do produto</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur maxime nostrum accusantium. Officiis ut consequuntur voluptatum placeat eum dolorem, optio quasi? Voluptas porro saepe, maxime quam dicta tenetur magnam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDatails;