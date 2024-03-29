import React from 'react'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Redirect
        //Link
        } from 'react-router-dom'
import { Inicio } from './components/dashboard/Inicio'

import { LoginGoogle } from './components/login/LoginGoogle'
//import { Login } from './components/login/Login'
import { Recover } from './components/login/Recover'
import { Register } from './components/login/Register'

function PrivateRoutes({ path, component, ...rest}) {
  let storage =localStorage.getItem('store')
  if(storage && storage.user){
    return <Route path = {path} component ={component} {...rest} />
  }else{
    //redirecciona a Login
    return <Redirect to='/' {...rest} />
  }

}


export const Rutas = () => {
    return (
<Router>
      <Switch>
        <Route path='/inicio'>Estas en  Inicio</Route>
        <Route exact path="/" component={ LoginGoogle } />
        <Route exact path="/recover" component={ Recover } />
        <Route exact path="/register" component={ Register } />

        <PrivateRoutes  path="/dashboard" component={ Inicio } />

      </Switch>
    </Router>
    )
}
