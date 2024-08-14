import React, { useEffect } from 'react'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './Extrapages.css'

const About = () => {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  return (
    <div className='extrapage'>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
        heading="About Us"
        bannerimage= 'https://media.self.com/photos/5e99d02681d01d00081851ca/2:1/w_1280,c_limit/weights-yoga-mat.jpg'
        />
        <div className='pgleft pgcommon'>
            <img src='https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723334400&semt=ais_hybrid' alt='noimg' />

            <div>
            <h1>Our Story</h1>
                    <p>Fitness Hub aims to be a comprehensive platform for health and fitness enthusiasts, combining routine sharing, community engagement, and a curated marketplace for protein products. 
                        This platform not only helps users stay fit by sharing routines and tips but also provides access to high-quality tailored to their fitness goals.
                        Collaborate with protein product vendors to offer exclusive deals and promotions at launch. This development story outlines a structured approach to building Fitness Hub, ensuring 
                        that the platform meets the needs of fitness enthusiasts while also providing a robust marketplace 
                        for protein products</p>

            </div>
        </div>
        <div className='pgright pgcommon'>
            <img src='https://i.pinimg.com/736x/6b/e1/27/6be1271849d209805be0ac9c0f0d7f4b.jpg' alt='noimg' />

            <div>
            <h1>Who are we</h1>
                    <p>The success of Fitness Hub is driven by the dedication and expertise of the team behind it. From developers meticulously crafting the platform's functionality to designers 
                        ensuring an intuitive and appealing user interface, each member plays a crucial role in bringing this vision to life. The marketing team works tirelessly to connect with 
                        the fitness community, while product managers and  our users. Their collective passion for health, fitness, and technology is what transforms ideas into reality, creating 
                        a platform that empowers and supports a global community of fitness enthusiasts. Their commitment to excellence, innovation, and user satisfaction is the cornerstone of Fitness Hub's journey.</p>

            </div>
        </div>
        
        <Footer1/>
        <Footer2/>
        </div>
  )
}

export default About