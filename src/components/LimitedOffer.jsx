import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import samsung from '../assets/samsungoffer.jpg';

const LimitedOffer = () => {
    return (
        <div className='my-6'>
            <div className='w-[95vw] md:w-[70vw] m-auto grid grid-cols-1 sm:grid-cols-2'>
                <div className='h-[170px] md:h-[200px] rounded-t-md sm:rounded-tr-none sm:rounded-l-md' style={{ backgroundImage: `url(${samsung})`, backgroundPosition: 'center', backgroundRepeat: "no-repeat", backgroundSize: "cover" }} >

                </div>
                <div className='h-[170px] md:h-[200px] bg-zinc-900 rounded-b-md sm:rounded-b-none sm:rounded-r-md px-3 flex flex-col justify-around'>
                    <p className='text-slate-300 uppercase text-xs'>limited offer</p>
                    <h3 className='text-white text-lg md:text-3xl'>10% discount only this friday and get special gifts</h3>
                    <button className='bg-white w-[140px] p-1 rounded text-xs md:text-sm flex justify-between items-center'>Grab it now <BsArrowRight /></button>
                </div>
            </div>
        </div >
    )
}

export default LimitedOffer