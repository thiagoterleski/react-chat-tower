import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  button: {
    border: '0 none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0,
  },
});

const Button = (props) => {
  return (
    <button className={css(styles.button)}>
      {props.children}
    </button>
  )
}

export default Button
