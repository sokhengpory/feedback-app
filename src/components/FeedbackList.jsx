// import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);

  // check if for feedback
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

// FeedbackList.propTypes = {
//   // feedback: PropTypes.array,
//   // more specific define than above
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       review: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
//   handleDelete: PropTypes.func,
// };

export default FeedbackList;
