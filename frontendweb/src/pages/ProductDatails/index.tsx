import { Link, useParams } from 'react-router-dom';
import { ReactComponent as Seta } from '../../assets/img/Seta.svg';
import ProductPrice from '../../components/ProductPrice';

import './style.css';
import { Product } from '../../types/product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import ProductInfoLoader from './ProductInfoLoader';
import ProductDetailsLoader from './ProductDetailsLoader';

type UrlParams = {
  productId: string;
};

const ProductDatails = () => {
  const { productId } = useParams<UrlParams>();

  const [product, setProduct] = useState<Product>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productId]);

  return (
    <div className=" base-card product-details-container">
      <div className="product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <Seta />
            <h2>VOLTAR</h2>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <ProductInfoLoader />
            ) : (
              <>
                <div className="img-container">
                  <img src={product?.imgUrl} alt={product?.name} />
                </div>
                <div className="product-details-content">
                  <h1>Nome do produto</h1>
                  {product && <ProductPrice price={product?.price} />}
                </div>
              </>
            )}
          </div>
          <div className="col-xl-6">
            {isLoading ? (
              <ProductDetailsLoader />
            ) : (
              <div className="decription-container">
                <h2>Descriçãop do produto</h2>
                <p>{product?.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDatails;
