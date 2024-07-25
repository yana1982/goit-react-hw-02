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
        <ul>
          <li>Good:{goodFeedback}</li>
          <li>Neutral:{neutralFeedback}</li>
          <li>Bad:{badFeedback}</li>
          <li>Total:{totalFeedback}</li>
          <li>Positive:{positiveFeedback}</li>
        </ul>
      </div>
    )
  );
};

export default Feedback;
