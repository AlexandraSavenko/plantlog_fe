import css from "./Button.module.css"
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;

}

const Button: React.FC<ButtonProps> =({label = "submit", type = "submit", ...props}) => {
return (
    <button className={css.button} type={type} {...props}>
      {label}
    </button>
  );
}

export default Button;