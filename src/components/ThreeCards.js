import React from 'react'
import SpaceX from '../assests/spacex.png'
import Apple from '../assests/apple.png'

const ThreeCards = () => {
    const handleMouseEnter = (event) => {
        const img = event.currentTarget.previousSibling;
        img.style.transform = 'scale(1.2)';
    }

    const handleMouseLeave = (event) => {
        const img = event.currentTarget.previousSibling;
        img.style.transform = 'scale(1)';
    }
    return (

        <div className="page" id='page'>

            <div className='projects' id='projects'>
                <div id='card'>
                    <img src={SpaceX} width="70%" />
                    <a href='https://iamsubham1.github.io/SpaceX-clone/'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        project1
                    </a>
                </div>
                <div id='card'>
                    <img src={Apple} width="70%" />
                    <a href='https://www.youtube.com/'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        project2
                    </a>
                </div>
                <div id='card'>
                    <img src={SpaceX} width="70%" />
                    <a href='https://www.youtube.com/'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        project3
                    </a>
                </div>
            </div>
        </div>


    )
}

export default ThreeCards
