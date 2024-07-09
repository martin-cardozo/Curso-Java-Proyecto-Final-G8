import React, { useEffect, useState } from 'react';
import slide1 from '../../assets/carousel/1carrusel1920x1080.png';
import slide2 from '../../assets/carousel/2carrusel1920x1080.png';
import slide3 from '../../assets/carousel/3carrusel1920x1080.png';
import slide4 from '../../assets/carousel/caroline-attwood-Fc2KdQ2QaVs-unsplash.jpg';
import slide5 from '../../assets/carousel/domino-164_6wVEHfI-unsplash.jpg';
import slide6 from '../../assets/carousel/emily-pottiger-Zx76sbAndc0-unsplash.jpg';

const Carousel = () => {
    const [contador, setContador] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            document.getElementById('radio' + contador).checked = true;
            setContador((prevContador) => (prevContador % 6) + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [contador]);

    return (
        <div className="slider">
            <div className="slides">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <input key={num} type='radio' name='radio-btn' id={'radio' + num} />
                ))}

                <div className='slide first'>
                    <img src={slide1} alt='' />
                </div>
                <div className='slide'>
                    <img src={slide2} alt='' />
                </div>
                <div className='slide'>
                    <img src={slide3} alt='' />
                </div>
                <div className='slide'>
                    <img src={slide4} alt='' />
                </div>
                <div className='slide'>
                    <img src={slide5} alt='' />
                </div>
                <div className='slide'>
                    <img src={slide6} alt='' />
                </div>

                <div className='navigation-auto'>
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className={'auto-btn' + num}></div>
                    ))}
                </div>
            </div>

            <div className='navigation-manual'>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <label key={num} htmlFor={'radio' + num} className='manual-btn'></label>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
