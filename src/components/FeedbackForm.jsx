import { useState } from 'react';

import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [review, setReview] = useState('');

  // set "review" state to value of the input
  const handleReviewChange = (event) => {
    setReview(event.target.value);
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
        <Button type="submit">Send</Button>
      </div>
    </Card>
  );
}
export default FeedbackForm;
