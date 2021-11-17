import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const AuthRouter = () => {
    return (
        <div className='auth__main'>

            <div className='auth__border-box'>
                <Switch>
                    <Route
                        path='/auth/login'
                        component={Login}
                    />

                    <Route
                        path='/auth/register'
                        component={Register}
                    />  

                    <Redirect
                        to='/auth/register'
                    />


                </Switch>

            </div>

            
        </div>
    )
}

export default AuthRouter
