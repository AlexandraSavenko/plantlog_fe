import { ErrorMessage, Field } from "formik";
import css from "./TextAreaInput.module.css";
import type React from "react";
import type { TextAreaProps } from "../types";

const TextAreaInput: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className={css.textareaWrap}>
      <label htmlFor={name}>{label}</label>
      <Field
      className={css.textarea}
        id={name}
        name={name}
        as="textarea"
        rows={rows}
        placeholder={placeholder}
      />
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

export default TextAreaInput;
