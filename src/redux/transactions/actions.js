import { ADD_TRANSACTION, DELETE_TRANSACTION, SET_TRANSACTIONS } from './reducers/transactions'

export const transactionsAsData = transactionAsData => ({
  type: SET_TRANSACTIONS,
  payload: {
    transactionAsData
  }
})

export const transactionsData = transactionAs => ({
  type: ADD_TRANSACTION,
  payload: {
    transactionAs
  }
})

export const deleteTransactionData = transactionAs => ({
  type: DELETE_TRANSACTION,
  payload: {
    transactionAs
  }
})