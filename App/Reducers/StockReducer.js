import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  symbols: [],
  fetching: null,
  error: null,
  userInput: null,
  info: {}
})


// request stock symbols
const requestSymbols = (state, action) => {
  return state.merge({
    fetching: true,
    userInput: action.userInput,
    symbols: null
  })
}


const receiveSymbols = (state, action) => 
  state.merge({
    fetching: false, 
    error: null,
    symbols: action.symbols
  })

//  symbolsFailure
const symbolsFailure = (state, action) => 
  state.merge({
    fetching: false,
    error: true,
    symbols: null
  })


const requestInfo = (state, action) => 
  state.merge({
    fetching: true,
    info: null
  })

const recieveInfo = (state, action) => 
  state.merge({
    fetching: false,
    error: null,
    info: action.symbolInfo
  })

const infoFailure = (state, action) => 
  state.merge({
    fetching: false,
    error: true,
    info: null
  })


// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.SYMBOLS_REQUEST]: requestSymbols,
  [Types.SYMBOLS_RECEIVE]: receiveSymbols,
  [Types.SYMBOLS_FAILURE]: symbolsFailure,
  [Types.SYMBOL_INFO_REQUEST]: requestInfo,
  [Types.SYMBOL_INFO_RECIEVE]: recieveInfo,
  [Types.SYMBOL_INFO_FAILURE]: infoFailure
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
