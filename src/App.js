import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Home } from './screens'
import io from 'socket.io-client'
import Logo from './assets/images/logo.svg'
import IMGTower from './assets/images/tower.svg'
import Bubble from './assets/images/speech-bubble.svg'
import User from './assets/images/user.svg'
import { Landscape, Tower, ChatButton, ChooseAvatarButton, Button, Dialog } from './global/components'
import { globalStyles } from './global/styles'
import styles from './App.styles.js'

const socket = io('http://localhost:4001')

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
      userName: '',
      currentUser: {},
    }
  }
  componentDidMount() {
    socket.on('update', (data) => {
      console.info('update',data)
      // this data will be the new state for user
      this.setState(data)
    })
  }


  handleChatButton(event) {
    console.log(socket)
  }

  randomizeAvatar = () => {
    const newAvatar = genRandomAvatar()
    console.log(newAvatar)
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
                  styles.dialogInput
                )}
            />
            <span className={css(globalStyles.caption)}>Press <b>ENTER</b> to save</span>
          </form>
        </Dialog>
        <div className={css(styles.container, this.state.isInputModalOpen ? styles.disabled : null)}>
          <div className={css(styles.topBar)}>
            <div className={css(styles.leftContent)}>
              <img src={Logo} width={120} />
            </div>
            <div className={css(styles.rightContent)}>
              <span className={css(globalStyles.bodyText)}>Choose your <b>avatar</b></span>
              <ChooseAvatarButton onClick={this.randomizeAvatar} containerStyle={css(styles.avatarButton)} />
            </div>
          </div>
          <Landscape>
            <Tower users={this.state.users} />
          </Landscape>
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

            {(usersCount) ? `${usersCount} users` : 'No one user'} in the <b>tower</b>

            </span>
        </div>
      </div>
    )
  }
}

export default App
