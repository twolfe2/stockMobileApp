// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE
  
  SYMBOLS_REQUEST
  SYMBOLS_RECEIVE
  SYMBOLS_FAILURE

  SYMBOL_INFO_REQUEST
  SYMBOL_INFO_RECIEVE
  SYMBOL_INFO_FAILURE
  

  
`)
