import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img4} alt='img1' />
        <div className='content'>
          <h1>
            Whey Protein
          </h1>
          <p> Contains low levels of fat and carbohydrates</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
        <div className='content'>
          <h1>
            Casein Protein
          </h1>
          <p>It is a protein supplement derived from milk</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img3' />
        <div className='content'>
          <h1>
            Pea Protein
          </h1>
          <p>protein powder derived from yellow peas</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img2' />
         <div className='content'>
          <h1>
            Brown Rice Protein
          </h1>
          <p>plant-based protein derived from brown rice</p>
        </div>
      </div>
      
    </div>
  )
}

export default HomeCategories