import React from 'react'
import { Link } from 'react-router-dom'

const TopOfferBanner = () => {
    return (
        <div className='bg-[#1D242C] p-2'>
            <p className='text-center text-slate-300 text-sm font-sans'>Sign up and <span className='text-white'>GET 20% OFF</span> on your first order. <Link className='text-white underline underline-offset-2'>Sign up now</Link></p>
        </div>
    )
}

export default TopOfferBanner