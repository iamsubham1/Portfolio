import React from 'react'
import TextComponent from "../components/TextComponent"
import MainText from './MainText'
import Page2Component from './Page2Component'



const Container = () => {

    return (
        <div id='container'>
            <div id='page1'>
                <MainText />
                <TextComponent />
            </div>
            <div id='page2'>
                <Page2Component />
            </div>
            <div id='page3'>

                <h1>i am page 3</h1>
            </div>
            <div id='page4'>
                <h1>i am page 4</h1>

            </div>

        </div>
    )
}

export default Container




