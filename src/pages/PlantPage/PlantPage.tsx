import { useEffect } from 'react'
import css from './PlantPage.module.css'
import { useAppDispatch } from '../../hooks/useDispatch'
import { useSelector } from 'react-redux'
import PlantList from '../../features/plants/components/PlantList/PlantList'
import { getAllPlants } from '../../redux/plants/operations'
import NoDataImage from '../../shared/ui/NoDataImage/NoDataImage'
import { makeSelectPagination, selectIsLoading, selectPlants } from '../../redux/plants/selectors'
import { setPage } from '../../redux/plants/slice';



const PlantPage = () => {
  const dispatch = useAppDispatch()
  const isLoading = useSelector(selectIsLoading)
  const scope = "all"
  const plants = useSelector(selectPlants("all"));
  const pagination = useSelector(makeSelectPagination("all"))
  const handlePageChange = (newPage: number) => {
    console.log("handlePageChange")
dispatch(setPage({scope, page: newPage}))
  }
  useEffect(() => {console.log(pagination.page)}, [pagination])
  useEffect(() => {
dispatch(getAllPlants({ page: pagination.page, perPage: 4}))
  }, [pagination.page])
  if(!plants || plants.length === 0){
   <NoDataImage messages={["Sorry, there's a problem with data"]}/>
  }
  return (
    <div className={`${css.plantPage} container`}>
      <PlantList plants={plants} pagination={pagination} onPageChange={handlePageChange}/>
    {isLoading && <p>Loading...</p> }
    </div>
  )
}

export default PlantPage;
