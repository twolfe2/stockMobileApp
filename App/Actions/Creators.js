import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })



const requestSymbols = (userInput) => ({type: Types.SYMBOLS_REQUEST, userInput})
const receiveSymbols = (symbols) => ({type: Types.SYMBOLS_RECEIVE, symbols})
const receiveSymbolsFailure = () => ({type: Types.SYMBOLS_FAILURE})


const requestSymbolInfo = (symbol) => ({type: Types.SYMBOL_INFO_REQUEST, symbol})
const receiveStockInfo = (symbolInfo) => ({type: Types.SYMBOL_INFO_RECIEVE, symbolInfo})
const receiveStockInfoFailure = () => ({type: Types.SYMBOL_INFO_FAILURE})

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  requestSymbols,
  receiveSymbols,
  receiveSymbolsFailure,
  requestSymbolInfo,
  receiveStockInfo,
  receiveStockInfoFailure
}
