import React from 'react'

function Navbar() {
  return (
   <>

  <div id='topDiv'>
     <div className='cotyListCon d-flex'>
       <div className="coyList-Cont">
          <div className='coyList'>Corporate Pricing</div>
          <div className='coyList'>Discover Stories</div>
          <div className='coyList'>Track Orders</div>
        </div>

          <div className='coyContact '>
             <div className=''>Need help? Call:</div> 
             <span className='text-primary num'>+2348091084333,+2348091085333</span>
          </div>
           
          <div className='WC'>
            <div className="waLogo me-5">
                <img src="image/watApp.svg" alt="" />
            </div>

            <div className='country d-flex'>
              <img src="image/flag.svg" alt="" />
              <div className=''>Nigeria</div>
            </div>
          </div>
       </div>
  </div>

   </>
  )
}

export default Navbar