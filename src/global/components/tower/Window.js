import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Boy from '../../../assets/images/boy.svg'

const styles = StyleSheet.create({
  window: {
    width: 40,
    display: 'flex',
    flexDirection: 'column',
  },
  lintel: {
    height: 5,
    backgroundColor: 'white',
    position: 'relative',
  },
  sash: {
    height: 40,
    backgroundColor: '#81A8CD',
    border: 'white solid 2px',
    position: 'relative',
    marginLeft: 2,
    marginRight: 2,
    position: 'relative',
    ':before': {
      content: '""',
      position: 'absolute',
      top: 30,
      height: 2,
      width: '100%',
      backgroundColor: 'white',
      left: 0,
    }
  },
  sashOpen: {
    height: 20,
    transformOrigin: 'top center',
    transform: 'perspective(500px) rotateX(45deg)',
    background: 'linear-gradient(to bottom, rgba(242,246,248,0.2) 0%, rgba(224,239,249,0.5) 100%)',
  },
  sill: {
    height: 5,
    backgroundColor: '#fff',
    borderBottom: 'rgba(0,0,0,0.15) solid 2px',
  },
  user: {
    position: 'absolute',
    bottom: 0,
  }
});

const Window = (props) => {
  return (
    <div className={css(styles.window)}>
      <div className={css(styles.lintel)} />
      <div className={css(styles.sash)}>
        { 1 === 3 && (
          <img className={css(styles.user)} src={Boy} width={36} />
        ) }
        <div className={css(styles.sashOpen)} />
      </div>
      <div className={css(styles.sill)} />

    </div>
  )
}

export default Window
