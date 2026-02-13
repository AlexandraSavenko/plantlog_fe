export interface Plant {
  _id: string;
  name: string;
  photo: string;
}

export interface PaginationState {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    isFirstPage: boolean;
    isLastPage: boolean;
}
export interface PaginationProps extends PaginationState {
  onPageChange: (newPage: number) => void;
}

export interface PlantListProps {
  plants: Plant[];
  pagination: PaginationState;
  onPageChange: (newPage: number) => void;
}
export interface PlantDetails extends Plant {
  description: string;
  growthForm: string;
  origin: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterFormValues {
  name: string;
  growthForm: string;
  origin: string;
}

export interface AddPlantFormlValues {
  name: string;
  description: string;
  origin: string;
  growthForm: string;
  photo: null;
}
