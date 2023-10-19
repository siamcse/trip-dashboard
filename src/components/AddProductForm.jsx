import React, { useEffect, useState } from 'react';
import FormInputField from './FormInputField';

const AddProductForm = () => {
    let [count, setCount] = useState(1);
    useEffect(()=>{
        const handleCount = ()=>{
            setCount(count+1);
        }
    },[])

    console.log(Array(count));

    console.log(count);
    return (
        <div>
            <div>
                     <FormInputField/>
            </div>
            <div>
                <button onClick={() => setCount(parseInt(count) + 1)} className='text-primary flex items-center pl-5 pt-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>

                    <span>Add Product</span>
                </button>
            </div>
        </div>
    );
};

export default AddProductForm;