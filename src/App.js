import Header from './components/Header';

// when we return JSX, it must be only one parent element
// "<></>"" react fragment use when we don't want any div to wrap the child element
// class => className, for => htmlFor
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
}

export default App;
