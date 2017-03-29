import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropzone from 'react-dropzone';

import PageHeader from './PageHeader';
import Section from './Section';
import Item from './SmallItem';
import Button from './Button';

/**
 * Simple app for creating and editing your resume.
 */
class App extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();

    /**
     * This data should be fetched from the API
     */
    this.data = {
      pic: 'http://fillmurray.com/150/150',
      details: [
        { field: 'Name', value: 'Random' },
        { field: 'Surname', value: 'Dude' },
        { field: 'Address', value: 'Random Street 123' }
      ],

      work: [
        { field: '2015 - now', value: 'Some company' }
      ],

      education: [
        { field: '2000 - 2010', value: 'High school' }
      ]
    };

    /**
     * We're keeping initial state very light and fill it as user progresses in the app
     */
    this.state = {};

    this.addField = this.addField.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
  }

  /**
   * Method for adding new fields
   * @param {Object} e - form submission object
   */
  addField(e) {
    e.preventDefault();
    const field = this.refs.formLabel.value;
    const value = this.refs.formValue.value;
    const group = this.refs.formGroup.value;

    /**
     * I should probably use some more sophisticated validation method here
     */
    if (field.length >= 3 && value.length >= 3) {
      const newObject = { field, value };
      this.data[group].push(newObject);
      this.updateState(group, 'form');
    } else {
      /**
       * And definitely some better notifications, gosh.
       */
      alert('Please review your form');
    }
  }

  /**
   * Simple method that determines the message on the edit buttons
   * @param {Boolean} cond - true/false
   * @returns {string}
   */
  generateToggleMessage(cond) {
    return cond ? 'Finish editing' : 'Edit this section';
  }

  uploadPicture(f) {
    this.data.pic = f[0].preview;

    this.setState({
      pic: true
    })
  }


  /**
   * Method for toggling editable groups
   * @param {String} group - which group to edit
   * @param {String} what - which field to edit
   */
  updateState(group, what) {
    this.setState({
      [group]: {
        ...this.state[group],
        [what]: !this.state[group][what]
      }
    });
  }
  /**
   * Image upload render
   * @returns {XML}
   */
  renderImageUploader() {
    return (
      <div className="column is-2">
        <Dropzone multiple={false} onDrop={this.uploadPicture}>
          {this.state.pic
            ? <img src={this.data.pic} alt="" className="image" />
            : <div className="tag is-light">Drag and drop your photo here</div>
          }
        </Dropzone>
      </div>
    )
  }

  /**
   * Form render
   * @param {String} group - in which group does this appear?
   * @returns {XML}
   */
  renderForm(group) {
    return (
      <form onSubmit={this.addField} className="columns">
        <div className="column is-3"><input type="text" className="input" placeholder="Label" ref="formLabel" /></div>
        <div className="column"><div className="field"><input type="text" className="input" placeholder="Value" ref="formValue" /></div></div>
        <input type="hidden" value={group} ref="formGroup" />
        <div className="column is-1"><button type="submit" className="button">Add</button></div>
      </form>
    )
  }

  /**
   * Method for rendering <Section /> with some additions
   * @param {String} title - section title
   * @param {String} slug - section slug, must correspond with data
   */
  renderCombinedSection(title, slug) {
    const editable = {}.hasOwnProperty.call(this.state, slug) ? this.state[slug].editable : false;
    const form = {}.hasOwnProperty.call(this.state, slug) ? this.state[slug].form : false;

    return (
      <Section
        title={title}
        button={{ 'label': this.generateToggleMessage(editable), 'action': () => { this.updateState(slug, 'editable'); } }}
      >
        <div className="columns">
          {slug === 'details'
            ? editable
              ? this.renderImageUploader() : <div className="column is-2"><img src={this.data.pic} alt="" className="image" /></div>
            : null
          }
          <div className="column">
            {this.data[slug].map((item, i) => {
              return <Item
                editable={!editable}
                key={`work--${i}`}
                field={item.field}
                value={item.value}
                ref={`my-details--${item.field}`}
                group="work" />
            })}

            {editable && !form ? <div className="column is-offset-2"><Button label="Add new item" onClick={() => {this.updateState(slug, 'form')}} /></div> : null}
            {editable && form ? this.renderForm(slug) : null}
          </div>
        </div>
      </Section>
    )
  }

  render() {
    return (
      <div>
        <PageHeader title="My Resume" />
        {this.renderCombinedSection('My Details', 'details')}
        {this.renderCombinedSection('Work Experience', 'work')}
        {this.renderCombinedSection('Education', 'education')}
      </div>
    )
  }
}

render(<App />, document.querySelector('#root'));