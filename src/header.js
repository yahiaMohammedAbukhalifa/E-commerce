import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ handleModeToggle, isDarkMode, handleSalesAndOffersClick }) => {
  const [activeLink, setActiveLink] = React.useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/offers') {
      setActiveLink('offers');
    } else if (path === '/products' || path === '/productinfo') {
      setActiveLink('products');
    } else {
      setActiveLink('home');
    }
  }, []);

  return (
    <div className="large-screens">
      <header>
        <FontAwesomeIcon
          icon={isDarkMode ? faSun : faMoon}
          className='icon'
          onClick={handleModeToggle}
        />
        <button>اشتري الأن</button>
        <button className="active">
          تسجيل الدخول
        </button>
        <nav id='nav'>
          <a href='/' className={activeLink === 'home' ? 'active' : ''}>الرئيسية</a>
          <a href='offers' className={activeLink === 'offers' ? 'active' : ''} onClick={handleSalesAndOffersClick}>العروض و الخصومات</a>
          <div className="dropdown">
            <a  className={activeLink === 'products' ? 'active dropbtn' : 'dropbtn'} href='products' >الاقسام</a>
            <div className="dropdown-content">
              <a href="#">رجالي</a>
              <a href="#">حريمي</a>
              <a href="#">أطفال</a>
            </div>
          </div>
          <a href="">مركز الشكاوي</a>
        </nav>
        <img
          src={process.env.PUBLIC_URL + '/logo.jpg'}
          alt=""
          className="logo"
          width="50px"
          height="50px"
        />
      </header>
    </div>
  );
};

const Nav = () => {
  const handleMenuClick = () => {
    const overlay = document.getElementById('overlay');
    const overlayspan = document.getElementById('nav-icon');
    const overlaya = document.getElementsByClassName('overlay-a');
  
    if (overlay.classList.contains('open')) {
      // Menu is already open, so close it
      overlay.classList.remove('open');
      overlayspan.classList.remove('open');
      for (let i = 0; i < overlaya.length; i++) {
        overlaya[i].classList.remove('open');
      }
    } else {
      // Menu is closed, so open it
      overlay.classList.add('open');
      overlayspan.classList.add('open');
      for (let i = 0; i < overlaya.length; i++) {
        overlaya[i].classList.add('open');
      }
    }
  };
  return (
    <nav id="nav" className='nav'>
      <div className="navWrapper">
        <a href="#Main" id="logo">Townteam</a>
        <div className="right">
          <div id="nav-icon" onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="overlay" id="overlay">
            <div className="overlayContent">
              <a href='#' className="overlay-a">الرئيسية</a>
              <a href="#" className="overlay-a">اشتري الان</a>
              <a href='login.php' className="overlay-a">تسجيل </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MainHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundColor = "#333";
      body.style.color = "white";
      const links = document.querySelectorAll("a,button");
      links.forEach(link => {
        link.classList.add("dark-mode");
        link.classList.remove("light-mode");
      });
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      const links = document.querySelectorAll("a,button");
      links.forEach(link => {
        link.classList.add("light-mode");
        link.classList.remove("dark-mode");
      });
    }
  };

  return (
    <>
      <Header handleModeToggle={handleModeToggle} isDarkMode={isDarkMode} />
      <Nav />
    </>
  );
};

export default MainHeader;