import React from "react";

function Postagem() {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="titulo">Título</label>
          <input class="form-control"></input>
        </div>
        <div className="form-group">
          <label for="texto">Texto</label>
          <input class="form-control"></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Adicionar
        </button>
      </form>
    </>
  );
}

export default Postagem;
