import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav-underline text-decoration-none fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand fw-semibold me-4" ><img src={logo} className="react-logo" alt="" />J a v a S
                        c r i p t
                        .</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav nav-fill mx-auto text-uppercase">
                            <li className="nav-item me-5">
                                <Link to="/CalculoArea" className="nav-link" >Exercício 1</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="/Login" className="nav-link" >Exercício 2</Link>
                            </li>
                            <li className="nav-item me-5">
                                <Link to="/MaiorMenor" className='nav-link'>Exercício 3</Link>
                            </li>
                            <li className="nav-item me">
                                <Link to="/Criminoso" className="nav-link" >Exercício 4</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar;