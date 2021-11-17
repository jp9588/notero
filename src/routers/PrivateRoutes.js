import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    isAuth,
    component: Component,
    ...rest
}) => {
    return (
       <Route
        {...rest}
        component={(props)=>(
            (isAuth) ? <Component {...props}/> : <Redirect to='/auth/login'/>
        )}
       
       />
    )
}
