import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = ()=>{
      navigate('/login');
  }

  return (
    <div className='navbar'>
      <div className="navContainer">
        <Link to='/' style={{color:'inherit', textDecoration:'none'}}>
          <span className="logo">lamabooking</span>
        </Link>
       {user ? (user.username):(
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton" onClick={handleLogin}>Login</button>
        </div>
       ) }
      </div>
    </div>
  )
}

export default Navbar