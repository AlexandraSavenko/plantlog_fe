import type { Plant } from "../../features/plants/types";
import type { isError } from "./isError";

export interface GetPlantsResponse {
    plantList: Plant[],
    hasNextPage: boolean,
    hasPrevPage: boolean,
    page: number,
    perPage: number,
    totalItems: number
}
export interface GetPlantsParams {
  type: string;
  page: number;
  perPage: number;
}

export interface PlantsInitialState extends GetPlantsResponse {
  isLoading: boolean;
  isError: isError | null;
}
