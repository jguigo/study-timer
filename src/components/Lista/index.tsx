import { ITarefa } from "../../types/Tarefas";
import Item from "./Item";
import style from "./style.module.scss";

function Lista({ tarefas }: { tarefas: ITarefa[] }) {
   return (
      <aside className={style.listaTarefas}>
         <h2> Estudos do dia </h2>
         <ul>
            {/* esse arrow function utiliza "()"ao invés das "{}" */}
            {tarefas.map((item, index) => (
               <Item key={index} {...item} />
            ))}
         </ul>
      </aside>
   );
}

export default Lista;
