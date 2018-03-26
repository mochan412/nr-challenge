import React from 'react';
import styles from './main.css';

import StartButton from './components/startButton/startButton.js';
import MsgForm from './components/msgForm/msgForm.js';
import MsgLog from './components/msgLog/msgLog.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      logsArray: []
    }

    this.sendMessage = this.sendMessage.bind(this);
    this.writeText = this.writeText.bind(this);
  }

  sendMessage(msg) {
    //start recording
    if (msg.type == 0) {
      this.setState({
        started: true
      })

      this.writeText(msg.text, msg.time.toString())
    }

    //record text
    if (msg.type == 1) {
      this.writeText(msg.text, msg.time.toString())
    }

    //end recording
    if (msg.type == 2) {
      this.setState({
        started: false,
        logsArray: []
      })
    }
  }

  writeText(text, time) {
    let elem = <div><span>{text}</span><span>{time}</span></div>;

    this.setState({
      logsArray: this.state.logsArray.concat(elem)
    })
  }

  render() {
    let body = null;
    if (this.state.started) {
      body = (
        <div>
          <MsgForm sendMessage={this.sendMessage}/>
          <MsgLog logsArray={this.state.logsArray} />
        </div>
      )

    }
    return (
      <div className={styles.app}>
        <header>
          <h1>Outage Tracker</h1>
          <StartButton
            sendMessage={this.sendMessage}
           />
        </header>

        {body}


      </div>
    );
  }
}
