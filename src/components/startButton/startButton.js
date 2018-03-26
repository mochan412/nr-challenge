import React, { Component } from 'react';
import styles from './startButton.css';
import PropTypes from 'prop-types';


class StartButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStart: true
    }

    this.startEvent = this.startEvent.bind(this);
    this.endEvent = this.endEvent.bind(this);
  }

  startEvent() {
    this.setState({
      showStart: false
    });

    let msgObject = {
      type: 0,
      time: new Date(),
      text: 'start of incident'
    }

    this.props.sendMessage(msgObject);
  }

  endEvent() {
    this.setState({
      showStart: true
    });

    let msgObject = {
      type: 2,
      time: new Date(),
      text: 'end of incident'
    }

    this.props.sendMessage(msgObject);
  }

  render() {
    let startBtn = null
    if (this.state.showStart) {
      startBtn = <button onClick={this.startEvent}>start recording</button>
    } else {
      startBtn = <button onClick={this.endEvent}>end recording</button>
    }
    return (
      <div className={styles.startButton}>
        {startBtn}
      </div>
    )
  }
}

export default StartButton;
