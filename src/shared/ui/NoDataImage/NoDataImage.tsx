import css from "./NoDataImage.module.css";

const NoDataImage = ({ messages }: { messages: string[] }) => {
  return (
    <div className={css.noDataWrap}>
        
      <div className={css.messageWrap}>
        {messages.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>

      <img className={css.viny} src="/VinusFlytrap.png" alt="vinus flytrap" />
    </div>
  );
};

export default NoDataImage;
