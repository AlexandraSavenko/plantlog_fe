import { useEffect } from 'react'
import css from './PlantPage.module.css'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useSelector } from 'react-redux'
import PlantList from '../../features/plants/components/PlantList/PlantList'
import { getAllPlants } from '../../redux/plants/operations'
import NoDataImage from '../../shared/ui/NoDataImage/NoDataImage'
import { makeSelectPagination, selectPlants } from '../../redux/plants/selectors'
import { setPage } from '../../redux/plants/slice'

const PlantPage = () => {
  const dispatch = useAppDispatch()
  const scope = "all"
  const plants = useSelector(selectPlants("all"));
  const pagination = useSelector(makeSelectPagination("all"))
  const handlePageChange = (newPage: number) => {
dispatch(setPage({scope, page: newPage}))
  }
  useEffect(() => {
dispatch(getAllPlants({ page: 1, perPage: 4}))
  }, [])
  if(!plants || plants.length === 0){
   <NoDataImage messages={["Sorry, there's a problem with data"]}/>
  }
  return (
    <div className={`${css.plantPage} container`}>
      <PlantList plants={plants} pagination={pagination} onPageChange={handlePageChange}/>
    </div>
  )
}

export default PlantPage;
