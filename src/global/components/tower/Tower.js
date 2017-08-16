import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { shallowEqual } from 'recompose'
import UpperFloor from './UpperFloor'

 // eslint-disable-next-line
 Array.prototype.chunk = function(groupsize){
   const sets = []
   let chunks = 0
   let i = 0

   chunks = this.length / groupsize

   while (i < chunks) {
     sets[i] = this.splice(0, groupsize)
     i += 1
   }

   return sets
 }

const styles = StyleSheet.create({
  tower: {
    display: 'inline-flex',
    flexDirection: 'column',
    transition: 'all .4s cubic-bezier(0.0, 0.0, 0.2, 1)',
    transform: 'perspective(80px) skewY(0deg)rotateX(0)',
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
    'width': 20,
    'backgroundColor': '#9ea7b1',
    'height': 30,
    'position': 'relative',
    ':before': {
      content: '""',
      width: 5,
      height: 100,
      position: 'absolute',
      bottom: 30,
      marginLeft: 5,
      backgroundColor: '#9ea7b1',
    },
  },
  bush: {
    'backgroundColor': '#009688',
    'position': 'absolute',
    'bottom': 0,
    'right': -20,
    'width': 40,
    'height': 25,
    'borderRadius': '100px 100px 0 0',
    ':before': {
      content: '""',
      backgroundColor: '#00796B',
      width: 40,
      height: 25,
      borderRadius: '100px 100px 0 0',
    },
  },
})

class Tower extends Component {
  shouldComponentUpdate(nextProps) {
    return (!shallowEqual(nextProps.users, this.props.users)
    || (!shallowEqual(nextProps.lastUserMessage, this.props.lastUserMessage)))
  }

  renderFloors = () => {
    const { users, lastUserMessage } = this.props

    if (users.length === 0) {
      return <UpperFloor />
    }

    return users.chunk(2)
      .reverse()
      .map((group, i) => <UpperFloor users={group} lastUserMessage={lastUserMessage} key={`UpperFloor_${i}`} />)
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

Tower.propTypes = {
  lastUserMessage: PropTypes.object,
  users: PropTypes.array,
}

export default Tower
