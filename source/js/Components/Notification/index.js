import React from 'react';

/**
 * Component for rendering notifications
 * @param {String} [type="primary"] - type of notification
 * @param {String} text - text of notification
 * @returns {XML}
 */
const Notification = ({ type, text }) => {
  return <p className={`notification is-${type}`}>{text}</p>
};

Notification.defaultProps = {
  type: 'primary'
};

export default Notification;