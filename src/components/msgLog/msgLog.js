import React, { Component } from 'react';
import styles from './msgLog.css';
import PropTypes from 'prop-types';


class MsgLog extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let log = this.props.logsArray.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    return (
      <ul className={styles.msgLog}>
        {log}
      </ul>
    )
  }
}

MsgLog.propTypes = {
  logsArray: PropTypes.array.isRequired
}

export default MsgLog;
