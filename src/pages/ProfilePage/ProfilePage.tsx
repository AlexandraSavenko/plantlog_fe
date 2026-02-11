import { Link, useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useDispatch"
import { useEffect } from "react"
import { getOwnPlants } from "../../redux/plants/operations"
import { useSelector } from "react-redux"
import { makeSelectPagination, selectPlants } from "../../redux/plants/selectors"
import PlantList from "../../features/plants/components/PlantList/PlantList"
import css from "./ProfilePage.module.css"

const ProfilePage = () => {
  const {plantType} = useParams()
  const dispatch = useAppDispatch()
  const plants = useSelector(selectPlants("own"))
  const pagination = useSelector(makeSelectPagination("own"))
useEffect(() => {
  dispatch(getOwnPlants({page: 1, perPage: 4}))
}, [])
  return (
    <div className={css.profilePageWrap}>
      {plantType === "own" && <PlantList plants={plants} pagination={pagination}/> }
      {plantType === "fav" && <p>Fav plants</p> }
      <Link className={css.addLink} to={"/add-plant"}>+</Link>
    </div>
  )
}

export default ProfilePage
