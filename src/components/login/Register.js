import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
    

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
                            id="loginform" action="index.html">

                            <Link to='/dashboard'>

                                <img src="../assets/images/logo-icon.png" alt="Home" />
                                <br />
                                <img src="../assets/images/logo-text.png" alt="Home" />
                            </Link>

                            <div className="form-group m-t-40">
                                <div className="col-xs-12">
                                    <input className="form-control"
                                        type="text" required=""
                                        placeholder="Usuario" />
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
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input
                                        className="form-control"
                                        type="password"
                                        required=""
                                        placeholder="Confirm Password" />
                                </div>
                            </div>
                            {/* <div className="form-group row">
                                <div className="col-md-12">
                                    <div className="checkbox checkbox-primary p-t-0">
                                        <input id="checkbox-signup" type="checkbox" />
                                        <label htmlFor="checkbox-signup"> Acepto los Terminos */}
                                 {/* <a href="#">Terms</a> */}
                                       {/*  </label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="form-group text-center m-t-20">
                                <div className="col-xs-12">
                                    <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                                        type="submit">
                                        Registrar
                            </button>
                                </div>
                            </div>
                            <div className="form-group m-b-0">
                                <div className="col-sm-12 text-center">
                                    <p>¿Ya tienes cuenta?
                                         <Link to='/' className="text-info m-l-5">
                                            <b>Entrar</b>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>




        </div>
    )
}
