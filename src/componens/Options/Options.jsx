import css from "./Options.module.css";

const Options = ({ onOptionFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div>
      <button type="button" onClick={() => onOptionFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onOptionFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onOptionFeedback("bad")}>
        Bad
      </button>
      {totalFeedback ? (
        <button type="button" onClick={() => onResetFeedback()}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Options;
