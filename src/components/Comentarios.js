import React from "react";

function Comentarios({ texto }) {
  return (
    <>
      <div className="card">
        <div className="card-body">{texto}</div>
      </div>
    </>
  );
}

export default Comentarios;
