import { Link } from "react-router-dom";

const AddNewInvoices = () => {
    return (
        <div className="p-2">
            <div className=''>
                <div>
                    <h1 className='text-3xl font-semibold opacity-70'>Invoices</h1>
                    <p className='opacity-60'><Link to='/dashboard/invoices'>Invoices</Link> / New Invoice</p>
                </div>
                <div className="bg-white mt-5 rounded-xl">
                    <div className="px-5 py-10 opacity-70 grid grid-cols-12 gap-4">
                        <div className="col-span-9 grid grid-cols-7 gap-5">
                            <label className="col-span-4 w-full">
                                <p className="text-lg font-semibold mb-2">Select</p>
                                <input className="border outline-none px-3 py-2 rounded-full w-full" type="text" name="client" id="" placeholder="Select Client" />
                            </label>
                            <label className="col-span-3">
                                <p className="text-lg font-semibold mb-2">Invoice Date</p>
                                <input className="border outline-none px-3 py-2 rounded-full w-full" type="date" name="date" id="" placeholder="Select Date" />
                            </label>
                            <label>
                                <p className="text-lg font-semibold mb-2">Trip</p>
                                <input className="border outline-none px-3 py-2 rounded-full" type="text" name="client" id="" placeholder="Select Trip" />
                            </label>
                        </div>
                        <div className="col-span-3">
                            <p>Plane Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewInvoices;