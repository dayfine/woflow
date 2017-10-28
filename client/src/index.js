import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'

import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
