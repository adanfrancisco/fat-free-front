import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export const Recover = () => {
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
                        action="index.html">

                            <h3 className="box-title m-b-20">Recupera Clave</h3>
                            <div className="form-group ">
                                <div className="col-xs-12">
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder="Nombre" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <input
                                        className="form-control"
                                        type="text"
                                        required=""
                                        placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group text-center p-b-10">
                                <div className="col-xs-12">
                                    <button
                                        className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                                        type="submit">Recupera</button>
                                </div>
                            <div>
                            <Link to='/'
                                        id="to-recover"
                                        className="text-dark pull-right">
                                        <i className="fa fa-lock m-r-5"></i>
                                        Iniciar Sesion
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
