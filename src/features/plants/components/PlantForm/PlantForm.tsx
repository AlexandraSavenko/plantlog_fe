import { type FormikHelpers, Formik, Form } from "formik";
import TextInput from "../../../../shared/ui/Input/TextInput/TextInput";
import css from "./PlantForm.module.css";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { addPlant } from "../../../../redux/plants/operations";
import { useEffect, useState } from "react";
import SelectInput from "../../../../shared/ui/Input/SelectInput/SelectInput";
import { GrowthFormList, OriginList } from "../../constants";
import TextAreaInput from "../../../../shared/ui/Input/TextAreaInput/TextAreaInput";
import Button from "../../../../shared/ui/Button/Button";

export interface AddPlantFormlValues {
  name: string;
  description: string;
  origin: string;
  growthForm: string;
  photo: null;
}
const addPlantInitialValues = {
  name: "",
  description: "",
  origin: "",
  growthForm: "",
  photo: null,
};

const PlantForm = () => {
  const dispatch = useAppDispatch();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const handleSubmit = async (
    values: AddPlantFormlValues,
    actions: FormikHelpers<AddPlantFormlValues>,
  ): Promise<void> => {
    await dispatch(addPlant(values));
    actions.resetForm();
    setPreviewImage(null);
  };
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: unknown) => void,
  ) => {
    // Get the file from the event target
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    // Manually set the Formik field value
    setPreviewImage(URL.createObjectURL(file));
    setFieldValue("photo", file);
  };
  //main purpose in case user changes image, but also cleans up browser mamory and prevents memory leaks
  useEffect(() => {
    return () => {
      if (previewImage) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);
  //sinse formik performs submission instead of browser, there's no need to set encType="multipart/form-data" on submition, axios will handle that
  return (
    <Formik initialValues={addPlantInitialValues} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form>
          <div className={css.photoBox}>
            <input
              type="file"
              name="photo"
              id="photo"
              onChange={(event) => handleFileChange(event, setFieldValue)}
            />
            {previewImage ? (
              <img className={css.img} src={previewImage} alt="preview image" />
            ) : (
              <svg className={css.icon}>
                <use href={`/icons.svg#icon-camera`}></use>
              </svg>
            )}
          </div>
          <TextInput
            label="Plants name"
            name="name"
            type="text"
            placeholder="Напиши назву рослини..."
          />
          <TextAreaInput
            label="Plants description"
            name="description"
            placeholder="Напиши все, що ти знаєш про рослину"
            rows={4}
          />
          <SelectInput
            label="Plant origin"
            name="origin"
            options={OriginList}
          />
          <SelectInput
            label="Growth form"
            name="growthForm"
            options={GrowthFormList}
          />
          <Button label="Add plant" />
        </Form>
      )}
    </Formik>
  );
};

export default PlantForm;
