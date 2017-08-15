import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import keydown, { Keys } from 'react-keydown'
import io from 'socket.io-client'

import { Home } from './screens'
import IMGTower from './assets/images/tower.svg'
import Bubble from './assets/images/speech-bubble.svg'
import User from './assets/images/user.svg'
import { Landscape, Tower, ChatButton, Button, Dialog, NavBar, Chat } from './global/components'
import { globalStyles } from './global/styles'
import styles from './App.styles.js'

export const socket = io('http://localhost:4001')

const genRandomAvatar = () => {
  const num = Math.floor(Math.random() * (10 - 1) + 1)
  return `user-${num}`

}

class App extends Component {
  constructor(props) {
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
      const lastUser = lastMessage.user

      this.setState({
        lastUserMessage: lastMessage,
        chat: {
          ...this.state.chat,
          messages: data,
        }
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.info('App:componentDidUpdate', this.state)
  }

  handleChatButton(event) {
    console.log(socket)
  }

  randomizeAvatar = () => {
    const newAvatar = genRandomAvatar()
    socket.emit('updateAvatar', newAvatar)
  }
  /**
  * [handleJoinButton description]
  * @param  {[type]} event [description]
  * @return {[type]}       [description]
  */
  handleJoinButton = (event) => {
    event.preventDefault()
    this.setState({ isInputModalOpen: true })
    // socket.emit('joinChatEvent', 'world');
  }
  /**
  * [handleChange description]
  * @param  {[type]} event [description]
  * @return {[type]}       [description]
  */
  handleChange = (event) => {
    this.setState({ userName: event.target.value })
  }
  /**
  * [handleSubmit description]
  * @param  {[type]} event [description]
  * @return {[type]}       [description]
  */
  handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('join', { name: this.state.userName, avatar: genRandomAvatar() });
  }

  /**
  * [onDisconnect description]
  * @param  {[type]} event [description]
  * @return {[type]}       [description]
  */
  onDisconnect = (event) => {
    this.setState({ isConnected: false }, () => {
      socket.emit('logout');
    })
  }

  pluralizeUserCounter = (count) => {
    switch(count) {
      case 0:
        return 'no users'
      case 1:
        return `${count} user`
      default:
        return `${count} users`
    }
  }

  render() {
    const usersCount = Object.keys(this.state.users).length

    return (
      <div className={css(styles.wrapper)} onKeyUp={this.handleKeyPress}>
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
                  styles.dialogInput
                )}
                />
              <span className={css(globalStyles.caption)}>Press <b>ENTER</b> to save</span>
            </form>
          </Dialog>
          <div className={css(styles.container, this.state.isInputModalOpen ? styles.disabled : null)}>
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
              <ChatButton onClick={(event) => this.handleChatButton()} />
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

              {this.pluralizeUserCounter(usersCount)} in the <b>tower</b>

          </span>
        </div>
      </div>
    )
  }
}

export default App
