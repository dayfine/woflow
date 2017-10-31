import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import lightBlue from 'material-ui/colors/lightBlue'
import brown from 'material-ui/colors/brown'

// import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

// const { persistor, store } = configureStore()

const theme = createMuiTheme({
  palette: {
    primary: {...lightBlue, contrastDefaultColor: 'light'},
    secondary: {...brown, contrastDefaultColor: 'light'}
  }
})

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
