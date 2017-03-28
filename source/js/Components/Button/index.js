import React from 'react';

/**
 * Component for rendering buttons
 * @param {String} label - label for the button
 * @param {Function} onClick - action to be performed on click
 * @param {String} [type="is-primary"] - style of the button
 * @returns {XML}
 */
const Button = ({ label, onClick, type }) => {
  return <button className={`button ${type}`} onClick={onClick}>{label}</button>
};

Button.defaultProps = {
  type: 'is-primary'
};

export default Button;