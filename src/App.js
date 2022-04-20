import { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './data/FeedbackData';

// when we return JSX, it must be only one parent element
// "<></>"" react fragment use when we don't want any div to wrap the child element
// class => className, for => htmlFor
function App() {
  // manange global state level componenet
  // first arg is the state's value and the second arg is the function to change the state's value
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    // ask the user to confirm the delete
    if (window.confirm('Are you sure you want to delete?')) {
      // filter out the id that need to delete from the array of "feedback" and set the new return array to the "feedback" state
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
