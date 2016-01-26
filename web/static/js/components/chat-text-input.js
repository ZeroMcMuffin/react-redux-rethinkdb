import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ChatTextInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSubmit(text);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input type='text'
             autoFocus='true'
             placeholder={this.props.placeholder}
             onChange={::this.handleChange}
             onKeyDown={::this.handleSubmit} />
    );
  }
}
