import React from 'react';
import add from '../../../assets/icon/add.png';

const Invoices = () => {
    return (
        <div className='border p-2'>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-3xl font-semibold opacity-70'>Invoices</h1>
                        <p className='opacity-60'>Invoices</p>
                    </div>
                    <button className='bg-primary flex items-center px-4 py-3 rounded-full text-white'>
                        <img src={add} alt="" className='w-5 h-5 mr-3'/>
                        <p>Add Invoices</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Invoices;