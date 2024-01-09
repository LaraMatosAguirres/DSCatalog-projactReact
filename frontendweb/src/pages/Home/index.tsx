import { Link } from 'react-router-dom';
import { ReactComponent as MainImage} from '../../assets/img/main-img.svg';
import ButtonIcon from '../../components/ButtonIcon';
import './styles.css';

const Home = () =>{
    return (
      <div className="home-container">
        <div className="base-card home-card">
            <div className="content-home-container">
              <div>
                <h1>Conheça o melhor catálogo de produtos</h1>
                <p>Ajudaremos você a encontrar os melhores produtos disponíveis no mercado.</p>
                </div>
                <div>
                  <Link to="/products">
                  <ButtonIcon text='Inicie a sua busca agora' />
                  </Link>
                </div>
            </div>
            <div className="home-img-container">
                <MainImage />
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;