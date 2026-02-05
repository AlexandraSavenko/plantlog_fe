import type { FilterFormValues } from "../../features/plants/types";

export interface FilterInitialState extends FilterFormValues{
    id: "";
    favourites: boolean;
}