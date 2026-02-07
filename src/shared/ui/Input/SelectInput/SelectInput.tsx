import { Field } from "formik";
import css from "./SelectInput.module.css";
import type { SelectInputProps } from "../types";


const SelectInput = ({ label, name, options }: SelectInputProps) => {
  if (!options) {
    return <p>Sorry, you can't use filters at the moment</p>;
  }
  return (
    <div className={css.selectWrap}>
    <label htmlFor={name}>{label}</label>
    <Field as="select" name={name} className={css.selectInput}>
      <option value="" disabled>
        Choose {name}
      </option>
      {options.map(({value, label}, index) => (
        <option className={css.selectOption} key={index} value={value}>
          {label}
        </option>
      ))}
    </Field>
    </div>
    
  );
};

export default SelectInput;
