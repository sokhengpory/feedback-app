import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

// This component need to wrap all the others component that why it take in the "children" props
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    const newId = feedback.length + 1;
    newFeedback.id = newId;

    setFeedback([...feedback, newFeedback]);
  };

  const deleteFeedback = (id) => {
    // ask the user to confirm the delete
    if (window.confirm('Are you sure you want to delete?')) {
      // filter out the id that need to delete from the array of "feedback" and set the new return array to the "feedback" state
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    // the "value" props is where we pass the state to the children that need it
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
