import { useState, useEffect } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import "./App.css";

function App() {
  const getFeedback = () => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback !== null ? JSON.parse(savedFeedback) : reviewsOptions;
  };

  const reviewsOptions = { good: 0, neutral: 0, bad: 0 };
  const [feedbacks, setFeedbacks] = useState(getFeedback);

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbacks(reviewsOptions);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <>
      <Container>
        <Description />
        <Options
          onOptionFeedback={updateFeedback}
          onResetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        <Feedback
          goodFeedback={feedbacks.good}
          neutralFeedback={feedbacks.neutral}
          badFeedback={feedbacks.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
        <Notification totalFeedback={totalFeedback} />
      </Container>
    </>
  );
}

export default App;
