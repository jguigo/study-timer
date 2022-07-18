import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from "./App.module.scss"; //css-modules
function App() {
   return (
      //a importação funciona como um objeto, como nossa class AppStyle
      <div className={style.AppStyle}> 
         <Formulario />
         <Lista />
         <Cronometro />
      </div>
   );
}

export default App;
