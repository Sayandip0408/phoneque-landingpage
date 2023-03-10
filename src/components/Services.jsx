import React from 'react';
import { RiProductHuntLine } from 'react-icons/ri';
import { MdSentimentVerySatisfied } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';



const Services = () => {
    return (
        <div className='px-2 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <h2 className='text-xl font-bold text-center md:text-start md:px-8'>We provide best customer experience</h2>
                <p className='text-slate-400 text-sm text-center border-black mt-2 md:flex md:items-center md:px-8 md:border-l-2'>We ensure our customers have the best shopping experience</p>
            </div>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:w-[85vw] md:m-auto md:grid-cols-4'>
                <div className='flex flex-col justify-around h-[200px] p-4'>
                    <RiProductHuntLine className='text-4xl bg-slate-100 p-2 rounded' />
                    <h3 className='text-base font-bold'>Original Products</h3>
                    <p className='text-justify text-sm text-slate-500'>We provide money back guarantee if the product is not original</p>
                </div>
                <div className='flex flex-col justify-around h-[200px] p-4'>
                    <MdSentimentVerySatisfied className='text-4xl bg-slate-100 p-2 rounded' />
                    <h3 className='text-base font-bold'>Satisfaction Guarantee</h3>
                    <p className='text-justify text-sm text-slate-500'>Exchange the product you've purchased if you don't like it</p>
                </div>
                <div className='flex flex-col justify-around h-[200px] p-4'>
                    <BsPhone className='text-4xl bg-slate-100 p-2 rounded' />
                    <h3 className='text-base font-bold'>New Arrival Everyday</h3>
                    <p className='text-justify text-sm text-slate-500'>We update our collections almost everyday</p>
                </div>
                <div className='flex flex-col justify-around h-[200px] p-4'>
                    <FaShippingFast className='text-4xl bg-slate-100 p-2 rounded' />
                    <h3 className='text-base font-bold'>Fast & Free Shipping</h3>
                    <p className='text-justify text-sm text-slate-500'>We offer fast and free shipping for our loyal customers</p>
                </div>
            </div>
        </div>
    )
}

export default Services