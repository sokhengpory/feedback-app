import { FaTimes } from 'react-icons/fa'; // import icon from "react-icons"
import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      {/* to pass argument to the "onClick" event, we need to use arrow function and pass the argument to the function */}
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default FeedbackItem;
