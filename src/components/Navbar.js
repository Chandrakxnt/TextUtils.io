import React from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"


export default function Navbar(props) {


  return (
    <><div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/about">{props.AboutText}</NavLink>
              </li>
            </ul>
            {/*<form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
            <div className="btn-group mx-4" role="group" aria-label="Basic mixed styles example">
              <button type="button" className="btn btn-info btn btn-outline-primary" onClick={props.HandleBlueTheme}></button>
              <button type="button" className="btn btn-secondary btn btn-outline-primary" onClick={props.HandleGreyTheme}></button>
              <button type="button" className="btn btn-warning btn btn-outline-primary" onClick={props.HandleMustardTheme}></button>
            </div>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

Navbar.propType = {
  title: PropTypes.string,
  AboutText: PropTypes.string
}
