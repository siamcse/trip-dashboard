import React, { useState } from 'react';
import add from '../../../../assets/icon/add.png';
import AddProductForm from '../../../../components/AddProductForm';

const AddProduct = () => {
    return (
        <div className='mt-3 py-5 opacity-70'>
            <div>
                {/* <table className='w-full'>
                    <thead className='pb-2'>
                        <tr>
                            <th className='text-start'>Products Type</th>
                            <th>Products</th>
                            <th>Description</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table> */}
                <div className='grid grid-cols-4 px-5 pb-2'>
                    <h4>Products Type</h4>
                    <h4>Products</h4>
                    <h4>Description</h4>
                    <h4>Total</h4>
                </div>
                <hr className='opacity-40' />
                <div>
                    <AddProductForm />
                </div>
                <hr className='opacity-40 mt-2' />
                <div>
                    <div className='text-end mr-10 my-5'>
                        <p className='font-semibold pb-2'>Subtotal : <span className='opacity-70'>16,550.000</span></p>
                        <p className='font-semibold'>TVA : <span className='opacity-70'>2,800.000</span></p>
                    </div>
                    <hr className='opacity-40 mt-2' />
                    <div className='flex items-center justify-between mt-5 mr-10'>
                        <div>
                            <button className='bg-primary hover:bg-[#293c75f8] py-2 px-4 rounded-full text-white mr-2'>Save</button>
                            <button className='py-2 px-4 rounded-full border mr-2'>Cancel</button>
                            <button className='bg-primary hover:bg-[#293c75f8] py-2 px-4 rounded-full text-white mr-2'>Download Invoice</button>
                        </div>
                        <p className='font-semibold'>Total : <span className='opacity-70'>19.350.000</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;