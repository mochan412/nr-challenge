import React, { Component } from 'react';
import styles from './msgForm.css';
import PropTypes from 'prop-types';


class MsgForm extends Component {
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
      <div className={styles.msgForm}>
        <form onSubmit={e => {this.submitEvent(e)}}>
          <textarea
            rows="2"
            placeholder="enter outage description"
            value={this.state.description}
            onChange={e => {this.changeEvent(e)}}>
          </textarea>
          <button type="submit">submit new message</button>
        </form>
      </div>
    )
  }
}

export default MsgForm;
