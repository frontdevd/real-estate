import {applyMiddleware, combineReducers, createStore} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk"
import serviceReducer from './reducers/serviceReducer'

const rootReducer = combineReducers({
  service: serviceReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
