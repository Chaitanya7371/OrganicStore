import React from 'react'
import Logotop from '../assets/Images/Logotop.png'
import {Link} from 'react-router-dom'
import cart from '../assets/Images/cart.png'
import Login from '../assets/Images/Login.png'
 

function Navbar() {
  return (
     <nav>
        <div className='navbar'>
            <div className="leftnav">
                <Link to ='/'><img src={Logotop} alt=' '/></Link>  
                <Link to='/everything'><h4>Everything</h4></Link>
                <Link to='/groceries'><h4>Groceries</h4></Link>
                <Link to='/juice'><h4>Juice</h4></Link>
            </div>

            <div className="rightnav">
                <Link to='/about'><h4>About</h4></Link>
                <Link to='/contact'><h4>Contact</h4></Link>
                <Link to='/shoppingcart'><img className='cart' src={cart} alt=""/></Link>
                <Link to='/login'><img  className="login" src={Login} alt=""/></Link>

            </div>

        </div>
     </nav>
  )
}

export default Navbar