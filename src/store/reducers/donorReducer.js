import actionTypes from  '../action/actionTypes'
import { stat } from 'fs';

const initialState = {
    authLogout: false,
    donorInfo: []
}
function donorReducer(state = initialState, action) {
    let newState = {...state}
    switch(action.type) {
        case actionTypes.DONOR: 
           
             newState.donorInfo.push(action.payload)
          
        
        break;        
        
        case actionTypes.REQUIREBLOOD:
            return newState = {
                // ...state ,
                authLogout: !false,
                donorInfo: action.payload
            }

    default: return  newState  
    break;
    
    }
}
export default donorReducer