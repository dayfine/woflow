import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import lightBlue from 'material-ui/colors/lightBlue'
import pink from 'material-ui/colors/pink'

// import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

// const { persistor, store } = configureStore()
console.log('initiated')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
