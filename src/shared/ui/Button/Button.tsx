import css from "./BaseButtonStart.module.css"
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<ButtonProps> =({label = "submit", ...props}) => {
return (
    <button className={css.button} type="submit" {...props}>
      {label}
    </button>
  );
}

export default Button;