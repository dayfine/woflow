import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

// const { persistor, store } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
