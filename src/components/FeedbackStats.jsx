import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // calculate average rating
  let averageRating =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // show only 1 decimal
  // use regex to remove the ".0"
  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
