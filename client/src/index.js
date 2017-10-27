import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './store'

import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <PersistGate
        loading={(<div>loading...</div>)}
        persistor={persistor
      }>
        <App />
      </PersistGate>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
