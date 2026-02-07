import css from "./PlantDetailsCard.module.css";
import type { PlantDetails } from "../../models/types";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { deletePlant } from "../../../../redux/plants/operations";
import { useSelector } from "react-redux";
import { selectIsSignedIn } from "../../../../redux/auth/selectros";
import ButtonMini from "../../../../shared/ui/ButtonMini/ButtonMini";

const PlantDetailsCard = ({ plant }: { plant: PlantDetails }) => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsSignedIn);
  const { _id, name, description, photo, growthForm, origin } = plant;
  const handleDelete = () => {
    dispatch(deletePlant(_id));
  };

  return (
    <div className={css.plantDetailWrap}>
      <img className={css.img} src={photo} alt={name} />
      {isAuth && (
        <ul className={css.plantDetailMenu}>
          <li>
            <ButtonMini icon="delete" onClick={handleDelete} />
          </li>
          <li>
            <ButtonMini icon="edit" />
          </li>
          <li>
            <ButtonMini icon="fav" />
          </li>
        </ul>
      )}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{growthForm}</p>
      <p>{origin}</p>
    </div>
  );
};

export default PlantDetailsCard;
