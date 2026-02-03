import type { Plant } from "../../types";
import PlantCard from "../PlantCard/PlantCard";
import css from "./PlantList.module.css";

interface PlantListProps {
  plants: Plant[];
}
const PlantList = ({ plants }: PlantListProps) => {
  if (plants.length === 0) {
    return (
      <div className={css.noPlantsWrap}>
        <p>You have no plants yet.</p>
        <p>Press the button to add your first plant</p>
      </div>
    );
  }
  return (
    <ul className={css.plantList}>
      {plants.map((el) => (
        <li key={el._id}>{<PlantCard plant={el} />}</li>
      ))}
    </ul>
  );
};

export default PlantList;
