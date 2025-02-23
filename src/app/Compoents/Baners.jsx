import React from 'react'
import "@/style/Banner.css"
import Form from './Form'


const Baners = () => {
  return (
    <div className='home1 container-fluid'>
      <div className='container-data container'>
        <div className='row'>
             <div className='d-flex  align-items-center col-md-6' style={{marginTop:'10%'}}>
                <div style={{zIndex:9}}>
                    <p className='banner0'>WELCOME TO <span className='banner4' style={{color:'red'}}>VIVACE SONICS</span>   </p>
                    <p className='banner1'>We Design & Build Custom Solutions for Unique Challenges.</p>
                    <p className='banner2'>To become the leader, we mainly focus on the quality, price and the timely delivery of the project we are hired for. By delivering all the values we make sure we are fulfilling all the needs of our customer and getting a good feedback from them.</p>
                </div>
             </div>
             <div className='d-flex second-data col-md-6'>
              <div className='bannerleadform' style={{zIndex:9}}>
                <div className='ribbon'>
                  <span>Book a free Consultation</span>
                  <span className='fold bottom right'></span>
                  <span className='fold bottom left'></span>
                </div>
                <div className='card'>
                   <Form />
                </div>
              </div>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Baners