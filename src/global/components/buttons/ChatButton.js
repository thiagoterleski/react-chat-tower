import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../assets/images/speech-bubble.svg'
import Button from './Button'

const ChatButton = (props) => (
  <div className={props.containerStyle || null}>
    <Button onClick={props.onClick}>
      <img alt="Chat button" src={Icon} width={48} height={48} />
    </Button>
  </div>
)

ChatButton.propTypes = {
  containerStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default ChatButton
