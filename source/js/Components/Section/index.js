import React from 'react';

import Button from '../Button';

/**
 * Component for generating sections
 * @param {XML} children - elements to be wrapped with this section
 * @param {String} title - title of the section
 * @param {Boolean} container - if section should contain `container` class
 * @param {Object} button - button to be attached
 * @returns {XML}
 */
const Section = ({ children = null, title, container, button }) => {
  return (
    <section className={`C-Section section${container ? ' container' : ''}`}>
      <div className="columns">
        <h3 className="title column">{title}</h3>
        <div className="C-Section__Column column is-4">
          <Button label={button.label} onClick={button.action} type="C-Section__Button" />
        </div>
      </div>
      {children}
    </section>
  )
};

Section.defaultProps = {
  container: true
};

export default Section;