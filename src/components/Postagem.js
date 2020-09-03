import React, { useState } from "react";
import PostagemApi from "../api/PostagemApi";
import { useHistory } from "react-router-dom";

function Postagem() {
  const [postagem, setPostagem] = useState({
    id: 0,
    titulo: "",
    texto: "",
    like: 0,
    dislike: 0,
    comentarios: undefined,
  });

  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();
    PostagemApi.add(postagem);
    history.push("/postagens");
  }

  function postagemHandler(event) {
    setPostagem({ ...postagem, [event.target.name]: event.target.value });
  }

  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          name="titulo"
          className="form-control"
          value={postagem.titulo}
          onChange={postagemHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="texto">Texto</label>
        <input
          name="texto"
          className="form-control"
          value={postagem.texto}
          onChange={postagemHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Adicionar
      </button>
    </form>
  );
}

export default Postagem;
