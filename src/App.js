import React from "react";
import Postagens from "./components/Postagens";
import Postagem from "./components/Postagem";
import { Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <>
      <Cabecalho />
      <div className="container">
        <Route path="/" exact component={Postagens}></Route>
        <Route path="/Postagens" exact component={Postagens}></Route>
        <Route path="/Postagem" component={Postagem}></Route>
      </div>
    </>
  );
}

export default App;
