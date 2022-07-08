import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

// when we return JSX, it must be only one parent element
// "<></>"" react fragment use when we don't want any div to wrap the child element
// class => className, for => htmlFor
function App() {
  // manange global state level componenet
  // first arg is the state's value and the second arg is the function to change the state's value
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    const newId = feedback.length + 1;
    newFeedback.id = newId;

    console.log(newFeedback);
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
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
        </Routes>
      </div>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <AboutIconLink />
    </Router>
  );
}

export default App;
