import { Route, Switch } from 'react-router-dom';
import { ReactComponent as AuthImg } from '../../../assets/img/auth-Img.svg';

import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Divulgue seus produtos no DS Catalog</h1>
        <p>
          Faça parte do nosso catálogo de divulgação e aumente a venda dos seus
          produtos.
        </p>
        <AuthImg />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <h1>Página de login</h1>
          </Route>
          <Route path="/admin/auth/signup">
            <h1>Página de signup</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>Página de recover</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
