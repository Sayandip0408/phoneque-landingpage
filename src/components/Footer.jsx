import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import visa from '../assets/visa.png';
import mc from '../assets/mc.png';
import upi from '../assets/upi.png';


const Footer = () => {
    return (
        <footer className='bg-slate-200  mt-12'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-1'>
                <div className='border p-2'>
                    <h3 className='text-xl text-center sm:text-start text-slate-800 font-bold'>Phoneque</h3>
                    <p className='text-sm text-center sm:text-start text-slate-600'>Largest cell phones providing company</p>
                </div>
                <div className='p-2'>
                    <h4 className='text-base sm:text-sm text-center sm:text-start text-slate-800 font-bold uppercase'>Company</h4>
                    <div className='grid grid-cols-3 sm:grid-cols-1 gap-1'>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>About Us</Link>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>Contact</Link>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>Developer</Link>
                    </div>
                </div>
                <div className='p-2'>
                    <h4 className='text-base sm:text-sm text-center sm:text-start text-slate-800 font-bold uppercase'>Shop</h4>
                    <div className='grid grid-cols-3 sm:grid-cols-1 gap-1'>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>All Phones</Link>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>Android</Link>
                        <Link className='text-sm text-slate-600 text-center sm:text-start'>iPhone</Link>
                    </div>
                </div>
                <div className='p-2'>
                    <h4 className='text-base sm:text-sm text-center sm:text-start text-slate-800 font-bold uppercase'>payment methods</h4>
                    <div className='grid grid-cols-3 justify-items-center sm:justify-items-start gap-1'>
                        <img className='w-[50px] h-[30px] text-center sm:text-start' src={visa} alt='' />
                        <img className='w-[50px] h-[30px] text-center sm:text-start' src={mc} alt='' />
                        <img className='w-[50px] h-[30px] text-center sm:text-start' src={upi} alt='' />
                    </div>
                </div>
            </div>
            <h3 className='mt-6 text-slate-600 border-t-2 border-slate-300 p-2 flex items-center justify-center'>Copyright <AiOutlineCopyrightCircle className='mx-1' />2023 Phoneque. All right reserved</h3>
        </footer>
    )
}

export default Footer