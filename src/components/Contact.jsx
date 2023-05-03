import React, { useDeferredValue, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import upArrow from '../assests/upArrow.svg'


const Contact = () => {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault(); // prevent default link behavior
            const targetId = link.getAttribute('href'); // get target section ID
            const targetElement = document.querySelector(targetId); // get target section element
            targetElement.scrollIntoView({ behavior: 'smooth' }); // scroll smoothly to target section
        });
    });
    useEffect(() => {
        Aos.init({ duration: 800 });

    }, [])
    return (
        <div id='contactWrapper'>

            {/* <img src={eyes} /> */}
            <div id='contactSection' >
                <div id='contact' data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-easing="ease-out" data-aos-once="true" >
                    <h2>Contact Me</h2>
                    <div id='contactInfo'>
                        <h4><i class="fa-solid fa-phone"></i>&nbsp; &nbsp;9078133097</h4>
                        <h4><i class="fa-solid fa-envelope">&nbsp; &nbsp;</i>das1998lipun@gmail.com </h4>
                        <h4><i class="fa-solid fa-location-dot"></i>&nbsp; &nbsp; Berhampur,&nbsp; Odisha</h4>
                    </div>
                    <div id='contactLinks'>
                        <a href='#linkdin'><i class="fa-brands fa-linkedin"></i></a>
                        <a href='#Github'><i class="fa-brands fa-github" ></i></a>
                        <a href='#twitter'><i class="fa-brands fa-twitter"></i></a>
                        <a href='#whatsapp'><i class="fa-brands fa-whatsapp"></i></a>
                    </div>

                </div>
                <div id='form' data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-easing="ease-out" data-aos-once="true">
                    <div class="form">
                        <h2>Get in Touch</h2>
                        <h3>Feel Free To Drop A Line&nbsp; ...</h3>
                        <div id='innerForm'>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone-no" />
                            <textarea placeholder="Message..!"></textarea>

                        </div>
                        <button type="submit" href="/">Submit</button>
                    </div>
                </div>


            </div>
            <div id='footer'>
                <div id='copyWrite'>
                    <p> © this website is created by subham das</p>
                </div>
                <div id='upButton'>
                    <a href='#page1' class="smooth-scroll"><img src={upArrow} /></a>
                </div>
            </div>

        </div>
    )
}

export default Contact

