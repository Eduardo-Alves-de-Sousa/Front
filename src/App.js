import GlobalStyled from "../src/styles/global";

import Inicio from "./pages/inicial";
//import { AutenticacaoProvider } from "./hooks/autentication";

function App() {
  return (
    <>
      <Inicio></Inicio>
      <GlobalStyled />
    </>
  );
}

export default App;
