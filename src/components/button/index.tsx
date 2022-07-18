import React from "react";
import style from "./Button.module.scss";

//tipagem é feita dentro de um generic, para as classes. A partir do react 18 o children só funciona com ReactNode
class Button extends React.Component<{ children: React.ReactNode }> {
   render() {
      return (
         <button className={style.botao}>
            {this.props.children}
         </button>
      )
   }
}

export default Button;
