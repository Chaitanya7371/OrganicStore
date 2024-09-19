import React from 'react'
import banner from '../assets/Images/banner.jpg'

function About() {
  return (
    <div>
      <div className='about'>
      <h1>About Us</h1>
      </div>
      <div className='aboutus'>
        <div className='para'>
          <h2>We Are Your Favourite Store</h2>
           <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.
             Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
        </div>
        <div className="parapic">
         <img src={banner} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default About