import { useEffect } from 'react'
import css from './PlantsPage.module.css'
import { getAllPlants } from '../../redux/plants/operations'
import { useAppDispatch } from '../../hooks/useDispatch'

const PlantsPage = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
dispatch(getAllPlants({type: "all", page: 1, perPage: 4}))
  }, [])
  return (
    <div className={css.plantPage}>
      PlantList will be here
    </div>
  )
}

export default PlantsPage
