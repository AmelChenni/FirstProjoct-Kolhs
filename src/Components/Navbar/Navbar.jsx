import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

export default function Navbar({user,logOut}) {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-white ">
  <div className="container-fluid">
    <Link className="navbar-brand" to=""><img src='https://castle.thespecialistworks.com/coverscans/20200305142506kohlslogoblack.png'className={style.logo} alt=''/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <form className={`d-flex ${style.inputIcon}`} role="search">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input  className={`form-control me-2 ${style.search}`} type="search" placeholder="What are you looking today ?"  aria-label="Search"  />
      </form>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        {/* <li className="nav-item">
       <div className={style.div}>
       <i className={`fa-regular fa-circle-user ${style.icons}`}></i>
          <Link className={`nav-link ${style.links}`} aria-current="page" to="login">Sign-in</Link>
       </div>
        </li> */}

        {/* <li className="nav-item">
        <div className={style.div}>
        <i className={`fa-solid fa-cart-arrow-down ${style.icons}`}></i>
          <Link className={`nav-link ${style.links}`} to="cart">$0.00</Link>
        </div>
        </li> */}
        
        {/* {user?
        <li className="nav-item">
        <Link className="nav-link text-black" to="cart">Cart</Link>
      </li>
      :"" } */}
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
      {user?
      <>
      {/* <li className={`${style.navitem} nav-item `}>
       <Link className={style.div}  to="login">
       <i className={`fa-regular fa-circle-user ${style.icons}`}></i>
          <span className={`nav-link ${style.links}`} aria-current="page">{`Hello`} </span>
       </Link>
        </li> */}
        <li className={`${style.navitem} nav-item{`}>
        <Link className={style.div}  to="cart">
        <i className={`fa-solid fa-cart-arrow-down ${style.icons}`}></i>
          <span className={`nav-link ${style.links}`}>$0.00</span>
        </Link>
        </li>
        {/* <li className="nav-item">
        <Link className="nav-link text-black" to="login" onClick={logOut}>Logout</Link>
      </li> */}
      <li className={`${style.navitem} nav-item `}>
       <Link className={style.div}  to="login" onClick={logOut}>
       <i className={`fa-regular fa-circle-user ${style.icons}`}></i>
          <span className={`nav-link ${style.links}`} aria-current="page" >Logout </span>
       </Link>
        </li>
      </>
  
        
      :
      <>
      <li className={`${style.navitem} nav-item `}>
       <Link className={style.div}  to="login">
       <i className={`fa-regular fa-circle-user ${style.icons}`}></i>
          <span className={`nav-link ${style.links}`} aria-current="page">Sign-in</span>
       </Link>
        </li>
        <li className={`${style.navitem} nav-item{`}>
        <Link className={style.div}  to="cart">
        <i className={`fa-solid fa-cart-arrow-down ${style.icons}`}></i>
          <span className={`nav-link ${style.links}`}>$0.00</span>
        </Link>
        </li>
      </>
      }
      </ul>
   
    </div>
  </div>
</nav>

    </>
  )
}
