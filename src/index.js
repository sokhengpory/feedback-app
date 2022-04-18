import React from 'react';
import ReactDOM from 'react-dom';

// import css to react
import './index.css';

// import "App" component from "App.js"
import App from './App';

// redner "App" component as JSX (<App />) to the DOM
// we can also use react strict mode by wrapping the "<App />" component with "<React.StrictMode>"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
