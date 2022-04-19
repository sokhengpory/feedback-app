import React from 'react';
import ReactDOM from 'react-dom/client';

// import css to react
import './index.css';

// import "App" component from "App.js"
import App from './App';

// OLD REACT USE THIS STYLE TO RENDER MAIN COMPONENT
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// render "App" component as JSX (<App />) to the DOM
// we can also use react strict mode by wrapping the "<App />" component with "<React.StrictMode>"
// NEW REACT VERSION (18) USE THIS STYLE TO RENDER MAIN COMPONENT
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ALTERNATIVE STYLE TO RENDER MAIN COMPONENT
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
