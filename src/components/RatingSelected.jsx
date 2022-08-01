import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelected({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);

  const [selected, setSelected] = useState(10);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  // set current selected input value to the "selected" state
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    // pass selected value to the "select" function
    select(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelected;
