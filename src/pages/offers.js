import React from 'react'
import MainHeader from '../header'
import Footer from '../footer'

function Offers() {
  return (
    <>
    <div>
        <MainHeader/>
    </div>
    <div className='offers'>
      <img src={process.env.PUBLIC_URL + '/offers1.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers2.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers3.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers1.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers2.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers3.webp'} width="100%"></img>      
      <img src={process.env.PUBLIC_URL + '/offers1.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers2.webp'} width="100%"></img>
      <img src={process.env.PUBLIC_URL + '/offers3.webp'} width="100%"></img>

    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}

export default Offers