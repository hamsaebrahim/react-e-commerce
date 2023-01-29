import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../img/apple-icon.png'
import  { Link }  from 'react-router-dom'


export default function secondnav(){
return(
<nav className="navbar navbar-expand-lg navbar-light bg-light p-0 navbar-shadow">
  <div className="container">
    <a className="navbar-brand" href="f"><img src={logo} alt="logo" height={80} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item me-5">
        <Link className="nav-link " to="/about">About</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" to="/shop">shop</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li>
      </ul>
      <ul className="d-flex mt-2">
        <li className=" me-3" ><FontAwesomeIcon icon="magnifying-glass" /></li>
        <li className=" me-3"><FontAwesomeIcon icon="cart-shopping" /></li>
        <li className=" me-3"><FontAwesomeIcon icon="user" /></li>
      </ul>
    </div>
  </div>
</nav>
   ) 
}