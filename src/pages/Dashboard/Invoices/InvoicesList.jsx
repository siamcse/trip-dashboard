import { invoicesData } from '../../../utils/invoicesData';

const InvoicesList = () => {
    return (
        <div className='mt-6 bg-white rounded-xl py-8'>
            <div className=''>
                <table className='w-full opacity-70 table-auto text-center'>
                    <thead>
                        <tr className='border-t border-b'>
                            <th className='p-1 pl-5 py-3'>Invoice No.</th>
                            <th className='p-1 pl-6'>Trip</th>
                            <th className='p-1 pl-6'>Inv. Date</th>
                            <th className='p-1 pl-6'>Inv. Amount</th>
                            <th className='p-1 pl-6'>Bal. Due</th>
                            <th className='p-1 pl-6'>Payment Method</th>
                            <th className='p-1 pl-6'>Due Date</th>
                            <th className='p-1 pl-6'>Status</th>
                            <th className='p-1 pl-6 pr-11'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            invoicesData.map(({ id, invoiceNo, date, amount, dueDate, dueAmount, paymentMethod, trip, status }) => <tr key={id}>
                                <td className='p-1'>{invoiceNo}</td>
                                <td className='p-1 pl-6'>{trip}</td>
                                <td className='p-1 pl-6'>{date}</td>
                                <td className='p-1 pl-6'>{amount}</td>
                                <td className='p-1 pl-6'>{dueAmount}</td>
                                <td className='p-1 pl-6'>{paymentMethod}</td>
                                <td className='p-1 pl-6'>{dueDate}</td>
                                <td className='p-1 pl-6'>
                                    {
                                        status === 'Unpaid' && <p className='text-[#F36A6A] bg-[#F36A6A33] px-2 py-1 rounded-full'>Unpaid</p>
                                    }
                                    {
                                        status === 'Paid' && <p className='text-[#42C15F] bg-[#42C15F33] px-2 py-1 rounded-full'>Paid</p>
                                    }
                                    {
                                        status === 'Cancelled' && <p className='text-[#172066] bg-[#17206633] px-3 py-1 rounded-full'>Cancelled</p>
                                    }
                                </td>
                                <td className='p-1 pl-6 pr-11 flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 rounded-xl bg-[#ECF6FE] hover:bg-[#bad3e7] p-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 rounded-xl bg-[#ee8b8b7e] text-[#ca4c4c] hover:bg-[#e46c6cc6] hover:text-[#6e3030] p-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicesList;