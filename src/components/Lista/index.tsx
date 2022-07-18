import React from "react";
import Item from "./Item";
import style from "./style.module.scss";

function Lista() {
   const tarefas = [
      {
         tarefa: "React",
         tempo: "02:00:00",
      },
      {
         tarefa: "JavaScript",
         tempo: "01:00:00",
      },
      {
         tarefa: "TypeScript",
         tempo: "03:00:00",
      },
   ];

   return (
      <aside className={style.listaTarefas}>
         <h2> Estudos do dia </h2>
         <ul>
            {/* esse arrow function utiliza "()"ao invés das "{}" */}
            {tarefas.map((item, index) => (
               <Item 

                  key={index} //continua sendo necessário o uso da key!
                  // é possível desestruturar também
                  { ...item } 
               />
            ))}
         </ul>
      </aside>
   );
}

export default Lista;
