import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import { Home } from './screens'
import Logo from './assets/images/logo.svg'
import IMGTower from './assets/images/tower.svg'
import { Landscape, Tower, ChatButton } from './global/components'
import globalStyles from './global/styles'

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
  }
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.container)}>
          <div className={css(styles.topBar)}>
            <div className={css(styles.leftContent)}>
              <img src={Logo} width={120} />
            </div>
            <div className={css(styles.rightContent)}>
              <span className={css(globalStyles.bodyText)}>Choose your avatar</span>
            </div>
          </div>
          <Landscape>
            <Tower />
          </Landscape>
        </div>
        <ChatButton containerStyle={css(styles.chatButton)} />
      </div>
    )
  }
}

export default App
