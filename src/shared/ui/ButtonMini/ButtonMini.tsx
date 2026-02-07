import type { ButtonHTMLAttributes } from 'react'
import css from './ButtonMini.module.css'

interface ButtonMiniProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: string
}
const ButtonMini: React.FC<ButtonMiniProps> = ({icon, ...props}) => {
  return (
    <div className={`${css.buttonMiniWrap} ${icon}`}>
      <button type='button' {...props}>
        <svg className={css.icon}>
                <use href={`/icons.svg#icon-${icon}`}></use>
              </svg>
      </button>
    </div>
  )
}

export default ButtonMini;
