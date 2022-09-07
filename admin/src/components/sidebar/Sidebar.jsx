import React from 'react'
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">Admin</span>
        </div>
        <div className="center">
            <ul>
                <li>
                   <span>Dashbord</span>
                </li>
                <li>
                   <span>Dashbord</span>
                </li>
                <li>
                   <span>Dashbord</span>
                </li>
                <li>
                   <span>Dashbord</span>
                </li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar