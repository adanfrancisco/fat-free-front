import React from 'react'
import { Link, useHistory } from 'react-router-dom'


export const Login = () => {
    const history = useHistory();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        console.log('hice clic en submit')
        history.push("/inicio");
    }

    return (
        <div>
            {/* <div className="preloader">
                <div className="loader">
                    <div cclassNamelass="loader__figure"></div>
                    <p className="loader__label">Cargando... <br /> Adan Aloe</p>
                </div>
            </div> */}

            <section id="wrapper"
                className="login-register login-sidebar"
                style={{ backgroundImage: "url(../assets/images/background/login-register.jpg)" }}
            >
                <div className="login-box card">
                    <div className="card-body">
                        <form className="form-horizontal form-material"
                            id="loginform" 
                            onSubmit={handleSubmit}>

                            <Link to='/dashboard'>

                                <img src="../assets/images/logo-icon.png" alt="Home" />
                                <br />
                                <img src="../assets/images/logo-text.png" alt="Home" />
                            </Link>
                            <div className="form-group m-t-40">
                                <div className="col-xs-12">
                                    <input className="form-control"
                                        type="text" required=""
                                        placeholder="Email" />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input className="form-control"
                                        type="password"
                                        required=""
                                        placeholder="Clave" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-12">
                                    <div
                                        className="checkbox checkbox-primary pull-left p-t-0">
                                        <input
                                            id="checkbox-signup"
                                            type="checkbox"
                                            className="filled-in chk-col-light-blue" />
                                        <label htmlFor="checkbox-signup">
                                            Recuerdame
                                                 </label>
                                    </div>
                                    <Link to='/recover'
                                        id="to-recover"
                                        className="text-dark pull-right">
                                        <i className="fa fa-lock m-r-5"></i>
                                        Recuperar Password
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group text-center m-t-20">
                                <div className="col-xs-12">
                                    <button
                                        className="btn btn-info btn-lg btn-block text-uppercase btn-rounded"
                                        type="submit">
                                        INGRESAR
                                    </button>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                    <div className="social">

                                        <Link to='/'
                                            className="btn  btn-facebook"
                                            data-toggle="tooltip"
                                            title="Login with Facebook">
                                            <i aria-hidden="true" className="fa fa-facebook"></i>
                                        </Link>

                                        <Link to='/'
                                            className="btn btn-googleplus"
                                            data-toggle="tooltip"
                                            title="Login with Google">
                                            <i aria-hidden="true" className="fa fa-google-plus"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group m-b-0">
                                <div className="col-sm-12 text-center">
                                    ¿No tienes cuenta?
                                    <Link to="/register"
                                        className="text-primary m-l-5">
                                        <b>Registrar</b>
                                    </Link>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>




        </div>
    )
}
