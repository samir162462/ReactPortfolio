import React, { useState } from 'react';
import { Button } from '../components/ScrollTop';
import arrow from '../icons/arrowUp.png'
const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <img src={arrow} alt="arrow"  onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}

export default ScrollButton;