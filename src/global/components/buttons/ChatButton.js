import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Icon from '../../../assets/images/speech-bubble.svg'
import Button from './Button'

const styles = StyleSheet.create({
  window: {
    width: 40,
    display: 'flex',
    flexDirection: 'column',
  }
});

const ChatButton = (props) => {
  return (
    <div className={props.containerStyle || null}>
      <Button>
        <img src={Icon} width={48} height={48} />
      </Button>
    </div>
  )
}

export default ChatButton
