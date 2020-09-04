import React, { useState, useEffect } from "react";
import PostagemApi from "../api/PostagemApi";
import Comentarios from "./Comentarios";
import NovoComentario from "./NovoComentario";

function Postagens() {
  const [postagemLista, setPostagemLista] = useState(undefined);

  useEffect(() => {
    setPostagemLista(PostagemApi.getAll());
    return () => {};
  }, []);

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
              <NovoComentario />
            </div>
          </div>
        ))}
    </>
  );
}

export default Postagens;
