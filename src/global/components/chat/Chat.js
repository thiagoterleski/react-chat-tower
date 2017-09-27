import React, { Component } from 'react'
import PropTypes from 'prop-types'
import keydown from 'react-keydown'
import { StyleSheet, css } from 'aphrodite/no-important'
import { globalStyles } from '../../styles'
import { socket } from '../../../App'

const styles = StyleSheet.create({
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  input: {
    'backgroundColor': 'transparent',
    ':focus': {
      borderColor: 'white',
    },
  },
  messageItem: {
    display: 'inline-flex',
    flexDirection: 'row',
    padding: '4px 8px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginTop: 4,
    borderRadius: 4,
  },
  messageUser: {
    fontWeight: 700,
    fontSize: 12,
    marginRight: 8,
  },
  messageText: {
    fontSize: 12,
  },
  countMessage: {
    display: 'block',
    marginTop: 4,
  }
})

class Chat extends Component {
  constructor() {
    super()
    this.state = {
      message: '',
    }
    this.messageMaxLength = 10
  }

  componentWillReceiveProps({ keydown }) {
    if (keydown.event) {
      this.chatInput.focus()
    }
  }

  /**
   * [handleSubmit form]
   */
  handleSubmit = (event) => {
    event.preventDefault()
    const message = this.state.message

    // TODO - Fix this operation 're-render'
    this.setState({ message: '' }, () => {
      socket.emit('sendMessage', { message })
    })
  }
  /**
   * [handleChange description]
   * @param  {[type]} event [description]
   * @return {[type]}       [description]
   */
  handleChange = (event) => {

    if (this.state.message.length < this.messageMaxLength || (event.target.value.length < this.messageMaxLength))
    this.setState({ message: event.target.value })
  }


  render() {
    return (
      <div className={css(styles.chatContainer)}>
        <div className={css(styles.messages)}>
          { this.props.messages.map((message, i) => (
            <div key={`message_${i}`} className={css(styles.messageItem)} style={{ backgroundColor: message.user.color }}>
              <span
                className={css(globalStyles.bodyText, styles.messageUser)}
              >
                {message.user.name}:</span>
              <span
                className={css(globalStyles.bodyText, styles.messageText)}
              >
                {message.message.substring(0, 50)}{message.message.length > 50 && '...'}
              </span>
            </div>
          )) }
        </div>
        <div className={css(styles.input)}>
          <form onSubmit={this.handleSubmit} className={css(styles.chatForm)}>
            <input
              autoFocus
              ref={(input) => { this.chatInput = input }}
              name="message"
              placeholder="Type something.."
              value={this.state.message}
              onChange={this.handleChange}
              className={
                css(
                  globalStyles.bodyText,
                  globalStyles.input,
                  styles.input,
                )}
            />
            { (this.state.message.length > 0) && (
              <span className={css(globalStyles.bodyText, styles.countMessage)}>
                { `You have ${this.state.message.length} of ${this.messageMaxLength} characters` }
              </span>
            ) }
          </form>
        </div>
      </div>
    )
  }
}
Chat.defaultProps = {
  messages: [],
}

Chat.propTypes = {
  messages: PropTypes.array,
}

const KEYS = ['ctrl+enter', 'command+enter']

export default keydown(KEYS)(Chat)
