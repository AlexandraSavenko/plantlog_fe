import type { Plant } from '../../types'
import PlantCard from '../PlantCard/PlantCard'
import css from "./PlantList.module.css"

interface PlantListProps {
    plants: Plant[]
}
const PlantList = ({plants}: PlantListProps) => {
  return (
    <ul className={css.plantList}>
      {
        plants.map(el => <li>{
            <PlantCard plant={el}/>
            }</li>)
      }
    </ul>
  )
}

export default PlantList
