import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import Window from './Window'

const styles = StyleSheet.create({
  upperFloor: {
    width: 160,
    height: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  'cornice': {
    backgroundColor: '#b2bac3',
    flex: 1,
  },
  apartment: {
    backgroundColor: 'rgb(239, 231, 231)',
    flex: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 5,
    marginRight: 5,
    position: 'relative',
    ':before': {
      content: '""',
      height: 3,
      width: '100%',
      position: 'absolute',
      top: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
    }
  },
  firstFloor: {
    alignItems: 'flex-end',
    marginRight: 0,
    marginLeft: 0,
  },
  door: {
    width: 40,
    height: 60,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    border: 'white solid 2px',
    position: 'relative',
    ':before': {
      content: "''",
      top: '-10px',
      left: '-10px',
      position: 'absolute',
      bottom: 20,
      height: 20,
      width: 60,
      backgroundColor: '#f36d6d',
      backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(255,255,255,.5) 50%)',
      backgroundSize: '10px 50px',
    },
  },
  doorDivision: {
    flex: 1,
    margin: 1,
    marginBottom: 0,
    backgroundColor: 'rgba(14, 12, 12, 0.65)',
  }
});

const UpperFloor = (props) => {

  return (
    <div className={css(styles.upperFloor)}>
      <div className={css(styles.cornice)} />
      <div className={css(styles.apartment, props.firstFloor ? styles.firstFloor : null )}>
        { !props.firstFloor ? ([
          <Window key={'window1'} />,
          <Window key={'window2'} />
        ]) : (
          <div className={css(styles.door)}>
            <div className={css(styles.doorDivision)} />
            <div className={css(styles.doorDivision)} />
            <div className={css(styles.doorDivision)} />
          </div>
        ) }
      </div>
    </div>
  )
}

UpperFloor.defaultProps = {
  firstFloor: false,
}

UpperFloor.propTypes = {
  firstFloor: PropTypes.bool,
}

export default UpperFloor
