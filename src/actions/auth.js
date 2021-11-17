
import Swal from 'sweetalert2';
import { types } from "../types/types";
import {  firebase, googleAuthProvider} from "../firebase/fireConfig";
import { endLoading, initLoading } from "./ui";
import { cleaningLogout } from './notes';



export const loginWithGoogle=()=>{

    return (dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName));
        });
    }
}

export const registerMailNamePassword=(mail, name, pass)=>{

    return(dispatch)=>{

        firebase.auth().createUserWithEmailAndPassword(mail, pass)
        .then(async({user})=>{
            await user.updateProfile({displayName:name});
            //console.log(user);
            dispatch(login(user.uid, user.displayName));
        }).catch(e=>{
            console.log(e);
            Swal.fire('Error', e.message,'error');
        })

        
    

    }
       
    


}

export const login=(uid, displayName)=>{
   
    return{
            type: types.login,
            payload:{
                uid,
                displayName
            }
    }
}


export const initLogout=()=>{
    return async(dispatch)=>{
       await firebase.auth().signOut();
       dispatch(logout());
       dispatch (cleaningLogout());
    }
}

export const logout=()=>({
    type: types.logout 

});


export const singInEmailPassword=(mail, password)=>{

     

    return(dispatch)=>{
        dispatch(initLoading());

        firebase.auth().signInWithEmailAndPassword(mail, password)
        .then(({user})=>{
        dispatch(endLoading());
        login(user.uid, user.displayName);
    }).catch(e=>{
        console.log(e);
        Swal.fire('Error', e.message,'error');
        dispatch(endLoading());
    })

    }
    

}

