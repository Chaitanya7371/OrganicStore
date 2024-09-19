import React, { useContext } from 'react'
import {Context} from './Usecontext'
import {Link} from 'react-router-dom'


function Everything() {


  const {data} =useContext(Context)

  return (
    <div>
       {data.map((data,id)=>(
        <div key={id}>
           <div className='product'>
             <div className='img'>
            <img src={data.image} alt=""/>
             </div>
             <div className='type'>
                  <h3>{data.type}</h3>
             </div>
             <div className='productname'>
                <h3>{data.productname}</h3>
             </div>
             <div className='star'>
                <img src={data.star} alt=''/>
             </div>
             <div className='price'>
               <h3>{data.price}</h3>
              </div>

           </div>
        </div>
       ))}
    </div>
  )
}

export default Everything