import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/es/storage'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import {reducer as timeCardReducer} from './timeCard'
import {reducer as dayFlowReducer} from './dayFlow'
import {reducer as settingReducer} from './userSetting'
import { projects, blocks } from './demo-seed'

const
  rootReducer = combineReducers({
    timer: timeCardReducer,
    events: dayFlowReducer,
    setting: settingReducer
  })
  // persistConfig = { storage, key: 'root' },
  // reducer = persistReducer(persistConfig, rootReducer)

const initialState = {
  timer: {
    totalSeconds: 300,
    timePassed: 0,
    status: 'stopped'
  },
  events: blocks,
  setting: {
    daySpan: [ 8, 21 ],
    numDays: 3,
    colors: {
      primary: '#03a9f4',
      pDark: '#007ac1',
      pLight: '#67daff',
      secondary: '#1de9b6'
    },
    timeZone: '',
    timeFormat: ''
  }
}

const
  middlewares = [
    thunkMiddleware,
    createLogger({
      predicate: (getState, action) => action.type !== 'TIMER/UPDATE'
    })
  ],
  enhancers = composeWithDevTools(
    applyMiddleware(...middlewares)
  )

// export default function configureStore () {
//   let store = createStore(reducer, initialState, enhancers)
//   let persistor = persistStore(store)

//   return { persistor, store }
// }

export default createStore(rootReducer, initialState, enhancers)
