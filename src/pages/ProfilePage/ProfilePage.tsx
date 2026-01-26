import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useDispatch"
import { useEffect } from "react"
import { getOwnPlants } from "../../redux/plants/operations"

const ProfilePage = () => {
  const {plantType} = useParams()
  const dispatch = useAppDispatch()
useEffect(() => {
  dispatch(getOwnPlants({page: 1, perPage: 2}))
}, [])
  return (
    <div>Profile Page
      {plantType === "own" && <p>Own plants</p> }
      {plantType === "fav" && <p>Fav plants</p> }
    </div>
  )
}

export default ProfilePage
