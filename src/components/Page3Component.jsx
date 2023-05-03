import React from 'react'

import Waves from '../assests/waves.svg'
import JourneyImg from '../assests/JourneyImage.jpg'


const Background = () => {
    return (
        <div class="BackGroundArea" >
            <div className='Page3Text'>
                <h1>My Journey.</h1>
                <p>As i am from a 3rd tier city in odisha all i had to start with was nothing,i used to code since my school time but had no one to tell me what to do and how to do,i made my laptop and internet my only friend and patience as my mentor ,from not knowing where to start from to building this portfolio website it took me 6 months . This is my journey to becoming a webdeveloper. </p>

            </div>
            <img className='journeyimage' src={JourneyImg} />
            <img className='waves' src={Waves} />
            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>

    )
}

export default Background
