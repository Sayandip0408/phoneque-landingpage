import React from 'react';
import samsunglogo from '../assets/samsungLogo.png';
import applelogo from '../assets/appleLogo.png';
import googlelogo from '../assets/googleLogo.png';
import onepluslogo from '../assets/oneplusLogo.png';
import xiaomilogo from '../assets/xiaomiLogo.png';
import vivologo from '../assets/vivoLogo.png';


const Brands = () => {
    return (
        <div className='py-3'>
            <h2 className='text-xl font-bold text-center md:text-start md:px-10 mb-2'>Brands</h2>
            <div className='w-[95vw] h-[fit-content] grid grid-cols-2 justify-items-center md:grid-cols-3 gap-2 lg:grid-cols-6 m-auto px-2'>
                <img src={samsunglogo} alt='' className='w-[100px] h-[30px] md:w-[150px] md:h-[60px]' />
                <img src={applelogo} alt='' className='w-[50px] h-[30px] md:w-[90px] md:h-[60px]' />
                <img src={googlelogo} alt='' className='w-[55px] h-[40px] md:w-[90px] md:h-[60px]' />
                <img src={onepluslogo} alt='' className='w-[70px] h-[45px] md:w-[100px] md:h-[60px]' />
                <img src={xiaomilogo} alt='' className='w-[60px] h-[35px] md:w-[70px] md:h-[50px]' />
                <img src={vivologo} alt='' className='w-[100px] h-[30px] md:w-[100px] md:h-[40px]' />
            </div>
        </div>
    )
}

export default Brands