// import { TiposBasicos } from './typescript/TiposBasicos';

// import { Usuarios } from "./Componentes/Usuarios";
// import { Login } from "./Componentes/Login";
// import { ContadorConHook } from "./Componentes/ContadorConHook";
// import { Contador } from "./Componentes/Contador";
// import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
// import { Funciones } from './typescript/Funciones';
import { Formulario } from './Componentes/Formulario';

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      <Formulario />
    </div>
  )
}

export default App;