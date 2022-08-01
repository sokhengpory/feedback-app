import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

// This component need to wrap all the others component that why it take in the "children" props
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    isEditable: false,
  });

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([...feedback, newFeedback]);
  };

  // Delete feedback
  const deleteFeedback = (id) => {
    // ask the user to confirm the delete
    if (window.confirm('Are you sure you want to delete?')) {
      // filter out the id that need to delete from the array of "feedback" and set the new return array to the "feedback" state
      setFeedback(feedback.filter((item) => item.id !== id));
      setFeedbackEdit({ item: {}, isEditable: false });
    }
  };

  // Set item to be edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      isEditable: true,
    });
  };

  // Update feedback item
  const updateFeedbackItem = (id, updateItem) => {
    // option 1:
    setFeedback(
      feedback.map((feedbackItem) => {
        if (feedbackItem.id === id) {
          const newItem = { ...feedbackItem, ...updateItem };
          return newItem;
        }
        return feedbackItem;
      })
    );
    setFeedbackEdit({ item: {}, isEditable: false });

    // option 2:
    // updateItem.id = id;
    // setFeedback(
    //   feedback.map((feedbackItem) =>
    //     feedbackItem.id === id ? updateItem : feedbackItem
    //   )
    // );
  };

  return (
    // the "value" props is where we pass the state to the children that need it
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
