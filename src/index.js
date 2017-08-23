import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

registerServiceWorker()

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render(App)

if (!module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    const NextApp = require('./App').default
    render(NextApp)
  })
}
