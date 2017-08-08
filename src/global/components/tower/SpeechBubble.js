import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  speechBubble: {
    position: 'relative',
    background: 'white',
    borderRadius: '0.4em',
    padding: 5,
    fontSize: 12,
    position: 'absolute',
    top: '-30px',
    right: '-25px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 1px 1px 2px',
    fontFamily: 'monospace',
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '50%',
      width: 0,
      height: 0,
      border: '15px solid transparent',
      borderTopColor: 'white',
      borderBottom: 0,
      borderLeft: 0,
      marginLeft: '-10px',
      marginBottom: '-15px',
    }
  }

});

const SpeechBubble = (props) => {
  return (
    <div className={css(styles.speechBubble)}>
      {props.text}
    </div>
  )
}

SpeechBubble.propTypes = {
  text: PropTypes.string.isRequired,
}

export default SpeechBubble
