import * as Yup from "yup";
import { GROWTHFORM, ORIGINS } from "./constants";
export const addPlantSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    origin: Yup.string().oneOf(Object.values(ORIGINS)).required(),
    growthForm: Yup.string().oneOf(Object.values(GROWTHFORM)). required(),
    photo: Yup.mixed().nullable()
})