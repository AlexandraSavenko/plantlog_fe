import { useState } from "react";
import NoDataImage from "../../../../shared/ui/NoDataImage/NoDataImage";
import type { PaginationProps, Plant } from "../../models/types";
import PlantCard from "../PlantCard/PlantCard";
import css from "./PlantList.module.css";
import Modal from "../../../../shared/ui/Modal/Modal";
import { useAppDispatch } from "../../../../hooks/useDispatch";
import { getPlantDetails } from "../../../../redux/plants/operations";
import { useSelector } from "react-redux";
import { selectPlantDetails } from "../../../../redux/plants/selectors";
import PlantDetailsCard from "../PlantDetails/PlantDetailsCard";
import Pagination from "../../../../shared/ui/Pagination/Pagination";

interface PlantListProps {
  plants: Plant[];
  pagination: PaginationProps
}
const PlantList = ({ plants, pagination }: PlantListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const plantDetailsInfo = useSelector(selectPlantDetails);
  const dispatch = useAppDispatch();
  if (plants.length === 0) {
    return (
      <NoDataImage
        messages={[
          "You have no plants yet.",
          "Press the button to add your first plant",
        ]}
      />
    );
  }

  const handleClick = (id: string) => {
    dispatch(getPlantDetails(id));
    setIsModalOpen(true);
  };
  return (
    <div>
      <ul className={css.plantList}>
        {plants.map((el) => (
          <li key={el._id} onClick={() => handleClick(el._id)}>
            {<PlantCard plant={el} />}
          </li>
        ))}
      </ul>
      {pagination.page > 1 && <Pagination {...pagination}/>}
      {isModalOpen && plantDetailsInfo && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {<PlantDetailsCard plant={plantDetailsInfo} />}
        </Modal>
      )}
    </div>
  );
};

export default PlantList;
