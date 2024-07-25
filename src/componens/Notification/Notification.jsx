import css from "./Notification.module.css";

const Notification = ({ totalFeedback }) => {
  return totalFeedback >= 1 ? (
    ""
  ) : (
    <>
      <p>No feedback yet.</p>
    </>
  );
};

export default Notification;
