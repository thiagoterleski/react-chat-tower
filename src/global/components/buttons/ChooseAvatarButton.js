import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../../assets/images/avatars/user-2.svg'
import Button from './Button'

const ChooseAvatarButton = (props) => (
  <div className={props.containerStyle || null}>
    <Button onClick={props.onClick}>
      <img src={Icon} width={24} height={24} />
    </Button>
  </div>
)


ChooseAvatarButton.propTypes = {
  containerStyle: PropTypes.object,
  onClick: PropTypes.func,
}

export default ChooseAvatarButton
