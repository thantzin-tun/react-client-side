import {useState}from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "./slider.scss"


type SliderComProps = {
    sliderItem?: any
}



export const SliderCom:React.FC<SliderComProps> = ({sliderItem}) => {

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrow: false,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
    dots: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
         slidesToShow: 1,
        }
       }
    ]
  }

    return ( 
        <>
          <div className="slider-container">
              <Slider {...sliderSettings}>
                  {
                    sliderItem?.map((image:any,index: number) => (
                      <div className="image-container" key={index}>
                        <img src={image} alt="sliderPhoto" />
                      </div>
                    ))
                  }
              </Slider>
          </div>
        </>
    )
}