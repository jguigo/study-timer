import React from "react";
import style from './style.module.scss'

function Relogio() {
   return (
      <>
         <span className={style.relogioNumero}>0</span>
         <span className={style.relogioNumero}>0</span>
         <span className={style.relogioDivisao}>:</span>
         <span className={style.relogioNumero}>0</span>
         <span className={style.relogioNumero}>0</span>
      </>
   );
}

export default Relogio;
