import { useState } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [review, setReview] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // set "review" state to value of the input
  const handleReviewChange = (event) => {
    const { value } = event.target;

    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      console.log(review);
      setMessage('Review must be 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setReview(value);
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Write a review"
          onChange={handleReviewChange}
          value={review}
        />
        {/* Custom "Button" component */}
        <Button type="submit" isDisable={btnDisabled}>
          Send
        </Button>
      </div>
      {message && <div className="message">{message}</div>}
    </Card>
  );
}
export default FeedbackForm;
