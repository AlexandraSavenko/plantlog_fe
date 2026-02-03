import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useDispatch"
import { useEffect } from "react"
import { getOwnPlants } from "../../redux/plants/operations"
import { useSelector } from "react-redux"
import { selectOwnPlantList } from "../../redux/plants/selectors"
import PlantList from "../../features/plants/components/PlantList/PlantList"
import css from "./ProfilePage.module.css"

const ProfilePage = () => {
  const {plantType} = useParams()
  const dispatch = useAppDispatch()
  const plants = useSelector(selectOwnPlantList)
useEffect(() => {
  dispatch(getOwnPlants({page: 1, perPage: 2}))
}, [])
  return (
    <div className={css.profilePageWrap}>
      {plantType === "own" && <PlantList plants={plants}/> }
      {plantType === "fav" && <p>Fav plants</p> }
      <button>
        <svg className={css.icon}>
              <use href={"/icons.svg#icon-add-circle"}></use>
            </svg>
      </button>
    </div>
  )
}

export default ProfilePage
