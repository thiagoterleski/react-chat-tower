import React, { Component } from 'react'
import { css } from 'aphrodite/no-important'
import io from 'socket.io-client'
import config from './config'

import Bubble from './assets/images/speech-bubble.svg'
import { Landscape, Tower, ChatButton, Button, Dialog, NavBar, Chat } from './global/components'
import { globalStyles } from './global/styles'
import styles from './App.styles.js'

export const socket = io(config.serverURL)

class App extends Component {
  constructor() {
    super()
    this.state = {
      isConnected: false,
      isInputModalOpen: false,
      users: [],
      lastUserMessage: null,
      userName: '',
      chat: {
        open: false,
        messages: [],
      },
      currentUser: {},
    }
  }
  componentDidMount() {
    socket.on('update', (data) => {
      // this data will be the new state for user
      this.setState(data)
    })
    socket.on('chat', (data) => {
      // find last user chat and put message in object
      const lastMessage = data.slice(-1)[0]

      this.setState({
        lastUserMessage: lastMessage,
        chat: {
          ...this.state.chat,
          messages: data,
        },
      })
    })
  }

  /**
  * Disconnect user
  */
  onDisconnect = () => {
    socket.emit('logout')
  }

  /**
  * Open the dialog for user input name
  */
  handleJoinButton = (event) => {
    event.preventDefault()
    this.setState({ isInputModalOpen: true })
  }
  /**
  * Change input name state
  */
  handleChange = (event) => {
    this.setState({ userName: event.target.value })
  }
  /**
  * Submit form
  * emit an event to socket with username and avatar
  */
  handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('join', { name: this.state.userName, avatar: this.genRandomAvatar() })
  }

  genRandomAvatar = () => {
    // eslint-disable-next-line
    const num = Math.floor(Math.random() * (10 - 1) + 1)

    return `user-${num}`
  }
  /**
  * Generate a random avatar
  */
  randomizeAvatar = () => {
    const newAvatar = this.genRandomAvatar()

    socket.emit('updateAvatar', newAvatar)
  }

  render() {
    const usersCount = Object.keys(this.state.users).length

    return (
      <div className={css(styles.wrapper)}>
        <Dialog open={this.state.isInputModalOpen} title="Enter a name">
          <form onSubmit={this.handleSubmit} className={css(styles.dialogForm)}>
            <input
              autoFocus
              name="username"
              placeholder="Nickname"
              value={this.state.userName}
              onChange={this.handleChange}
              className={
                css(
                  globalStyles.bodyText,
                  globalStyles.input,
                  styles.dialogInput,
                )}
            />
            <span className={css(globalStyles.caption)}>Press <b>ENTER</b> to save</span>
          </form>
        </Dialog>
        <div
          className={css(styles.container, this.state.isInputModalOpen ? styles.disabled : null)}
        >
          <NavBar currentUser={this.state.currentUser} onAvatarClick={this.randomizeAvatar} />
          <Landscape>
            <Tower lastUserMessage={this.state.lastUserMessage} users={this.state.users} />
          </Landscape>
          { (this.state.isConnected && (
            <div className={css(styles.chatBox)}>
              <Chat messages={this.state.chat.messages} currentUser={this.state.currentUser} />
            </div>
          )) }
        </div>
        { 1 === 3 && (
          <div className={css(styles.chatButton)} >
            <ChatButton onClick={() => this.handleChatButton()} />
          </div>
        ) }
        <div className={css(styles.primaryButton)} >
          { (this.state.isConnected === false) ? (
            <Button
              onClick={this.handleJoinButton}
              containerStyle={css(styles.joinButton)}
              accent
              label={'Join to chat'}
              icon={Bubble}
            />
          ) : (
            <Button
              onClick={this.onDisconnect}
              containerStyle={css(styles.joinButton)}
              accent
              label={'Disconnect'}
              icon={Bubble}
            />
          ) }
        </div>
        <div className={css(styles.usersStatus)} >
          <span className={css(globalStyles.bodyText)}>
            {(usersCount) ? `${usersCount} users` : 'No user'} <b>connected</b>
          </span>
        </div>
      </div>
    )
  }
}

export default App
