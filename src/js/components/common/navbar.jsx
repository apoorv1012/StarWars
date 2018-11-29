import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const NavBar = () => {

    const homeClass =  classNames({
      'active': location.pathname === '/home',
    })
    const searchClass =  classNames({
      'active': location.pathname.match(/^\/search/),
    })
  
    return (
        <section className='topbar'>
            <ul  className='topnav nav-right'>
                <li>
                    <Link className={homeClass} to='/home'>Home</Link>
                </li>
                <li>
                    <Link className={searchClass} to='/search'>Search</Link>
                </li>
            </ul>
        </section>
    )
}

export default NavBar
