import React from 'react'
import './Navbar.css'
import {Link, Outlet} from 'react-router-dom'
import {FaBars, FaCaretDown} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import {BsBookmarkPlus} from 'react-icons/bs'
import { useGlobalContext } from '../AppProvider'

function Navbar() {
  // const {watchlist} = useGlobalContext();

  return <header className="header">
    <div className="header__logo"><Link to="/">IMDb</Link></div>
    <nav className="header__navbar">
        <div className="btn menu-btn">
            <FaBars/><span>Menu</span>
        </div>
        <div className="mega-menu"></div>
    </nav>
    <div className="header__search-bar">
        <div className="search-filter">All <FaCaretDown /></div>
        <input type="text"></input>
        <button><FiSearch /></button>
    </div>
    <a href="" className="header__IMDbpro btn">IMDbpro</a>
    <div className="header__user-menu">
        <div className="btn h__watchlist"><Link to="watchlist"><BsBookmarkPlus /> Watchlist 0</Link></div>
        <div className="btn h_sign-in">Sign In</div>
        <div className="btn h_language">EN <FaCaretDown /></div>
    </div>

  </header>
}

export default Navbar