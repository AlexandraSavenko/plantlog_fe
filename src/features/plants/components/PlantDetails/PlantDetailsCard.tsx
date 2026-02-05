import React from "react";
import type { PlantDetails } from "../../types";

const PlantDetailsCard = (plant: PlantDetails) => {
  const { name, description, photo, growthForm, origin } = plant;
  return (
    <div>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{growthForm}</p>
      <p>{origin}</p>
    </div>
  );
};

export default PlantDetailsCard;
