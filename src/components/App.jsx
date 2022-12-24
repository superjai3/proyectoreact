//import { Children, useState } from 'react' 4.5k (gzipped: 2k)
//import ComponentComponets from "./componets/ComponenteContenedor/ComponenteContenedor";
//import ItemLoQueSea from ".components/container/ItemListContainer/ItemListContainer";
//import reactLogo from "./assent/react.svg";

import { ItemListContainer } from "./container/ItemListContainer/ItemListContainer";
import NavBar from "./componets/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo={"En Construcción..."} />
    </>
  );
}

export default App;
