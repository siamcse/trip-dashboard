import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];

const DragNDrop = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file)
    }
    console.log(file);
    return (
        <FileUploader className="w-10" handleChange={handleChange} types={fileTypes} label={"Upload Plane Image"} />
    );
};

export default DragNDrop;