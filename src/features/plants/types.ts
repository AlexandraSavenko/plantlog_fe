export interface Plant {
  _id: string;
  name: string;
  photo: string;
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
