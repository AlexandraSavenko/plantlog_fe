import { Field } from "formik";
import css from "./SelectInput.module.css";

interface SelectInputProps {
  label: string,
  name: string;
  options: string[];
}
const SelectInput = ({ label, name, options }: SelectInputProps) => {
  if (!options) {
    return <p>Sorry, you can't use filters at the moment</p>;
  }
  return (
    <div className={css.selectWrap}>
    <label htmlFor={name}>{label}</label>
    <Field as="select" name={name} className={css.selectInput}>
      <option value="all">
        Choose a {name}
      </option>
      {options.map((el, index) => (
        <option className={css.selectOption} key={index} value={el}>
          {el}
        </option>
      ))}
    </Field>
    </div>
    
  );
};

export default SelectInput;
