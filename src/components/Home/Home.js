import React from "react";
// import PropTypes from "prop-types";
import styles from "./Home.css";

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <div className="home container">
      <p className="text-body-secondary">
        El Fondo Voluntario de Pensión (FPV) de BTG Pactual es un vehículo de
        inversión a través del cual se pueden obtener óptimos rendimientos de
        acuerdo con las políticas de inversión previstas, cumplir con las metas de
        ahorro o de pensión obligatoria y obtener beneficios tributarios, previo
        cumplimiento de los requisitos de ley. Por su parte, los Fondos de
        Inversión Colectiva (FIC’s) son opciones de inversión que agrupan un
        número de inversionistas, gestionadas por un equipo experto que, a través
        de la selección de activos globales y locales, estructura fondos con
        objetivos y plazos definidos con el fin común de tener retornos de capital
        y diversificación del riesgo. Debido a lo anterior, BTG Pactual observa
        que es de suma importancia crear una plataforma mediante la cual un
        cliente pueda manejar los fondos a los que está o le gustaría estar
        inscrito y no tenga que contactarse siempre con su comercial. Se desea que
        la plataforma sea intuitiva y con un diseño amigable.
      </p>
    </div>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
