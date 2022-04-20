import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  // conditional change style with ternary operator (this one need css class to apply)
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

  // conditional change style with "style" object (this one doesn't need css class we already define it ourself)
  // return (
  //   <div
  //     className="card"
  //     style={{
  //       backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
  //       color: reverse ? '#fff' : '#333',
  //     }}
  //   >
  //     {children}
  //   </div>
  // );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
