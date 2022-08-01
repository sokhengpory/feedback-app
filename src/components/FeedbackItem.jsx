import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa'; // import icon from "react-icons"

import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* to pass argument to the "onClick" event, we need to use arrow function and pass the argument to the function */}
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.review}</div>
    </Card>
  );
}

export default FeedbackItem;
