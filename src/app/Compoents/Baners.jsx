import React from 'react'
import "@/style/Banner.css"
import Form from './Form'


const Baners = () => {
  return (
    <div className='home1 container-fluid'>
      <div className='container-data'>
        <div className='row'>
             <div className='d-flex  align-items-center col-md-9 p-3'>
                <div style={{zIndex:9}} className='first-col-text'>
                    <p className='banner0'>WELCOME TO <span className='banner4' style={{color:'red'}}>VIVACE SONICs</span>   </p>
                    <p className='banner1'>We Design & Build Custom Solutions for Unique Challenges.</p>
                    <p className='banner2'>Our commitment to excellence drives us to prioritize quality, affordability, and timely project delivery. By consistently delivering value, we ensure customer satisfaction and build lasting trust through positive feedback.</p>
                </div>
             </div>
             <div className='col-md-3 sideGif'>
             
             </div>
        </div>
        </div>
    </div>
  )
}

export default Baners