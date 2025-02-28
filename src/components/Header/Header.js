import React from 'react';
import styles from './Header.css';
import imgBtgPactual from '../../assets/btgPactual.png';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className={styles.Header} data-testid="Header">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand logo" href="https://www.linkedin.com/feed/">
          <img
            className="logoBtgPactual"
            src={imgBtgPactual}
            alt="BtgPactual"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bgpactualMenu" aria-controls="bgpactualMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bgpactualMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 menu">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/bgpactual" id="inicio">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/suscripciones" id="suscripciones">Suscripciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/historico" id="historico">Histórico</NavLink>
            </li>
          </ul>
          <div className="input-group input-group-sm saldoActual">
            <span className="input-group-text">Saldo $</span>
            <input type="text" className="form-control" value="1000" aria-label="Valor en pesos" disabled readOnly />
          </div>
        </div>
      </div>
    </nav>    
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
