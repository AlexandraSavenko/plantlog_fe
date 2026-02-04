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
];

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
    dispatch(resetFilters());
  };
  return (
    <div className={css.filterWrap}>
      <Formik
        initialValues={{ name: "", origin: "", growthForm: "" }}
        onSubmit={handleSubmitFilters}
      >
        <Form className={css.filterForm}>
          <TextInput
            label="Find a plant by name."
            name="name"
            type="text"
            placeholder="Plant name..."
            icon="search"
          />
          <SelectInput
            label="Plant origin"
            name="origin"
            options={["wild", "cultivated"]}
          />
          <SelectInput
            label="Growth form"
            name="growthForm"
            options={GrowthFormList}
          />
          <Button label="Submit" />
        </Form>
      </Formik>
      <Button label="Resent filters" type="button" onClick={handleReset} />
    </div>
  );
};

export default PlantFilters;
