import React,{useContext} from 'react'
import {Context} from './Usecontext'


function Coffee() {
  
 const {product} =useContext(Context)

  return (
    <div>
    {product.map((product,key)=>(
      <div className='coffee' key={id}>
        <div className='producti'>
          <img src={product.image1} alt=""/>
        </div>
    
       </div>
    ))}
    </div>
  )
}

export default Coffee