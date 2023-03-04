import { createStore, combineReducers } from 'redux'
import transactionsReducer from './reducers/transactions'

const rootReducer = combineReducers({ transactionsReducer })
const store = createStore(rootReducer)

export { store }