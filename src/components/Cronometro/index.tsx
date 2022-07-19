import style from "./style.module.scss";
import Button from "../Button";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/Tarefas";
import { useEffect, useState } from "react";

interface Props{
   selecionado: ITarefa | undefined
}

function Cronometro({selecionado}: Props) {
   const [tempo, setTempo] = useState<number>();

   useEffect(() => {
      if(selecionado?.tempo){
         setTempo(tempoParaSegundos(selecionado.tempo))
      }
   },[selecionado])

   return (
      <div className={style.cronometro}>
         <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>

         <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
         </div>
         <Button>Começar</Button>
      </div>
   );
}

export default Cronometro;
