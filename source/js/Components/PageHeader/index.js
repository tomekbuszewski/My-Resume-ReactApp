import React from 'react';

/**
 * Component for rendering page header
 * @param {String} title - title of the page
 * @returns {XML}
 */
const PageHeader = ({ title }) => {
  return (
    <header className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </header>
  )
};

export default PageHeader;