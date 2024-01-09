import './style.css';
import {ReactComponent as Seta} from '../../assets/img/Seta.svg';

const ButtonIcon = () => {
  return (
    <div className="btn-container">
        <button className="btn bg-primary">
          <h6> INICIE A SUA BUSCA AGORA</h6>
        </button>
      <div className="btn-icon-container">
        <Seta />
      </div>
    </div>
  );
};

export default ButtonIcon;
