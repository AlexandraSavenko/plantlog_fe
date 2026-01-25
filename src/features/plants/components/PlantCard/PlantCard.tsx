import type { Plant } from '../../types'
import css from './PlantCard.module.css'

const PlantCard = ({plant}: {plant: Plant}) => {
  return (
    <div className={css.plantCard}>
      <img src={plant.photo} alt={plant.name} />
      <p>{plant.name}</p>
    </div>
  )
}

export default PlantCard
