import { useState } from 'react';

function FeedbackItem() {
  // manage app level component state
  // first arg is the state's value and the second arg is the function to change the state's value
  const [rating, setRating] = useState(7);
  const [text, setText] = useState('This is an example of feedback item');

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
