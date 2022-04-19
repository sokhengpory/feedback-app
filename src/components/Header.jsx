import PropTypes from 'prop-types';

// destruct props property (text) from "props" object
function Header({ text, bgColor, textColor }) {
  // define style and store it in a variable
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    // use "style" to apply the css to the component
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

// set defualt props for this component (if no props passed then use the default one)
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

// define types for the props
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
