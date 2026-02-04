import { Formik, Form, type FormikHelpers } from "formik";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import css from "./PlantFilters.module.css";
import { resetFilters, setQueryFilters } from "../../../../redux/filters/slice";
import type { FilterValues } from "../../types";
import SelectInput from "../../../../shared/ui/Input/SelectInput/SelectInput";
import TextInput from "../../../../shared/ui/Input/TextInput/TextInput";
import Button from "../../../../shared/ui/Button/Button";

const GrowthFormList = [
  "tree",
  "shrub",
  "herb",
  "grass",
  "vine",
  "succulent",
  "fern",
  "moss",
]

const PlantFilters = () => {
  const dispatch = useAppDispatch();
  const handleSubmitFilters = (
    values: FilterValues,
    action: FormikHelpers<FilterValues>,
  ) => {
    dispatch(setQueryFilters(values));
    action.resetForm();
  };

  const handleReset = () => {
    dispatch(resetFilters())
  }
  return (
    <div className={css.filterWrap}>
      <Formik
        initialValues={{ name: "", origin: "", growthForm: "" }}
        onSubmit={handleSubmitFilters}
      >
        <Form>
          <TextInput label="name" name="name" type="text" placeholder="Find a plant by name..." icon="search" />
        <SelectInput name="origin" options={["wild", "cultivated"]} />
        <SelectInput name="growthForm" options={GrowthFormList}/>
        <Button/>
        </Form>
      </Formik>
      <button onClick={handleReset}>Reset Filters</button>
    </div>
  );
};

export default PlantFilters;
