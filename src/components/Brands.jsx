import React from 'react'
import ms from "../assets/Microsoft.png"

const Brands = ()=> {
  return (
    <>
     <div id="pBrands">
         <div className="pBrandHeader">
             Nigeria’s No. 1 online print shop <i class="fa-solid fa-crown text-warning"></i>
         </div>
         <div className="pBrandText">
            Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.
         </div>
         <div className="pBrandLogo">
            <img src={ms} alt="" />
         </div>
     
     
     </div>
    
    </>
  )
}

export default Brands