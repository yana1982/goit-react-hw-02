import css from "./Feedback.module.css";
const Feedback = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <ul>
        <li>
          <p>Good:{goodFeedback}</p>
        </li>
        <li>
          <p>Neutral:{neutralFeedback}</p>
        </li>
        <li>
          <p>Bad:{badFeedback}</p>
        </li>
        <li>
          <p>Total:{totalFeedback}</p>
        </li>
        <li>
          <p>Positive:{positiveFeedback}</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
