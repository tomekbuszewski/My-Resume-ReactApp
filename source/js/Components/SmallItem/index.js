import React, { Component } from 'react';

/**
 * Component for rendering single-line form items
 */
class SimpleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      field: this.props.field,
      value: this.props.value
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="field is-horizontal">
            <div className="field-label is-normal"><label className="field-label is-normal">{this.state.field}</label></div>
            <div className="field-body"><div className="field"><input disabled={this.props.editable} onChange={this.changeValue} type="text" className="input C-Input--small" value={this.state.value} /></div></div>
          </div>
        </div>
        <div className="column is-1">
          {!this.props.editable ? <button className="delete is-large" onClick={() => { this.props.delete(this.props.group, this.state.field, this.state.value) }} /> : null}
        </div>
      </div>
    )
  }
}
export default SimpleItem;