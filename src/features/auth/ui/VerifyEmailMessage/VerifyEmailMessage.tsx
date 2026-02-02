import css from './VerifyEmailMessage.module.css'

const VerifyEmailMessage = () => {
  
  return (
    <div className={css.verifyModal}>
      <h3>Verify your email, please</h3>
      <p>We have sent a link to your email</p>
      <p>Didn't get it? Check spam</p>
    </div>
  )
}

export default VerifyEmailMessage
