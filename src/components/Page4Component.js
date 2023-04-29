import React from 'react'

const Page4Component = () => {
    return (

        <div id='page4Container'>
            <div id='titleSection'>
                <h1>Contact me</h1>
            </div>
            <div id='mainSection'>
                <div id='infoSection'>
                    <h2>Find   me   here</h2>
                    <div id='contactLinks'>
                        <div id='links'>
                            <a href='#linkdin'><i class="fa-brands fa-linkedin"></i></a>
                            <a href='#Github'><i class="fa-brands fa-github" ></i></a>
                            <a href='#twitter'><i class="fa-brands fa-twitter"></i></a>
                            <a href='#whatsapp'><i class="fa-brands fa-whatsapp"></i></a>
                        </div>

                    </div>
                </div>
                <div id='formSection'>
                    <div class="form">
                        <h2>For Query !</h2>
                        <div id='innerForm'>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone-no" />
                            <textarea placeholder="Message..!"></textarea>
                            <button type="submit" href="/">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Page4Component
