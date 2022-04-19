import PropTypes from 'prop-types';

// destruct props property (text) from "props" object
function Header({ text }) {
  return (
    <header className="continer">
      <h2>{text}</h2>
    </header>
  );
}

// set defualt props for this component (if no props passed then use the default one)
Header.defaultProps = {
  text: 'Feedback UI',
};

// define types for the props
Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
