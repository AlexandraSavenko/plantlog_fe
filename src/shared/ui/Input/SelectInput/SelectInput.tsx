import { Field } from "formik";
import css from "./SelectInput.module.css";

interface SelectInputProps {
  name: string;
  options: string[];
}
const SelectInput = ({ name, options }: SelectInputProps) => {
  if (!options) {
    return <p>Sorry, you can't use filters at the moment</p>;
  }
  return (
    <Field as="select" name={name} className={css.selectInput}>
      <option value="" disabled>
        Choose a {name}
      </option>
      {options.map((el, index) => (
        <option className={css.selectOption} key={index} value={el}>
          {el}
        </option>
      ))}
    </Field>
  );
};

export default SelectInput;
