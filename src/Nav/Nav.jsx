import React from 'react'
import "../Nav/NavStyle.css"
import { Link } from 'react-router-dom'

export default function Nav() {
  return (<>
    <nav className="menu col-3" tabindex="0" >
      <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
        <h2>John D.</h2>
      </header>
      <ul>
        <li className="icon-dashboard"><Link className='aaa' to='/home'>Dashboard</Link></li>
        <li className="icon-customers"><Link className='aaa' to='/sis'>Customers</Link></li>
        <li className="icon-users"><Link className='aaa' to='/tis'>Users</Link></li>
        <li className="icon-settings"><Link className='aaa' to='/gis'>Settings</Link></li>
      </ul>
    </nav>
  </>
  )
}
