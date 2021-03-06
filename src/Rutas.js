import React from 'react'
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Redirect
        //Link
        } from 'react-router-dom'

import Inicio from './components/dashboard/Inicio'


import { Login } from './components/login/Login'
import { Recover } from './components/login/Recover'
import { Register } from './components/login/Register'

function PrivateRoutes({ path, component, ...rest}) {
  let storage =localStorage.getItem('store')
  if(storage && storage.user){
    console.log('hay store')
    return <Route path = {path} component ={component} {...rest} />
  }else{
    //redirecciona a Login
    console.log('no hay store')
    return <Redirect to='/' {...rest} />
  }

}


export const Rutas = () => {
    return (
<Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path='/inicio' component={Inicio} />
        <Route path="/recover" component={ Recover } />
        <Route path="/register" component={ Register } />

        <PrivateRoutes  path="/dashboard" component={ Inicio } />

      </Switch>
    </Router>
    )
}
