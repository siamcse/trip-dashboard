import React from 'react';
import DropZone from '../../../../components/DropZone';
import ImagePreview from '../../../../components/ImagePreview';

const SelectTrip = ({files,setFiles}) => {
    return (
        <div className="px-5 py-5 opacity-70 grid grid-cols-12 gap-4">
            <div className="col-span-9 grid grid-cols-7 gap-3">
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
            <div className="col-span-3 ml-8">
                <p className="text-lg font-semibold mb-2">Plane Image</p>
                <div className="border border-dashed w-44">
                    {
                        files.length > 0 ? <ImagePreview files={files} setFiles={setFiles} />
                            :
                            <DropZone files={files} setFiles={setFiles} />
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectTrip;