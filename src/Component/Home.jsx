import React from 'react'
import hero from '../assets/Images/hero.png'
 import coffee from '../assets/Images/coffee.jpeg'
 import sanitizer from '../assets/Images/sanitizer.jpeg'
 import redchilli from '../assets/Images/redchilli.jpeg'
 import oil from '../assets/Images/oil.jpeg'
 import truck from '../assets/Images/truck.png'
 import quality from '../assets/Images/quality.png'
 import dollar from '../assets/Images/dollar.png'
 import reuse from '../assets/Images/reuse.png'
 import lemon from '../assets/Images/lemon.jpg'
 import spanich from '../assets/Images/spanich.jpg'
 import pulses from '../assets/Images/pulses.jpg'
 import client1 from '../assets/Images/client1.png'
 import client2 from '../assets/Images/client2.png'
 
 
function Home() {
  return (
    <div>
      <div className='poster'>
        <div className='photo'>
          <img src={hero} alt=''/>
        </div>
          <div className='text'>
          <h3>Best Quality Products</h3>
          <h1>Join the Organic Movement!</h1>
          <h3>Lorem ipsum dolor sit amet,consecteture adipiscing elit.Ut elit tellus,<br></br>luctus nec ullamcorper mattis,pulvinar dapibus leo.</h3>
          <button>Shop Now</button>
          </div>

      </div>
      <div className='blackbox'>
        <div className='innerbox'>
        <img src={truck} alt=""/>
          <h2> Free Shipping</h2>
         
        
        </div>
        <div className='innerbox'>
        <img src={quality} alt=""/>
        <h2>Certified Organic</h2>
        </div>

        <div className='innerbox'>
        <img src={dollar} alt=""/>
        <h2>Huge Savings</h2>

         </div>

         <div className='innerbox'>
         <img src={reuse} alt=""/>
         <h2>Easy Returns</h2>

         </div>


      </div>
      <div className='best'>
        <div className='besttext'>
          <h2>Best Selling Products</h2>
        </div>
        <div className='boxes'>
        <div className='bestbox'>
           <img src={coffee} alt=''/>
           <h4>Groceries</h4>
           <h3>Assorted Coffee</h3>
        </div>
        <div className='bestbox'>
        <img src={sanitizer} alt=''/>
        <h4>Groceries</h4>
        <h3>Hand Sanitizer</h3>
       </div>
       <div className='bestbox'>
       <img src={redchilli} alt=''/>
       <h4>Groceries</h4>
       <h3> Handpicked Red Chillies</h3>
       </div>
       <div className='bestbox'>
       <img src={oil} alt=''/>
       <h4>Groceries</h4>
       <h3>Natural Edible Oil</h3>
       </div>
       </div>

      </div>
      <div className='slide'>
        
        <div className='container'>
           <div className='containertext'>
             <h2>Farm Fresh Fruits</h2>
             <h3>Ut sollicitudin quam vel purus tempus,vel eleifend felis varis</h3>
             <button>SHOP NOW</button>
            <div className='containerimg'>
              <img src={lemon} alt=''/>
            </div>
           </div>
        </div>
        <div className='container'>
        <div className='containertext'>
             <h2>Farm Fresh Fruits</h2>
             <h3>Ut sollicitudin quam vel purus tempus,vel eleifend felis varis</h3>
             <button>SHOP NOW</button>
             <div className='containerimg'>
              <img src={spanich} alt=''/>
            </div>
           </div>

        </div>
        <div className='container'>
        <div className='containertext'>
             <h2>Farm Fresh Fruits</h2>
             <h3>Ut sollicitudin quam vel purus tempus,vel eleifend felis varis</h3>
             <button>SHOP NOW</button>
             <div className='containerimg'>
              <img src={pulses} alt=''/>
            </div>
           </div>

        </div>





      </div>

      <div className='blackbox2'> 
       
      <h1>Get 25% Off On Your First Purchase!</h1>
      <button>Shop Now</button>

      </div>
      <div className='free'>
        <h2>Try It For Free. No Registration Needed.</h2>

      </div>
      <div className="trending">
      <div className='boxes'>
        <div className='bestbox'>
           <img src={coffee} alt=''/>
           <h4>Groceries</h4>
           <h3>Assorted Coffee</h3>
           <h3>$35.00</h3>
        </div>
        <div className='bestbox'>
        <img src={sanitizer} alt=''/>
        <h4>Groceries</h4>
        <h3>Hand Sanitizer</h3>
        <h3>$15.00</h3>
       </div>
       <div className='bestbox'>
       <img src={redchilli} alt=''/>
       <h4>Groceries</h4>
       <h3> Handpicked Red Chillies</h3>
       <h3>$19.00</h3>
       </div>
       <div className='bestbox'>
       <img src={oil} alt=''/>
       <h4>Groceries</h4>
       <h3>Natural Extracted Edible Oil</h3>
       <h3>$25.00</h3>
       </div>
       </div>  
       
       <div className="customer">
        <h2>Customers Reviews </h2>
        <div className="review">
          <div className="review-box">
             <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
             <div className='customerimg'>
              <img src={client1} alt=''/>
              <h3>Mila kunis</h3>

             </div>
          </div>
          <div className="review-box2">
           <h1>Deal of The Day<br></br>15% Off On ALL Vegetables</h1>
            <h3>I am text block.Click edit button to change this tex em ips.</h3>
            <button>SHOP NOW</button>
    
          </div>
          <div className="review-box">
          <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
             <div className='customerimg'>
              <img src={client2} alt=''/>
              <h3>Mike Sendler</h3>

             </div>
          </div>
        </div>
       </div>




      </div>

    </div>
  )
}

export default Home