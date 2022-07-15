import React from "react";

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
      <aside>
         <h2> Estudos do dia </h2>
         <ul>
            {tarefas.map((item, index) => ( //esse arrow function utiliza "()"ao invés das "{}"
               // key é uma atributo do react, para que ele não fique "perdido" quando interar uma lista
               <li key={index}>
                  <h3>{item.tarefa}</h3>
                  <span>{item.tempo}</span>
               </li>
            ))}
         </ul>
      </aside>
   );
}

export default Lista;
