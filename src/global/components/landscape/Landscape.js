import React from 'react'
import PropTypes from 'prop-types'
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
})

const Landscape = (props) => (
  <div className={css(styles.landscape)}>
    { props.children }
    <div className={css(styles.overFloor)} />
    <div className={css(styles.floor)} />
  </div>
)

Landscape.propTypes = {
  children: PropTypes.element,
}

export default Landscape
