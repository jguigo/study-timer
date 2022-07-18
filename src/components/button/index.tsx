import React from "react";
import style from "./style.module.scss";

//tipagem é feita dentro de um generic, para as classes. A partir do react 18 o children só funciona com ReactNode
class Button extends React.Component<{
   children: React.ReactNode;
   type?: "Button" | "submit" | "reset" | undefined;
}> {
   render() {
      const { type = "button" } = this.props;
      return <button className={style.botao}>{this.props.children}</button>;
   }
}

export default Button;
