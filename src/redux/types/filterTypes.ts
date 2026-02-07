import type { FilterFormValues } from "../../features/plants/models/types";

export interface FilterInitialState extends FilterFormValues {
  favourites: boolean;
}
