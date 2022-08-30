import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Annual Report
          </NavLink>
          <NavLink to='/team' activeStyle>
            Teams/Contact
          </NavLink>
          <NavLink to='/gallery' activeStyle>
          Gallery
          </NavLink>
          <NavLink to='/blogs' activeStyle>
          Blogger Speaks
          </NavLink>
          <NavLink to='/testmonialss' activeStyle>
          Testmonials
          </NavLink>
          <NavLink to='/opinion' activeStyle>
          Opinion
          </NavLink>
          <NavLink to='/experience' activeStyle>
          Experiences
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;