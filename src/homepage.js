import React from 'react';
import './App.css';
import './style2.css';
import ClothesContainer from './clothes';
import MainHeader from './header'
import Main from './main'
import '@fortawesome/fontawesome-free'
import BackToTopButton from './backToTop';
import Footer from './footer';
function Homepage() {
    return (
        <>
        <div className="homePage">
                <MainHeader/>
                <Main/>
                <div className="clothes-header">
                <h3>تشكيلة الصيف</h3>
                </div>
                <ClothesContainer/>
                <BackToTopButton/>
                <Footer/>
        </div>
      </>
    );
  }
  
  export default Homepage;