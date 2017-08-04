import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  button: {
    border: '0 none',
    backgroundColor: 'transparent',
    outline: 'none',
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
