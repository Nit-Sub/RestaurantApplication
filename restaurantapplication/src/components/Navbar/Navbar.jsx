import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => {
  
  const [toogleMenu , setToogleMenu]= useState();
  return(<>
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="App Logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu"></a>Menu</li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Log In/ Register</a>
      <div />
      <a href='#booktable' className='p__opensans'> Book Table</a>


    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=>{setToogleMenu(true)}}/>
      {
        toogleMenu &&( <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontsize={27} className="overlay__close" onClick={()=>{setToogleMenu(false)}}/>
        <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu"></a>Menu</li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
        </div>
      )}
      
    </div>
  </nav>
  </>)
}

export default Navbar;
