import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import iphoneBanner from "../assets/iphone.webp";
import galaxyBanner from "../assets/s23-ultra.webp";
import pixelBanner from "../assets/pixel7pro.png";

const Carousel = () => {
    const slides = [
        { url: pixelBanner },
        { url: iphoneBanner },
        { url: galaxyBanner },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='w-[90vw] h-[270px] md:w-[724px] md:h-[450px] lg:w-[1024px] lg:h-[566px] m-auto py-8 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded bg-center bg-cover duration-500'
            >
            </div>
            {/* Left Arrow */}
            <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-xl rounded-full p-1 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>
    )
}

export default Carousel