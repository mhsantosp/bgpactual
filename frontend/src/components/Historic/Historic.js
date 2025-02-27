import React from "react";
import styles from "./Historic.module.css";
import todos from "../../todos.json";

const Historic = () => (
  <div className={"container " + styles.Historic} data-testid="Historic">
    <h1>Historico de Suscripciones</h1>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Fecha</th>
          <th scope="col">Nombre del fondo</th>
          <th scope="col">Monto de suscripción</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {todos.historico.map((todo, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i+1}</th>
              <td>{todo.fecha}</td>
              <td>{todo.titulo}</td>
              <td>{todo.monto}</td>
              <td>{todo.suscriptionState ? 'Activo': 'Cancelado'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

Historic.propTypes = {};

Historic.defaultProps = {};

export default Historic;
