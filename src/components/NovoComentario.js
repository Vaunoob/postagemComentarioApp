import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NovoComentario({ comentarios, funcao }) {
  const [comentario, setComentario] = useState("");
  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    funcao(comentarios, comentario);
    setComentario("");
    history.push("/postagens");
  }

  function comentarioHandler(event) {
    setComentario(event.target.value);
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="input-group mb-3">
        <input
          type="text"
          name="comentario"
          value={comentario}
          onChange={comentarioHandler}
          className="form-control"
          placeholder="Novo Comentário"
          aria-label="Novo Comentário"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn btn-primary"
            type="submit"
            id="button-addon2"
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  );
}

export default NovoComentario;
