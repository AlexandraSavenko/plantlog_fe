import { ErrorMessage, Field } from "formik";
import css from "./TextInput.module.css";
import type { TextInputProps } from "./types";


const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "text",
  placeholder = "input",
  icon,
}) => {
  return (
    <div className={css.inputBox}>
      <label htmlFor={name}>{label}</label>
      <div className={css.inputWrap}>
        <Field
          className={css.input}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
        />
        <svg className={css.icon}>
          <use href={`/icons.svg#${icon}`}></use>
        </svg>
      </div>
      <div className={css.error}>
              <ErrorMessage className={css.errorMessage} name={name} component="span" />
      </div>
    </div>
  );
};

export default TextInput;