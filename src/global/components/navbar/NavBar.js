import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite/no-important'
import { globalStyles } from '../../../global/styles'
import Logo from '../../../assets/images/logo.svg'
import ChooseAvatarButton from '../buttons/ChooseAvatarButton'

const styles = StyleSheet.create({
  topBar: {
    display: 'flex',
    padding: 16,
    justifyContent: 'space-between',
  },
  userWidget: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarButton: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 24,
    display:' inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});

const NavBar = (props) => (
  <div className={css(styles.topBar)}>
    <div className={css(styles.leftContent)}>
      <img src={Logo} width={120} />
    </div>
    <div className={css(styles.rightContent)}>
      { (Object.keys(props.currentUser).length > 0) ? (
        <div className={css(styles.userWidget)}>
          <span className={css(globalStyles.bodyText)}>{props.currentUser.name}</span>
          <ChooseAvatarButton onClick={props.onAvatarClick} containerStyle={css(styles.avatarButton)} />
        </div>
      ) : (
        <div className={css(styles.userWidget)}>
          <span className={css(globalStyles.bodyText)}>
            You are not conected
          </span>
        </div>
      ) }
    </div>
  </div>
)

NavBar.propTypes = {
  currentUser: PropTypes.object,
  onAvatarClick: PropTypes.func.isRequired,
}

export default NavBar
