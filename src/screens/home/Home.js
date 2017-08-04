import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import IMGTower from '../../assets/images/tower.svg'
import { Landscape, Tower } from '../../global/components'

const styles = StyleSheet.create({
  container: {
    background: 'linear-gradient(#85c4ff, #c9e5ff)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  small: {
    '@media (max-width: 600px)': {
      backgroundColor: 'red',
    }
  }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.container)}>
        <Landscape>
          <Tower />
        </Landscape>
      </div>
    )
  }
}

export default Home
