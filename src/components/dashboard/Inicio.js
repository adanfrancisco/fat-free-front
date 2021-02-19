import React from 'react'

export const Inicio = () => {
    return (
        <div>

            

                <aside className="left-sidebar">
                    <div className="scroll-sidebar">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li className="user-profile">
                                    <p className="has-arrow waves-effect waves-dark"
                                        aria-expanded="false">
                                        <img src="../assets/images/users/profile.png"
                                            alt="user" /><span className="hide-menu">
                                            Steave Jobs </span></p>
                                    <ul className="collapse">
                                        <li>My Profile </li>
                                        <li>My Balance</li>
                                        <li>Logout</li>
                                    </ul>
                                </li>
                                <li className="nav-devider"></li>
                                <li className="nav-small-cap">PERSONAL</li>
                                <li> <p className="has-arrow waves-effect waves-dark" aria-expanded="false"><i className="mdi mdi-gauge"></i><span className="hide-menu">Dashboard <span className="label label-rouded label-themecolor pull-right">4</span></span></p>
                                    <ul className="collapse">
                                        <li>Minimal </li>

                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </aside>
        </div>
    )
}
