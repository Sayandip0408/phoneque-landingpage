import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import iphoneImg from '../assets/iphoneImg.jpeg'
import s23UltraImg from '../assets/s23UltraImg.avif'
import pixel7PImg from '../assets/pixel7PImg.webp'
import oneplus11Img from '../assets/oneplus11Img.jpg'

const FeaturedProducts = () => {
    return (
        <div className='px-2'>
            <h2 className='text-xl font-bold text-center mb-4 md:text-start md:px-10'>Featured Products</h2>
            <div className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='bg-blue-400 h-[250px] py-3 flex items-end justify-center rounded-md' style={{ backgroundImage: `url(${iphoneImg})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h4 className='bg-white w-[70%] flex items-center justify-between p-2 rounded cursor-pointer'>iPhone 14 Pro Max <BsArrowRight /></h4>
                </div>
                <div className='bg-blue-400 h-[250px] py-3 flex items-end justify-center rounded-md' style={{ backgroundImage: `url(${s23UltraImg})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h4 className='bg-white w-[70%] flex items-center justify-between p-2 rounded cursor-pointer'>Samsung Galaxy S23 Ultra <BsArrowRight /></h4>
                </div>
                <div className='bg-blue-400 h-[250px] py-3 flex items-end justify-center rounded-md' style={{ backgroundImage: `url(${pixel7PImg})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h4 className='bg-white w-[70%] flex items-center justify-between p-2 rounded cursor-pointer'>iPhone 14 Pro Max <BsArrowRight /></h4>
                </div>
                <div className='bg-blue-400 h-[250px] py-3 flex items-end justify-center rounded-md' style={{ backgroundImage: `url(${oneplus11Img})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <h4 className='bg-white w-[70%] flex items-center justify-between p-2 rounded cursor-pointer'>iPhone 14 Pro Max <BsArrowRight /></h4>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts