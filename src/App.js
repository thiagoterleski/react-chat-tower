import React, { Component } from 'react'
import logo from './logo.svg'
import { StyleSheet, css } from 'aphrodite/no-important'
import IMGBackgroundLanscape from './assets/images/background-landscape.svg'
import IMGReact from './logo.svg'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightcyan',
    minHeight: '100vh',
    backgroundImage: `url(${IMGBackgroundLanscape})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 'contain',
  },
  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    }
  }
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <img src={IMGReact} width={200} height={200} />
      </div>
    )
  }
}

export default App
