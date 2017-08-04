import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import BackgroundCity from '../../../assets/images/background-towers.svg'

const styles = StyleSheet.create({
  landscape: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundImage: `url(${BackgroundCity})`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  floor: {
    height: 5,
    width: '100%',
    backgroundColor: 'grey',
  },
  overFloor: {
    position: 'absolute',
    width: '100%',
    bottom: 5,
  },
  bush: {
    backgroundColor: '#009688',
    width: 40,
    height: 25,
    borderRadius: '100px 100px 0 0',
    position: 'relative',
    ':before': {
      content: '""',
      backgroundColor: '#00796B',
      width: 40,
      height: 25,
      borderRadius: '100px 100px 0 0',
    }
  },
});

const Landscape = (props) => {
  return (
    <div className={css(styles.landscape)}>
      { props.children }
      <div className={css(styles.overFloor)}>
        <div className={css(styles.bush)} />
      </div>
      <div className={css(styles.floor)} />
    </div>
  )
}

export default Landscape
