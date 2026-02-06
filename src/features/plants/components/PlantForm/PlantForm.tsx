import { type FormikHelpers, useFormik } from "formik";
import TextInput from "../../../../shared/ui/Input/TextInput/TextInput";
import css from "./PlantForm.module.css";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { addPlant } from "../../../../redux/plants/operations";
import { useState } from "react";
import SelectInput from "../../../../shared/ui/Input/SelectInput/SelectInput";
import { GrowthFormList, OriginList } from "../../constants";
import TextAreaInput from "../../../../shared/ui/Input/TextAreaInput/TextAreaInput";

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
  const formik = useFormik({
    initialValues: addPlantInitialValues,
    onSubmit: handleSubmit
  })
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Get the file from the event target
    const file = event.currentTarget.files?.[0]
    if(!file) return;
    // Manually set the Formik field value
    setPreviewImage(URL.createObjectURL(file))
    formik.setFieldValue("photo", file)

  }
  
  return (
      <form onSubmit={formik.handleSubmit}>
        <div className={css.photoBox}>
            <input type="file" name="photo" id="photo" onChange={handleFileChange}/>
          {previewImage ? (
            <img src={previewImage} alt="preview image" />
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
          placeholder="Верба"
        />
        <TextAreaInput
          label="Plants description"
          name="description"
          placeholder="Верба зазвичай має ..."
          rows={4}
        />
        <SelectInput label="Plant origin" name="origin" options={OriginList} />
        <SelectInput
          label="Growth form"
          name="growthForm"
          options={GrowthFormList}
        />
      </form>
  );
};

export default PlantForm;
