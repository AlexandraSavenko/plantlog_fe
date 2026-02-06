import css from "./PlantDetailsCard.module.css";
import type { PlantDetails } from "../../types";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { deletePlant } from "../../../../redux/plants/operations";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../../../redux/auth/selectros";

const PlantDetailsCard = ({plant}: {plant: PlantDetails}) => {
  const dispatch = useAppDispatch()
  const isAuth = useSelector(selectIsSignedIn)
  const { _id ,name, description, photo, growthForm, origin } = plant;
  const handleDelete = () => {
    dispatch(deletePlant(_id))
  }
  
  return (
    <div className={css.plantDetailWrap}>
      <img className={css.img} src={photo} alt={name} />
      {
        isAuth && <div className={css.plantDetailMenu}>
        <button onClick={handleDelete}>
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
      }
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{growthForm}</p>
      <p>{origin}</p>
    </div>
  );
};

export default PlantDetailsCard;
