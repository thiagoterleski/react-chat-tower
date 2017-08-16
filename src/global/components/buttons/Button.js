import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { palette, shadows, transitions } from '../../styles'

const styles = StyleSheet.create({
  button: {
    border: '0 none',
    backgroundColor: 'transparent',
    outline: 'none',
    padding: 0,
    transitionProperty: 'all',
    transitionTimingFunction: transitions.easing.easeOut,
    transitionDuration: '.200s',
    backfaceVisibility: 'hidden',
  },
  label: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.8)',
    fontWeight: 500,
  },
  labeled: {
    'padding': '12px 16px',
    'borderRadius': 22,
    'boxShadow': shadows[1],
    'webkitFontSmoothing': 'antialiased',
    'display': 'flex',
    'alignItems': 'center',
    ':hover': {
      boxShadow: shadows[4],
      transform: 'translateZ(-5px)',
    },
    ':active': {
      transform: 'translateZ(0)',
      boxShadow: shadows[1],
    },
  },
  icon: {
    marginRight: 8,
  },
  primary: {
    backgroundColor: palette.primary,
  },
  accent: {
    backgroundColor: palette.accent,
  },
})

const Button = (props) => (
  <button
    onClick={props.onClick}
    className={css(
      styles.button,
      props.label && styles.labeled,
      props.primary && styles.primary,
      props.accent && styles.accent,
    )}
  >
    { props.icon && (
      <img className={css(styles.icon)} src={props.icon} width={24} height={24} />
    ) }
    { props.label && (
      <span className={css(styles.label)}>{props.label}</span>
    ) }
    {props.children}
  </button>
)


Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.element,
  primary: PropTypes.bool,
  accent: PropTypes.bool,
}

export default Button
