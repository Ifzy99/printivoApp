import React from 'react'

const Footer = () => {
  return (
    <>
    <div id="p-footer">
        <div className="phmf">
            <div className="phmf-container">
                <div className="ptivo">
                   <div className="f-header"><h4>Printivo</h4></div>
                   <ul>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Track Order</li>
                    <li>Printivo Promise</li>
                    <li>Printivo Blog</li>
                    <li>Career</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header"><h4>Help and Information</h4></div>
                   <ul>
                    <li>Paper Quality</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>Font Licences</li>
                    <li>Shipping and Delivery</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header"><h4>Make Money</h4></div>
                   <ul className="">
                    <li>Refer a friend & earn N1,000</li>
                    <li>Become a Reseller</li>
                    <li>Sell your Designs</li>
                    <li>Merch Store</li>
                   </ul>
                </div>
                <div className="ptivo">
                   <div className="f-header "><h4>Follow Us</h4></div>
                    <div className="sMedia d-flex gap-4 text-center">
                      <a href=""><img src="image/fb.svg" alt="" /></a>
                      <a href=""><img src="image/tt.svg" alt="" /></a>
                      <a href=""><img src="image/in.svg" alt="" /></a>
                      <a href=""><img src="image/insta.svg" alt="" /></a>
                    </div>
                      
                    <div className="ptivo mt-3 py-3">
                       <div className="f-header p-0"><h4>Accepted Payments</h4></div>
                       <div className="pay mt-1">
                            <img src="image/payment.png" alt="" className="" />
                       </div>
                   </div>

                   <div className="ptivo mt-3">
                       <div className="f-header p-0"><h4>Delivery</h4></div>
                       <div className="ship">
                            <img src="image/shipping.png" alt="" className="" />
                       </div>
                   </div>
               </div>
            </div>
        </div>


         <div className="copyW">
             <div className="text-center">Copyright © 2021 Printivo. All rights reserved.</div>
         </div>
    </div>
    
    
    
    </>
  )
}

export default Footer