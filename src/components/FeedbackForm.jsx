import { useState, useContext, useEffect } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelected from './RatingSelected';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedbackItem } =
    useContext(FeedbackContext);

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.isEditable) {
      setBtnDisabled(false);
      setReview(feedbackEdit.item.review);
      setRating(feedbackEdit.item.rating);
    } else {
      setReview('');
      setRating(10);
      setBtnDisabled(true);
    }
  }, [feedbackEdit]);

  // set "review" state to value of the input
  const handleReviewChange = (event) => {
    const { value } = event.target;

    if (value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage('Review must be 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setReview(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      review,
      rating,
    };

    if (feedbackEdit.isEditable) {
      updateFeedbackItem(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setBtnDisabled(true);
    setReview('');
    setRating(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        {/* pass prop "select" as a function to receive the "rating" value of "RatingSelected" component */}
        <RatingSelected select={setRating} selected={rating} />
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
      </form>
    </Card>
  );
}

export default FeedbackForm;
