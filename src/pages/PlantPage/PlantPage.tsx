import { useEffect } from 'react'
import css from './PlantPage.module.css'
import { getPlants } from '../../redux/plants/operations'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useSelector } from 'react-redux'
import { selectPlantList } from '../../redux/plants/selectors'
import PlantList from '../../features/plants/components/PlantList/PlantList'

const PlantPage = () => {
  const dispatch = useAppDispatch()
  const plants = useSelector(selectPlantList)
  useEffect(() => {
dispatch(getPlants({type: "all", page: 1, perPage: 4}))
  }, [])
  return (
    <div className={css.plantPage}>
      PlantList will be here
      <PlantList plants={plants}/>
    </div>
  )
}

export default PlantPage
