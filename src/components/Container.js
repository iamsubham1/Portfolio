import React from 'react'
import TextComponent from "../components/TextComponent"
import MainText from './MainText'
import Page2Component from './Page2Component'
import Page3Component from './Page3Component'
import JourneyText from './JourneyText'
import Page4Component from './Page4Component'
import Page1ImageComp from './Page1ImageComp'





const Container = () => {

    return (
        <div id='container'>
            <div id='page1'>
                <Page1ImageComp />
                <MainText />
                <TextComponent />
            </div>
            <div id='page2'>
                <Page2Component />
            </div>
            <div id='page3'>
                <Page3Component />
            </div>
            <div id='page4'>
                <Page4Component />

            </div>

        </div>
    )
}

export default Container




