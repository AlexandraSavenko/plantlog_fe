import { Formik, Form, type FormikHelpers } from "formik";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import css from "./PlantFilters.module.css";
import { resetFilters, setFormFilters } from "../../../../redux/filters/slice";
import type { FilterFormValues } from "../../types";
import SelectInput from "../../../../shared/ui/Input/SelectInput/SelectInput";
import Button from "../../../../shared/ui/Button/Button";
import SearchByNameInput from "../SearchByNameInput/SearchByNameInput";

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
    values: FilterFormValues,
    action: FormikHelpers<FilterFormValues>,
  ) => {
    dispatch(setFormFilters(values));
    action.resetForm();
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };
  return (
    <div className={css.filterWrap}>
      <SearchByNameInput/>
      <Formik
        initialValues={{ origin: "", growthForm: "" }}
        onSubmit={handleSubmitFilters}
      >
        <Form className={css.filterForm}>     
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
