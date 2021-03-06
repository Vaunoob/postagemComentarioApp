import React, { useState, useEffect } from "react";
import PostagemApi from "../api/PostagemApi";
import Comentarios from "./Comentarios";
import NovoComentario from "./NovoComentario";

function Postagens() {
  const [postagemLista, setPostagemLista] = useState(undefined);
  /*const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);*/

  useEffect(() => {
    setPostagemLista(PostagemApi.getAll());
    return () => {};
  }, []);

  function novoComentario(comentarios, comentario) {
    comentarios.push(comentario);
  }

  return (
    <>
      {postagemLista &&
        postagemLista.map((p) => (
          <div key={p.id} className="card">
            <div className="card-header">{p.titulo}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{p.texto}</p>
              </blockquote>
              {p.comentarios &&
                p.comentarios.map((q, index) => (
                  <Comentarios key={index} texto={q} />
                ))}
              <NovoComentario
                comentarios={p.comentarios}
                funcao={novoComentario}
              />
            </div>
            {/*<div display="flex">
              <label htmlFor="like">Like</label>
              <input
                type="number"
                name="like"
                value={p.like}
                onChange={likeHandler}
              />
              <label htmlFor="like">Dislike</label>
              <input
                type="number"
                name="dislike"
                value={p.dislike}
                onChange={dislikeHandler}
              />
                </div>*/}
          </div>
        ))}
    </>
  );
}

export default Postagens;
