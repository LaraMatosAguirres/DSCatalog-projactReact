import { Link } from 'react-router-dom';
import '../../App.css';
import ProductCard from '../../components/productCard';
import { Product } from '../../types/product';

import './styles.css';
import Pagination from '../../components/Pagination';
import { useEffect, useState } from 'react';
import { SpringPage } from '../../types/vendor/spring.';
import { AxiosParams } from '../../types/vendor/axios';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import CardLoader from './Loaders';

const Catalog = () => {
  
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>{

    const params : AxiosParams = {
      method: `GET`,
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12
      },
    }

    setIsLoading(true);
    axios(params)
      .then(reponse => {
        setPage(reponse.data);
      })
      .finally(() => { setIsLoading(false)});
  }, []);

  return (
    <div className="container my-4 catalog-container">

        <div className="row catalog-tittle-container">
            <h1>Catálogo de produtos</h1>
        </div>

      <div className="row">
        {isLoading ? <CardLoader/> : (page?.content.map((product) =>(
            <div className="col-sm-6 col-lg-4 col-xl-3">
            <Link to="/products/1">
              <ProductCard product={product} />
            </Link>
        </div>
        )))}
        </div>

      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
