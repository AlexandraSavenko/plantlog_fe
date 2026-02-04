import type { FilterValues } from "../../features/plants/types";

export interface FilterInitialState extends FilterValues{
    favourites: boolean,
}