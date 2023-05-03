import React from 'react'
import upArrow from '../assests/upArrow.svg'

const MoveTopButton = () => {


    return (
        <div id='TopButton'>
            <a href='#page1' class="smooth-scroll"><img src={upArrow} /></a>

        </div>
    )
}

export default MoveTopButton
