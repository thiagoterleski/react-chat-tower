import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { globalStyles } from '../../styles'

const styles = StyleSheet.create({
  speechBubble: {
    position: 'relative',
    background: 'white',
    borderRadius: '0.4em',
    padding: 5,
    fontSize: 12,
    position: 'absolute',
    top: '-30px',
    width: 60,
    right: '-30px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 1px 1px 2px',
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
  },
  posLeft: {
    right: 0,
    ':after': {
      borderRight: 0,
      borderLeft: 'auto',
    },
  },

});

const SpeechBubble = (props) => {
  return (
    <div className={css(globalStyles.bodyText, styles.speechBubble, props.position === 'left' && styles.posLeft)}>
      {props.text}
    </div>
  )
}

SpeechBubble.propTypes = {
  text: PropTypes.string,
  position: PropTypes.string.isRequired,
}

export default SpeechBubble
