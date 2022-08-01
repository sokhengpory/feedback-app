import { createContext, useState } from 'react';

const FeedbackContext = createContext();

// This component need to wrap all the others component that why it take in the "children" props
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      review: 'This is from context',
      rating: 10,
    },
  ]);

  return (
    // the "value" props is where we pass the state to the children that need it
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
