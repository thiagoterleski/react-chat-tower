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

const socket = io('http://localhost:4001')

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  container: {
    background: 'linear-gradient(#d6e5ff, #82B1FF)',
    height: 'calc(100vh - 40px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all .4s cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  disabled: {
    pointerEvents: 'none',
  },
  topBar: {
    display: 'flex',
    padding: 16,
    justifyContent: 'space-between',
  },
  chatButton: {
    position: 'fixed',
    bottom: 30,
    right: 30,
  },
  primaryButton: {
    position: 'fixed',
    bottom: 50,
    right: 50,
  },
  usersStatus: {
    position: 'fixed',
    bottom: 50,
    left: 50,
  },
  rightContent: {
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
  dialogForm: {
    display: 'flex',
    'flexDirection': 'column',
  },
  dialogInput: {
    marginBottom: 4,
  }
});

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      isConnected: false,
      isInputModalOpen: false,
      users: {},
      userName: '',
    }
  }
  componentDidMount() {
    socket.on('update', (data) => {
      console.log('update',data)

      this.setState({
        users: data.clients,
      })
    })
  }
  handleChatButton(event) {
    console.log(socket)
  }
  handleJoinButton = (event) => {
    event.preventDefault()
    this.setState({ isInputModalOpen: true })
    // socket.emit('joinChatEvent', 'world');
  }
  handleChange = (event) => {
    this.setState({ userName: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ isInputModalOpen: false }, () => {
      socket.emit('join', this.state.userName);
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
              <ChooseAvatarButton containerStyle={css(styles.avatarButton)} />
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
        <Button
          onClick={this.handleJoinButton}
          containerStyle={css(styles.joinButton)}
          accent
          label={'Join to chat'}
          icon={Bubble}
        />
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
