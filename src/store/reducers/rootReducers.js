import { combineReducers} from 'redux'
import authReducer from './authReducers'
import donorReducer from './donorReducer'

const rootReducers = combineReducers({
    auth:authReducer,
    donor:donorReducer

})

export default rootReducers