import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { globalStyles } from '../../../global/styles'

const styles = StyleSheet.create({
  dialog: {
    position: 'fixed',
    width: '100%',
    left: 0,
    zIndex: 1,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  container: {
    transform: 'perspective(500px)',
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    backgroundColor: 'white',
    borderRadius: 2,
    overflow: 'hidden',
  },
  content: {
    padding: 16,
  },
  header: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: 16,
  },
});

const Dialog = (props) => (props.open) ? (
  <div className={css(styles.dialog)}>
    <div className={css(styles.container)}>
      { props.title && (
        <div className={css(styles.header)}>
          <span className={css(globalStyles.caption, styles.title)}>
            {props.title}
          </span>
        </div>
      ) }
      <div className={css(styles.content)}>
        { props.children }
      </div>
    </div>
  </div>
) : null


Dialog.defaultProps = {
  open: false,
}

Dialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
}

export default Dialog
