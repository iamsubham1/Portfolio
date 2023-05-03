import React, { useState, useEffect, useRef } from 'react';
import TextComponent from './TextComponent';
import MainText from './MainText';
import Page1ImageComp from './Page1ImageComp';
import Page2Component from './Page2Component';
import Page3Component from './Page3Component';
import Contact from './Contact';
import Arrow from './Arrow';
import Footer from './Footer';
import MoveTopButton from './MoveTopButton';

const Main = () => {
    const [activeLink, setActiveLink] = useState('#page1');
    const sections = useRef([]);

    //smooth scrolling
    const handleLinkClick = (e) => {
        e.preventDefault();
        const link = e.target.getAttribute("href");
        const section = document.querySelector(link);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const handleScroll = () => {
        const pageYOffset = window.pageYOffset;
        let newActiveLink = '#page4';

        sections.current.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionId = section.getAttribute('data-section-id');

            if (
                rect.top <= 0 && rect.bottom > 0) { newActiveLink = `#${sectionId}`; }
        }); setActiveLink(newActiveLink);
    };
    useEffect(() => {
        sections.current = document.querySelectorAll('[data-section-id]');
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //link style
    const linkStyle = {
        color: activeLink ? "#fff" : "",
        backgroundColor: activeLink ? '#1c1c1b' : "",
        borderRadius: activeLink ? '3px' : "",
    };

    return (
        <div>
            <div className='empty-div '>
                <Arrow />
            </div>
            <ul className='navbar'>
                <li>
                    <a href='#page1' id='Linktopage1' onClick={handleLinkClick} style={activeLink === '#page1' ? linkStyle : {}}>
                        Home
                    </a>
                </li>
                <li>
                    <a href='#page2' id='Linktopage2' onClick={handleLinkClick} style={activeLink === '#page2' ? linkStyle : {}}>
                        Work
                    </a>
                </li>
                <li>
                    <a href='#page3' id='Linktopage3' onClick={handleLinkClick} style={activeLink === '#page3' ? linkStyle : {}}>
                        Journey
                    </a>
                </li>
                <li>
                    <a href='#page4' id='Linktopage4' onClick={handleLinkClick} style={activeLink === '#page4' ? linkStyle : {}}>
                        Contact
                    </a>
                </li>
            </ul>
            <div id='container'>
                <div id='page1' data-section-id='page1'>
                    <Page1ImageComp />
                    <MainText />
                    <TextComponent />
                </div>
                <div id='page2' data-section-id='page2'>
                    <Page2Component />
                    <MoveTopButton />
                </div>
                <div id='page3' data-section-id='page3'>
                    <Page3Component />
                    <MoveTopButton />
                </div>
                <div id='page4' data-section-id='page4'>
                    <Contact />


                </div>
            </div>
        </div>
    )
}
export default Main