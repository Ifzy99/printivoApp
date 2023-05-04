import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js"
import "fontawesome-free-v6/css/all.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Brands from "./components/Brands";
import Testimony from "./components/Testimony";
import Test from "./components/Testimonials";
import Assurance from "./components/Assurance";
import Tech from "./components/Tech";
import PopularCard from "./components/PopularCard";
import Footer from "./components/Footer";
useEffect



  // const [count, setCount] = useState(0)
  const App =()=> {
    useEffect(()=>{
      if('serviceWorker' in navigator){
       window.addEventListener('load', ()=>{
         navigator.serviceWorker.register('/sw.js')
         .then(registration => {
           console.log('SW registered: ', registration);
         })
         .catch(registrationError => {
           console.log('SW registration failed: ', registrationError);
         })
       })
      }
    }, [])


  return (
    <>
      <Navbar />
      <Hero />
      <div id="cardSection">
        <div className="cHead">
          <h3>Popular Products</h3>
          <div className="allP">See All Products</div>
        </div>
        <div className="container-fluid cBody">
            <div className="c-container">
              <Card title="Two-sided Business Crads" price="15,000" img="image/two-sided.png" amount="per 100" press="Browse Two-sided Bu..." points="/signup"></Card>
              <Card title="A5 Flyers (Single Sided)" price="7,500" img="image/A5_flyer.png" amount="per 100" press="Browse A5 flyers (S..." points="facebook.com"></Card>
              <Card title="Round Stickers (3.5 Diameter)" price="9,900" img="image/Round-stickers.png"  amount="per 100" press="Browse Round Sticke..."></Card>
              <Card title="Simple Mugs" price="2,750" img="image/Simple-mugs.png" amount="per 1" press="Browse Simple Mugs"></Card>
              <Card title="Postcards A6" price="12,903" img="image/postcard.jpg" amount="per 50" press="Browse Postcards (A..."></Card>
              <Card title="Roll Up Banners (Big Base)" price="32,000" img="image/rollup-banner.png" amount="per 1" press="Browse Roll Up Bann..."></Card>
              <Card title="A2 Posters" price="41,400" img="image/A2-posters.png" amount="per 100" press="Browse A2 Posters"></Card>
              <Card title="Trifold Brochures" price="27,600" img="image/trifold-brochure.png" amount="per 100" press="Browse Trifold Broc..."></Card>
              <Card title="Landscape ID Cards" price="1,800" img="image/ID-cards.png" amount="per 1" press="Browse Landscape ID..."></Card>
              <Card title="Off White T-shirts" price="3,499" img="image/White-tshirt.png" amount="per 1" press="Browse Off White T-..."></Card>
              <Card title="A4 Branded Paper Bags" price="60,950" img="image/paper-bags.png" amount="per 100" press="Browse A4 Branded P..."></Card>
              <Card title="A4 Courier Bags" price="16,000" img="image/Courier-bag.jpeg" amount="per 100" press="Browse A4 Courier B..."></Card>
                 
            </div>
            <div className="cHead">
          <h3>Popular Products</h3>
          <div className="allP">See All Categories</div>
        </div>
        <div className="c-container">
              <Card title="Two-sided Business Crads" price="15,000" img="image/two-sided.png" amount="per 100" press="Browse Two-sided Bu..." points="/signup"></Card>
              <Card title="A5 Flyers (Single Sided)" price="7,500" img="image/A5_flyer.png" amount="per 100" press="Browse A5 flyers (S..." points="facebook.com"></Card>
             
                 
            </div>

        </div>
      </div>
       <div id="cardSection2">
           <div className="cHead2">
              <h3>Popular Products</h3>
          <div className="allP2">See All Categories</div>
          <div className="container-fluid cBody2">
            <div className="c-container2">
               <Card title="Greetings Cards" price="17,250" img="image/two-sided.png" amount="per 75" press="Browse Greetings Car..." points="/signup"></Card>
               <Card title="Stickers" price="4,949" img="image/A5_flyer.png" amount="per 50" press="Browse Stickers" points="facebook.com"></Card>   
          </div>
      </div>
     </div>
       </div>
      <Brands />
      <Test />
      <Assurance />
      <Tech />
      <Footer/>
    </>
  );
}


export default App;
