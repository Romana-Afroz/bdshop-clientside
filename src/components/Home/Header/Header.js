import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <NavBar></NavBar>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="text-white text-center moto">
          <h1 className='mt-5 h1'><b>THE LARGEST SHOESHOP SITE IN OUR COUNTRY</b><span className='span'></span></h1>
          <h2 className='mt-5 h2'><b>We always provide Best services</b><span className='span'></span></h2>
          <Link to="/explore"><Button variant="primary" type="submit">Explore All</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;