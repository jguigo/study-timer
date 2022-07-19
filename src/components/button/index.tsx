import React from "react";
import style from "./style.module.scss";

//tipagem é feita dentro de um generic, para as classes. A partir do react 18 o children só funciona com ReactNode
class Button extends React.Component<{
   children: React.ReactNode;
   type?: "button" | "submit" | "reset" | undefined;
   onClick?: () => void;
}> {
   render() {
      const { type = "button", onClick } = this.props;
      return <button onClick={onClick} type={type} className={style.botao}>{this.props.children}</button>;
   }
}

export default Button;
