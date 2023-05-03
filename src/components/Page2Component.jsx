import React, { useDeferredValue, useEffect } from 'react';
import SpaceX from '../assests/spacex.png'
import Apple from '../assests/apple.png'
import Aos from 'aos';
import "aos/dist/aos.css";
// import MoveTopButton from './MoveTopButton';

const Page2 = () => {

    useEffect(() => {
        Aos.init({});

    }, [])
    const handleMouseEnter = (event) => {
        const img = event.currentTarget.previousSibling;
        img.style.transform = 'scale(1.2)';
    }

    const handleMouseLeave = (event) => {
        const img = event.currentTarget.previousSibling;
        img.style.transform = 'scale(1)';
    }
    return (
        <div>
            <div className="page" id='page'>
                <h2>PROJECTS I HAVE WORKED ON</h2>
                <div className='projects' id='projects'>
                    <div id='card' data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-out" data-aos-once="true"
                        data-aos-duration="3000" data-aos-mirror="true">
                        <img src={SpaceX} width="70%" />
                        <a href='https://iamsubham1.github.io/SpaceX-clone/'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            project1
                        </a>
                    </div>
                    <div id='card' data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-out" data-aos-once="true"
                        data-aos-duration="50" data-aos-mirror="true">
                        <img src={Apple} width="70%" />
                        <a href='https://www.youtube.com/'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            project2
                        </a>
                    </div>
                    <div id='card' data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-easing="ease-out" data-aos-once="true"
                        data-aos-duration="500" >
                        <img src={SpaceX} width="70%" />
                        <a href='https://www.youtube.com/'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
                            project3
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page2
