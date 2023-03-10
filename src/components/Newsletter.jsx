import { TextField } from '@mui/material';
import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-[95vw] m-auto mb-4'>
            <h3 className='text-center text-xl md:text-2xl font-bold'>Subscibe to our newsletter to get updates to our latest collections</h3>
            <p className='text-slate-500 text-sm text-center mb-3'>Get 20% off on your first order by subscribing to our newsletter</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:w-[40vw] md:m-auto gap-1'>
                <TextField label='Enter your eamil'></TextField>
                <button className='bg-black text-white rounded py-2 sm:py-0'>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter