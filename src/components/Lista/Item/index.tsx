import style from "../style.module.scss"


//poderia ser assim também, desestruturando!
// function Item(props: { tarefa: string, tempo: string }) {
//    const { tarefa, tempo } = props;
function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
   return (
      // key é uma atributo do react, para que ele não fique "perdido" quando interar uma lista
      <li className={style.item}>
         <h3>{tarefa}</h3>
         <span>{tempo}</span>
      </li>
   );
}

export default Item;
