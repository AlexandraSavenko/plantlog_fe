import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useDispatch"
import { useEffect } from "react"

const ProfilePage = () => {
  const {plantType} = useParams()
  const dispatch = useAppDispatch()
useEffect(() => {
  
}, [])
  return (
    <div>Profile Page
      {plantType === "own" && <p>Own plants</p> }
      {plantType === "fav" && <p>Fav plants</p> }
    </div>
  )
}

export default ProfilePage
