export const SET_TRANSACTIONS = 'SET_TRANSACTIONS'
export const ADD_TRANSACTION = 'ADD_TRANSACTION'
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION'

const initialState = {
  transactionAsData: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TRANSACTIONS:
      const { transactionAsData } = action.payload
      return {
        ...state,
        transactionAsData
      }
    case ADD_TRANSACTION:
      const { transactionAs: transaction1 } = action.payload
      return {
        ...state,
        transactionAsData: [...state.transactionAsData, transaction1]
      }
    case DELETE_TRANSACTION:
      const { transactionAs: transaction2 } = action.payload
      return {
        ...state,
        transactionAsData: state.transactionAsData.filter(cb => cb.name !== transaction2.name)
      }
    default:
      return state
  }
}
