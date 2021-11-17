import { types } from "../types/types"


export const setError= (error)=>({
    type: types.uiSetError,
    payload: error
});

export const removeError= ()=>({
    type: types.uiRemoveError
});

export const initLoading=()=>({
    type: types.uiStarLoadLogin,
    
});

export const endLoading=()=>({
    type: types.uiEndLoadLogin
});