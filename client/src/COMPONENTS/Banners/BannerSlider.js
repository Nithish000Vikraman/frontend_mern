import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.everydayhealth.com/images/healthy-living/fitness/everything-you-need-know-about-fitness-1440x810.jpg',
            title: 'FITNESS-HUB',
            description: 'We Deliver The Right Protein At The Right Time ...',
            
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/564x/59/d5/5b/59d55ba19996932dbf7cb24980cda184.jpg',
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
            
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider