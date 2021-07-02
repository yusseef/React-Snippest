import React from 'react'
import { sliderData } from './sliderData'
import { useState } from 'react'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'
const Slider = ({slides}) => {
    const [Current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(Current === length -1 ? 0 : Current + 1)
    }
    console.log(Current)

    const prevSlide = () => {
        setCurrent(Current === 0 ? length - 1 : Current - 1)
    }
    return (
        <section className='slider'>
            <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                    <div className={index === Current ? 'slide-active' : 'slide'} key={index}>
                    {index === Current && (<img src={slide.image} alt="slider" className='image'/>)}
                    
                    </div>
                )
            } )}
        </section>
    )
}

export default Slider
