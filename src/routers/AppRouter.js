import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    
    
  } from "react-router-dom"
import { login } from '../actions/auth';
import { loadingNotes, setNotes } from '../actions/notes';
import Journal from '../components/Journalscreen/Journal';
import {firebase} from '../firebase/fireConfig'
import { loadNotes } from '../helpers/loadNotes';
import AuthRouter from './AuthRouter';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const [check, setCheck] = useState(true);

    const [isLogged, setisLogged] = useState(false); 

    const dispatch = useDispatch();

    useEffect(() => {

        firebase.auth().onAuthStateChanged(async(user)=>{
           
            if(user?.uid){

                dispatch(login(user.uid, user.displayName));
                setisLogged(true);
               

               dispatch(loadingNotes(user.uid));

            }else{
                setisLogged(false);
            }
            setCheck(false);

        })
        
    }, [dispatch, setCheck, setisLogged])


    if(check){
        return(
            <h1>Loading...</h1>
        )
    }



    return (
        <Router>

            <div>
                <Switch>


                    <PublicRoute
                    
                        path='/auth'
                        component={AuthRouter}
                        isAuth={isLogged}
                    
                    />

                        

                    {/* <Route
                        path='/auth'
                        component={AuthRouter}
                    /> */}

                    <PrivateRoutes

                        path='/'
                        exact
                        component={Journal}
                        isAuth={isLogged}

                    />
                    {/* <Route
                        path='/'
                        exact
                        component={Journal}
                    /> */}
                </Switch>
            </div>
            
        </Router>
    )
}
