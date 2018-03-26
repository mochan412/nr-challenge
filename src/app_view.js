import React from 'react';
import styles from './main.css';

import StartButton from './components/startButton/startButton.js';
import MsgForm from './components/msgForm/msgForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(msg) {
    //start recording
    if (msg.type == 0) {
      this.setState({
        started: true
      })
    }

    //record text
    if (msg.type == 1) {
      console.log(msg.text)

    }

    //end recording
    if (msg.type == 2) {
      this.setState({
        started: false
      })
    }
  }

  render() {
    let body = null;
    if (this.state.started) {
      body = <MsgForm sendMessage={this.sendMessage}/>
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
