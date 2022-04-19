import PropTypes from 'prop-types';

function FeedbackItem({ item }) {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
