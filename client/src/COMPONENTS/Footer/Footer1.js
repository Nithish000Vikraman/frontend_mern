import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>FITNESS-HUB
                </h1>
                <p>We Deliver The Right </p><p>Protein At The Right Time ....
                </p>
            </div>
        </div>
    )
}

export default Footer1