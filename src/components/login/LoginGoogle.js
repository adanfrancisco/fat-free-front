import React from 'react'

import {GoogleLogin,GoogleLogout} from 'react-google-login';


export const LoginGoogle = () => {

    const respuestaGoogle= (respuesta)=>{
        
        console.log(respuesta)
    }

    return (
        <>
          <GoogleLogin
    clientId="894787820410-3kkgejluf9mtmqnc1oqjqfs4n51fcs4q.apps.googleusercontent.com"
    render={renderProps => (
        <button 
        className='btn btn-primary'
        onClick={renderProps.onClick} 
        disabled={renderProps.disabled}
        >
            Click para ENTRAR
        </button>
      )}
    onSuccess={respuestaGoogle}
    onFailure={respuestaGoogle}
    cookiePolicy={'single_host_origin'}
  />  

    <GoogleLogout
      buttonText="Logout"
      onLogoutSuccess={respuestaGoogle}
    >
    </GoogleLogout>
        </>
    )
}
