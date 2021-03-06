import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { HiCurrencyDollar  } from 'react-icons/hi';
import { MdReviews  } from 'react-icons/md';
import { BsTools  } from 'react-icons/bs';
const BusinessSummary = () => {
    return (
        <div className='my-16 '>
            <h1 className='text-xl font-bold text-center my-12 text-success'>Business Summary:</h1>
            <div className='grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='mx-16 my-6'>
                    <IoIosPeople className='text-5xl text-primary' />
                    <p className='font-bold'>100+</p>
                    <p className='text-primary font-bold'>customers</p>
                </div>
                <div className='mx-16'>
                    <HiCurrencyDollar className='text-5xl text-primary' />
                    <p className='font-bold'>120M+</p>
                    <p className='text-primary font-bold'>Annual revenue</p>
                </div>
                <div className='mx-16'>
                    <MdReviews className='text-5xl text-primary' />
                    <p className='font-bold'>33k+</p>
                    <p className='text-primary font-bold'>Reviews</p>
                </div>
                <div className='mx-16'>
                    <BsTools className='text-5xl text-primary' />
                    <p className='font-bold'>10k+</p>
                    <p className='text-primary font-bold'>tools</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;