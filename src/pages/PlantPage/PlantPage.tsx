import { useEffect } from 'react'
import css from './PlantPage.module.css'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useSelector } from 'react-redux'
import { selectAllPlantList } from '../../redux/plants/selectors'
import PlantList from '../../features/plants/components/PlantList/PlantList'
import { getAllPlants } from '../../redux/plants/operations'

const PlantPage = () => {
  const dispatch = useAppDispatch()
  const plants = useSelector(selectAllPlantList)
  useEffect(() => {
dispatch(getAllPlants({ page: 1, perPage: 4}))
  }, [])
  if(!plants || plants.length === 0){
    return <p>Sorry, there's a problem with data</p>
  }
  return (
    <div className={`${css.plantPage} container`}>
      <PlantList plants={plants}/>
    </div>
  )
}

export default PlantPage;
