import css from "./Options.module.css";

const Options = ({ onOptionFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button
        className={css.btnOptions}
        type="button"
        onClick={() => onOptionFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.btnOptions}
        type="button"
        onClick={() => onOptionFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.btnOptions}
        type="button"
        onClick={() => onOptionFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback ? (
        <button
          className={css.btnOptions}
          type="button"
          onClick={() => onResetFeedback()}
        >
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
