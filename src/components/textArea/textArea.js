import React, { Component } from 'react';
import styles from './textArea.css';
import PropTypes from 'prop-types';


class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    }

    this.changeEvent = this.changeEvent.bind(this);
  }

  changeEvent(e) {
    this.setState({
      description: e.target.value
    })
  }

  submitEvent(e) {
    e.preventDefault();

    //success case
    let msgObject = {
      type: 1,
      time: new Date(),
      text: this.state.description
    }

    this.props.sendMessage(msgObject);
    this.setState({
      description: ''
    })
  }


  render() {
    return (
      <div className={styles.textArea}>
        <form onSubmit={e => {this.submitEvent(e)}}>
          <textarea
            rows="3"
            placeholder="enter outage description"
            value={this.state.description}
            onChange={e => {this.changeEvent(e)}}>
          </textarea>
          <button type="submit">submit message</button>
        </form>
      </div>
    )
  }
}

export default TextArea;
