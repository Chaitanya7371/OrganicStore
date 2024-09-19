import React from 'react'
import whitelogo from '../assets/Images/whitelogo.png'
import {Link} from 'react-router-dom'
import playstore from '../assets/Images/playstore.png'
import appstore from '../assets/Images/appstore.png'

function Footer() {
  return (
    <div className='footer'>
      <div className='start'>
        <img src={whitelogo} alt=''/>
        <p>Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.</p>

      </div>
      <div className='mid'>
        <h2>Quick Links</h2>

        <Link to ='/'><h3>Home</h3></Link>  
        <Link to='/everything'><h3>Everything</h3></Link>
        <Link to='/groceries'><h3>Groceries</h3></Link>
        <Link to='/juice'><h3>Juice</h3></Link>
        

        </div>
        <div className='end'>
          <h2>Download Our Mobile App</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.
          <h2>Quick Links</h2>
          <h3>Know More About Us</h3>
          <h3>Visit Store</h3>
          <h3>Locate Stores</h3>

          <img src={playstore} alt=""/>
          <img src={appstore} alt=""/>
          
</p>        

        </div>

    </div>
  )
}

export default Footer