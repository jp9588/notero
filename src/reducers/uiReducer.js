import { types } from "../types/types";

const initialState={
    loading: false,
    errorMsg: null
}

export const uiReducer= (state=initialState, action)=>{
    switch (action.type) {
        case types.uiSetError :

            return {
               ...state,
               errorMsg: action.payload
            }

        case types.uiRemoveError:

            return{
                ...state,
                errorMsg:null
            }

        case types.uiStarLoadLogin:
        return{
            ...state,
            loading:true

        }
        case types.uiEndLoadLogin:
            return{
                ...state,
                loading:false
    
            }
            
        
            
    
        default:
            return state;
    }
}