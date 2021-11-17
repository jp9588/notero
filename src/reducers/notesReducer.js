import { types } from "../types/types";

const initialState={
    notes:[],
    active:null
}

export const notesReducer=(state=initialState, action)=>{

    switch (action.type) {

        case types.noteActive:
            return{
                ...state,
                active:{
                    ...action.payload 
                } 
                    
                
                
            }

        case types.noteLoading:
            
            return{
                ...state,
                notes: [...action.payload] 
            }

        case types.noteUpdate:
            return{
                ...state
            }

        case types.noteDelete:

        return{
            ...state,
            active:null,
            notes:state.notes.filter(note=>note.id!==action.payload)
        }

        case types.noteCleaningLogout:
            return{
                ...state,
                notes:[],
                active:null 
            }

        
    
        default:
           return state;
    }

}