import css from "./Notification.module.css";

const Notification = ({ totalFeedback }) => {
  return totalFeedback >= 1 ? (
    ""
  ) : (
    <>
      <p className={css.text}>No feedback yet.</p>
    </>
  );
};

export default Notification;
