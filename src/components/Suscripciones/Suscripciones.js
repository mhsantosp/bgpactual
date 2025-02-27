import React from "react";
import todos from "../../todos.json";

export default function Suscripciones() {
  const [listTodos, setListTodos] = React.useState(todos);
  
  const listSubs = listTodos.todos.map((todo, i) => {
    return (
      <div className="col-md-4 mb-3" key={todo.id}>
        <div className="card border-primary text-center">
          <div className="card-body">
            <h5 className="card-title">{todo.titulo}</h5>
            <p className="card-text">${todo.montoMinVincualcion}</p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal" data-bs-target={"#staticBackdrop"+[i]}
            >
              {todo.suscriptionState ? "Activa" : "Suscribirce"}
            </button>
            <div className="modal fade" id={"staticBackdrop"+[i]} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{todo.titulo}</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <h3>Tipo de fondo {todo.categoria}</h3>
                    <h4>Monto minimo de siscripción: ${todo.montoMinVincualcion}</h4>
                    <h5>{todo.suscriptionState ?  "Activa" : "Suscribirce"}</h5>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">{todo.suscriptionState ?  "Cancelar" : "Activar"}</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="Suscripciones">
      <div className="container">
        <h1>Suscripciones</h1>
        <div className="row">{listSubs}</div>
      </div>
    </div>
  );
}
