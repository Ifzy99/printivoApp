import React from 'react'

const Test =() => {
  return (
    <>
    
    <div id="pty">
    <div className="pty-container">
      <div className="ptyHeader">What Customers Say About Us</div>

      <div className="t-wrapper">
        <div className="shadow-lg t-container">
          <div className="t-head d-flex gap-5">
            <div className="t-head-icon">
              <i class="fa-brands fa-twitter text-info p-2"></i>
            </div>
            <div className="t-head-name">
              Amina Ebele<span className="text-info"> @DeliciousAmina</span>
            </div>
          </div>
          <div className="t-body">
            I am now the unofficial<span className="text-info"> @Printivo</span> ambassador. What
            these guys just pulled to ensure I got my menu cards today is
            stunning!
          </div>
        </div>

        <div className="shadow-lg t-container">
          <div className="t-head d-flex gap-5">
            <div className="t-head-icon">
              <i class="fa-brands fa-twitter text-info p-2"></i>
            </div>
            <div className="t-head-name">
            Oluwatosin<span className="text-info">@tosingirlfx</span>
            </div>
          </div>
          <div className="t-body">
            <span className="text-info"> @Printivo</span>  delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.
          </div>
        </div>
        <div className="shadow-lg t-container">
          <div className="t-head d-flex gap-5">
            <div className="t-head-icon">
              <i class="fa-brands fa-twitter text-info p-2"></i>
            </div>
            <div className="t-head-name">
            Oluwatosin<span className="text-info"> @olgablark</span>
            </div>
          </div>
          <div className="t-body">
             These guys <span className="text-info"> @Printivo</span> are really awesome and affordable. Excellent customer service and delivery too. Thank you.
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    </>
  )
}

export default Test