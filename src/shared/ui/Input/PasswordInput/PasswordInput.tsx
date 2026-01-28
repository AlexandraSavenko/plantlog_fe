import type React from "react";
import css from "../TextInput/TextInput.module.css";
import type { TextInputProps } from "../TextInput/types";
import { ErrorMessage, Field } from "formik";
import { useState } from "react";

const PasswordInput: React.FC<TextInputProps> = ({
  label,
  name,
  type = "password",
  placeholder = "*********",
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={css.inputBox}>
      <label htmlFor={name}>{label}</label>
      <div className={css.inputWrap}>
        <Field
          className={css.input}
          id={name}
          type={visible ? type : "text"}
          name={name}
          placeholder={placeholder}
        />
        <span onClick={() => setVisible(!visible)}>
          <svg className={css.icon}>
            <use href={`/icons.svg#${visible ? "icon-eye-open" : "icon-eye-closed"}`}></use>
          </svg>
        </span>
      </div>
      <div className={css.error}>
        <ErrorMessage
          className={css.errorMessage}
          name={name}
          component="span"
        />
      </div>
    </div>
  );
};

export default PasswordInput;
