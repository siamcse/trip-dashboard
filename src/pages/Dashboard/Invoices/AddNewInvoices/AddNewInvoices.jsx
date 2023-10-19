import { Link } from "react-router-dom";
import { useState } from "react";
import SelectTrip from "./SelectTrip";
import AddProduct from "./AddProduct";

const AddNewInvoices = () => {
    const [files, setFiles] = useState([]);
    console.log(files.length);
    return (
        <div className="p-2">
            <div className=''>
                <div>
                    <h1 className='text-3xl font-semibold opacity-70'>Invoices</h1>
                    <p className='opacity-60'><Link to='/dashboard/invoices'>Invoices</Link> / New Invoice</p>
                </div>
                <div className="bg-white mt-2 rounded-xl">
                    <SelectTrip files={files} setFiles={setFiles} />
                </div>
                <div className="bg-white mt-2 rounded-xl">
                    <AddProduct />
                </div>
            </div>
        </div>
    );
};

export default AddNewInvoices;