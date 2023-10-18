import React from 'react';

const InvoicesList = () => {
    return (
        <div className='mt-16 bg-white rounded-xl pt-3'>
            <div className='pt-5'>
                <table className='w-full opacity-70 table-auto text-center'>
                    <thead>
                        <tr className='border-t border-b'>
                            <th className='p-1 py-3'>Invoice No.</th>
                            <th className='p-1 pl-10'>Trip</th>
                            <th className='p-1 pl-10'>Inv. Date</th>
                            <th className='p-1 pl-10'>Inv. Amount</th>
                            <th className='p-1 pl-10'>Bal. Due</th>
                            <th className='p-1 pl-10'>Payment Method</th>
                            <th className='p-1 pl-10'>Due Date</th>
                            <th className='p-1 pl-10'>Status</th>
                            <th className='p-1 pl-10 pr-11'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='p-1'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10 pr-11'>I909112</td>
                        </tr>
                        <tr>
                            <td className='p-1 '>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10 pr-11'>I909112</td>
                        </tr>
                        <tr>
                            <td className='p-1 '>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10'>I909112</td>
                            <td className='p-1 pl-10 pr-11'>I909112</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicesList;