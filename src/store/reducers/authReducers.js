import actionTypes from  '../action/actionTypes'

const initialState = {
    authLogout : false,
    authSigninUsers : [],
    authLogout: false,
    userinfo : [],
    // authSigninData: []
}

const authReducer = (state = initialState, action ) => {
    let newState = { ...state}

    switch (action.type) {
        
        case actionTypes.SIGNIN:  
         
            return newState = {
                    ...state,
                authLogout : !false,
                userinfo: action.payload,
            }
        
        
        // case actionTypes.DONOR : {
        //     return state = {
        //         ...state,
        //         donor: action.payload,
        //     }
        //     break;

        // }
            
        default: {return newState};
        break;
    }

}

export default authReducer