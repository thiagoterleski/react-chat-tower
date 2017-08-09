import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Icon from '../../../assets/images/avatars/user-2.svg'
import Button from './Button'

const styles = StyleSheet.create({
  window: {
    width: 40,
    display: 'flex',
    flexDirection: 'column',
  },
});

const ChooseAvatarButton = (props) => {
  return (
    <div className={props.containerStyle || null}>
      <Button onClick={props.onClick}>
        <img src={Icon} width={24} height={24} />
      </Button>
    </div>
  )
}

export default ChooseAvatarButton
