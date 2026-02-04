import css from "./NoDataImage.module.css";

const NoDataImage = ({ messages }: { messages: string[] }) => {
  return (
    <div className={css.noDataWrap}>
        <img src="/noPlantsBG.png" alt="there are no plants here" />
      <div className={css.messageWrap}>
        {messages.map((el, index) => (
          <p key={index}>{el}</p>
        ))}
      </div>
    </div>
  );
};

export default NoDataImage;
