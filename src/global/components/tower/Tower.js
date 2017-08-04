import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import UpperFloor from './UpperFloor'

const styles = StyleSheet.create({
  tower: {
    display: 'inline-flex',
    flexDirection: 'column',
    transition: 'all .4s cubic-bezier(0.0, 0.0, 0.2, 1)',
    transform: 'perspective(80px) skewY(0deg)rotateX(-1deg)',
    transformOrigin: 'bottom center',
  },
  floor: {
    width: 150,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E05B5A',
  },
  towerTop: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '#b2bac3 solid 10px',
  },
  antenna: {
    width: 20,
    backgroundColor: '#9ea7b1',
    height: 30,
    position: 'relative',
    ':before': {
      content: '""',
      width: 5,
      height: 100,
      position: 'absolute',
      bottom: 30,
      marginLeft: 5,
      backgroundColor: '#9ea7b1',
    }
  }
});

class Tower extends Component {
  render() {
    return (
      <div className={css(styles.tower)}>
        <div className={css(styles.towerTop)}>
          <div className={css(styles.antenna)} />
        </div>
        <UpperFloor />
        <UpperFloor />
        <UpperFloor />
        <UpperFloor />
        <UpperFloor firstFloor />
      </div>
    )
  }
}

export default Tower
