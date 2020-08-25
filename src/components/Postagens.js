import React, { useState, useEffect } from "react";
import PostagemApi from "../api/PostagemApi";

function Postagens() {
  const [postagemLista, setPostagemLista] = useState(undefined);

  useEffect(() => {
    const postagemApi = new PostagemApi();

    var promise = postagemApi.getAll();
    promise.then((_postagens) => {
      setPostagemLista(_postagens);
    });
    return () => {};
  }, []);

  return (
    <>
      {postagemLista &&
        postagemLista.map((p) => (
          <div className="card">
            <div className="card-header">{p.titulo}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{p.texto}</p>
              </blockquote>
            </div>
          </div>
        ))}
    </>
  );
}

export default Postagens;
