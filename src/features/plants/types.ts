export interface Plant {
    _id: string,
    name: string,
    description: string,
    photo: string,
    growthForm: string,
    origin: string,
    userId: string,
    createdAt: string,
    updatedAt: string
}

export interface FilterFormValues {
    name: string,
    growthForm: string,
    origin: string,
}