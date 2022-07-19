import React, { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import { ITarefa } from "../types/Tarefas";
import style from "./App.module.scss"; //css-modules
function App() {
   const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
   const [selecioando, setSelecionado] = useState<ITarefa>();

   function selecionaTarefa(tarefaSelecionada: ITarefa) {
      setSelecionado(tarefaSelecionada);
      setTarefas((tarefasAnteriores) =>
         tarefasAnteriores.map((tarefa) => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
         }))
      );
   }

   return (
      //a importação funciona como um objeto, como nossa class AppStyle
      <div className={style.AppStyle}>
         <Formulario setTarefas={setTarefas} />
         <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
         <Cronometro />
      </div>
   );
}

export default App;
