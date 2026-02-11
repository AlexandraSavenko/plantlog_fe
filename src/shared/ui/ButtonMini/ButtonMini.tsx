import type { ButtonHTMLAttributes } from 'react'
import css from './ButtonMini.module.css'

interface ButtonMiniProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  label?: string | number
    icon?: string
}
const ButtonMini: React.FC<ButtonMiniProps> = ({label, icon, ...props}) => {
  return (
    <div className={`${css.buttonMiniWrap} ${icon}`}>
      <button type='button' {...props}>
        {label && label}
        {
          icon && <svg className={css.icon}>
                <use href={`/icons.svg#icon-${icon}`}></use>
              </svg>
        }
      </button>
    </div>
  )
}

export default ButtonMini;
