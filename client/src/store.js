import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import {reducer as timeCardReducer} from './timeCard'

const config = {
  key: 'root', // key is required
  storage // storage is now required
}

const rootReducer = combineReducers({
  timeCard: timeCardReducer
})

const reducer = persistReducer(config, rootReducer)

const middlewares = [
  thunkMiddleware,
  createLogger()
]

const enhancers = composeWithDevTools(
  applyMiddleware(...middlewares)
)

export default function configureStore () {
  let store = createStore(reducer, enhancers)
  let persistor = persistStore(store)

  return { persistor, store }
}
