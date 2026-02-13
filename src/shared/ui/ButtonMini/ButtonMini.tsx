import type { ButtonHTMLAttributes } from "react";
import css from "./ButtonMini.module.css";

interface ButtonMiniProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  label?: string | number;
  icon?: string;
}
const ButtonMini: React.FC<ButtonMiniProps> = ({
  isActive,
  label,
  icon,
  ...props
}) => {
  return (
    <div className={`${css.buttonMiniWrap}`}>
      <button className={`${isActive ? css.isActive : css.notActive}`} type="button" {...props}>
        {label && label}
        {icon && (
          <svg className={css.icon}>
            <use href={`/icons.svg#icon-${icon}`}></use>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ButtonMini;
