import React, { Component } from 'react';
import styles from './msgForm.css';
import PropTypes from 'prop-types';


class MsgForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      error: false
    }

    this.changeEvent = this.changeEvent.bind(this);
  }

  changeEvent(e) {
    let newState = {};
    if (e.target.value.length > 0) {
      newState.error = false
    }
    newState.description = e.target.value;
    this.setState(newState)
  }

  submitEvent(e) {
    e.preventDefault();

    if (this.state.description.length > 0) {
      let msgObject = {
        type: 1,
        time: new Date(),
        text: this.state.description
      }

      this.props.sendMessage(msgObject);
      this.setState({
        description: ''
      })
    } else {
      this.setState({
        error: true
      })
    }

  }


  render() {
    let error = null
    if (this.state.error) {
      error = <div className={styles.error}>please add a new message</div>
    }
    return (
      <div className={styles.msgForm}>
        <form onSubmit={e => {this.submitEvent(e)}}>
          <textarea
            rows="2"
            placeholder="add a new note"
            value={this.state.description}
            onChange={e => {this.changeEvent(e)}}>
          </textarea>
          {error}
          <button type="submit">submit new note</button>
        </form>
      </div>
    )
  }
}

export default MsgForm;
