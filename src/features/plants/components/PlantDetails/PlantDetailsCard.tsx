import css from "./PlantDetailsCard.module.css";
import type { PlantDetails } from "../../types";

const PlantDetailsCard = ({plant}: {plant: PlantDetails}) => {
  const { name, description, photo, growthForm, origin } = plant;
  return (
    <div className={css.plantDetailWrap}>
      <img className={css.img} src={photo} alt={name} />
      <div className={css.plantDetailMenu}>
        <button>
          <svg className={css.icon}>
          <use href={`/icons.svg#icon-bin`}></use>
        </svg>
        </button>
        <button>
          <svg className={css.icon}>
          <use href={`/icons.svg#icon-pencil`}></use>
        </svg>
        </button>
        <button>
          <svg className={css.icon}>
          <use href={`/icons.svg#icon-star-empty`}></use>
        </svg>
        </button>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{growthForm}</p>
      <p>{origin}</p>
    </div>
  );
};

export default PlantDetailsCard;
