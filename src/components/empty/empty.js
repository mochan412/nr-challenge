import React, { Component } from 'react';
import styles from './textArea.css';
import PropTypes from 'prop-types';


class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className={styles.textArea}>
        empty
      </div>
    )
  }
}

export default TextArea;
