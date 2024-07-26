import css from "./Feedback.module.css";
const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    totalFeedback >= 1 && (
      <div>
        <ul className={css.list}>
          <li className={css.item}>Good:{goodFeedback}</li>
          <li className={css.item}>Neutral:{neutralFeedback}</li>
          <li className={css.item}>Bad:{badFeedback}</li>
          <li className={css.item}>Total:{totalFeedback}</li>
          <li className={css.item}>Positive:{positiveFeedback}</li>
        </ul>
      </div>
    )
  );
};

export default Feedback;
