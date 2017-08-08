import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { shallowEqual } from 'recompose'
import UpperFloor from './UpperFloor'

Object.defineProperty(Array.prototype, 'chunk', {
  value: function(chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize)).fill().map(function(_,i){
      return that.slice(i * chunkSize, i * chunkSize + chunkSize)
    });
  }
})

const styles = StyleSheet.create({
  tower: {
    display: 'inline-flex',
    flexDirection: 'column',
    transition: 'all .4s cubic-bezier(0.0, 0.0, 0.2, 1)',
    transform: 'perspective(80px) skewY(0deg)rotateX(-1deg)',
    transformOrigin: 'bottom center',
    position: 'relative',
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
  },
  bush: {
    backgroundColor: '#009688',
    position: 'absolute',
    bottom: 0,
    right: -20,
    width: 40,
    height: 25,
    borderRadius: '100px 100px 0 0',
    ':before': {
      content: '""',
      backgroundColor: '#00796B',
      width: 40,
      height: 25,
      borderRadius: '100px 100px 0 0',
    }
  },
});

class Tower extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(nextProps.users, this.props.users)
  }
  componentDidUpdate(prevProps, prevState) {
    // console.count('Tower::componentDidUpdate')
  }

  renderFloors = () => {
    const items = []
    const { users } = this.props
    const numFloors = Math.ceil(users.length / 2)

    if (users.length === 0)
      return <UpperFloor />

    return users.chunk(2).reverse().map((group, i) => {
      return <UpperFloor users={group} key={`UpperFloor_${i}`}  />
    })

  }

  render() {


    return (
      <div className={css(styles.tower)}>
        <div className={css(styles.towerTop)}>
          <div className={css(styles.antenna)} />
        </div>
        { this.renderFloors() }
        <UpperFloor firstFloor />
        <div className={css(styles.bush)} />
        <div className={css(styles.bush)} style={{ right: 'auto', left: -20 }} />
      </div>
    )
  }
}

export default Tower
