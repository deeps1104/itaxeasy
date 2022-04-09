import React from 'react'
import './navbar.css'
import Logo from '../assets/images/itaxeasyLogo.png'

const Navbar = () => {
  return (
    <div className='navbarSection'>
        <div className='navbarLogosec'>
          <img src={Logo} alt="itaxclearlogo" />
        </div>

        <div className='navbarMenusec'>
          <ul>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Financial Services</a></li>
            <li><a href='#'>API</a></li>
            <li><a href='#'>OnGoing Projects</a></li>
            <li id='signupbtn'><span style={{
              border: '1px solid',
              padding: '5px 15px',
              borderRadius: '7px 7px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>Sign Up</span></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar