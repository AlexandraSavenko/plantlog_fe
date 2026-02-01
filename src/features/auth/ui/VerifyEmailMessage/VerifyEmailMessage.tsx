import { useSearchParams } from 'react-router-dom'
import css from './VerifyEmailMessage.module.css'
import { useAppDispatch } from '../../../../hooks/useDispatch';
import { useEffect } from 'react';

const VerifyEmailMessage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const token = searchParams.get("token")
  useEffect(() => {
    if(token){
      dispatch()
    }
  }, [token])
  return (
    <div className={css.verifyModal}>
      <h3>Verify your email, please</h3>
      <p>We have sent a link to your email</p>
      <p>Didn't get it? Check spam</p>
    </div>
  )
}

export default VerifyEmailMessage
