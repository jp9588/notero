import Swal from "sweetalert2";
import { db } from "../firebase/fireConfig";
import { clouddinaryLoader } from "../helpers/clouddinaryLoader";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

//cloudinary preset journal-app


export const addNewNote=()=>{

    

    return async (dispatch, getState)=>{

        const {uid}=getState().auth;

        

        //console.log(uid);

        const newNote={
           
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const doc= await db.collection(`${uid}/jornal/notas/`).add(newNote);

       
        dispatch(activeNote( doc.id, newNote));
        

    }
}

export const activeNote=( id,note)=>(
    
    
    { 

    type:types.noteActive,
    payload:{
        id,
       ...note
    }
    
});

export const loadingNotes=(uid)=>{
    
    return async(dispatch)=>{
        const notes=  await loadNotes(uid);
        dispatch(setNotes(notes)); 
         
    }
}

export const setNotes=(notes)=>({
    type:types.noteLoading,
    payload:notes
});

export const startSaveNote=(activa)=>{

    // console.log(body);
    // console.log(nota);
    // console.log(title);
    // console.log(nota.id);
    return async(dispatch, getState)=>{
        const {uid}=getState().auth;
        const {active}=getState().note;

        //console.log(active);

        if(!active.url){
            delete active.url;
        }
        

       const notetoFire={...active};
       delete notetoFire.id;

      

       //console.log(notetoFire);
        

       
        
         await db.doc(`${uid}/jornal/notas/${active.id}`).update(notetoFire);
         //console.log('Cambios guardados correctamente');

         Swal.fire('Updated successfully', active.title, "success");

         dispatch(loadingNotes(uid));
    }
}


export const startUploadFile=(file)=>{
    return async(dispatch, getState)=>{
        const  notaActiva=getState().note.active;

        const urlFile=await clouddinaryLoader(file);

        notaActiva.url=urlFile;

        dispatch(startSaveNote(notaActiva));

        
    }
}

export const startDeleteNote=(id)=>{
    return async (dispatch, getState)=>{
        const {uid}=getState().auth;
        await db.doc(`${uid}/jornal/notas/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote=(id)=>({
    type: types.noteDelete,
    payload: id
});

export const cleaningLogout=()=>({
    type: types.noteCleaningLogout
    
})