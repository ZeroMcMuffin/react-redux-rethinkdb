import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class ChatTextInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    text: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13 && text.length > 0) {
      this.props.onSubmit(text);
        this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <input type='text'
             autoFocus='true'
             className="form-control"
             value={this.state.text}
             placeholder={this.props.placeholder}
             onChange={::this.handleChange}
             onKeyDown={::this.handleSubmit} />
    );
  }
}
