import React from 'react'
import logo from '../assets/p logo.svg'
import card from '../assets/card.webp'

function Hero() {
  return (
    <>
    <div id='contTwo'>
         
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="heroCont">
         <div className='menuToFixed'>
            <img src={logo} alt="" />
         </div>
         <div className="heroToggler">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarNavDropdown"    aria-controls="navbarNavDropdown" aria-expanded="false"  aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
         </div>

       <div className="collapse navbar-collapse heroNav" id="navbarNavDropdown">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
               <a className="nav-link active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">All Products</a>
               <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
               </ul>
              </li>
             <li className="nav-item">
               <a className="nav-link active ">Become a Reseller</a>
             </li>
             <li className="nav-item">
               <a className="nav-link active">Cost Calculator</a>
           </li>
         </ul>
       </div>
      </div>

       <div className="sCt d-flex gap-4">
           <div className="signIn text-danger">Sign in</div>
           <div className="createA display-sm-none">Create Account</div>
           <div className="cart"><i class="fas fa-cart-shopping"></i></div>
       </div>
   




      </div>
    </nav>
        

        <div className='mainServices d-flex'>
          <div className='textCont'>
               <div className='bigText'>Quality Prints</div>
               <div className='smallText'>Shipped to your doorstep</div>

              <form action=''>
                 <label htmlFor='' className='textContLabel my-2'>What would you like to print today?</label>
                 <div className='mainServSearch'>
                     <input type='text' className='mainServInput' placeholder='Search for Business cards, T-shirt, Mugs, etc'/>
                 </div>
             </form>

             </div>
             <div className="handCard">
                 <img src={card} alt="" />
             </div>

        </div>

        
    </div>

    <div className="heroEnd">
        Get 15% of all website product during festive seasons<span><a href="">  Shop Now</a></span>
    </div>
    
    
    
    
    </>
  )
}

export default Hero