export const ORIGINS = ["wild", "cultivated"] as const;
export const GROWTHFORM = [
  "tree",
  "shrub",
  "herb",
  "grass",
  "vine",
  "succulent",
  "fern",
  "moss",
] as const;
export type Origin = typeof ORIGINS[number];
export type GrowthForm = typeof GROWTHFORM[number];

export const originFormOptions = ORIGINS.map(el => ({
  label: el, value: el
}))
export const originFilterOptions = [
  {label: "all", value: "all"},
  ...ORIGINS.map(el => ({label: el, value: el}))
]

export const growthFormFormOptions = GROWTHFORM.map(el => ({
  label: el, value: el
}));

export const growthFormFilterOptions = [{label: "all", value: "all"}, ...GROWTHFORM.map(el => ({
  label: el, value: el
}))] 


export const addPlantInitialValues = {
  name: "",
  description: "",
  origin: "",
  growthForm: "",
  photo: null,
};