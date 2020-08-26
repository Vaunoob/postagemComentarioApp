import React from "react";

function NovoComentario() {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Novo Comentário"
          aria-label="Novo Comentário"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn btn-primary"
            type="button"
            id="button-addon2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </>
  );
}

export default NovoComentario;
