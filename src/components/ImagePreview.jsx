import React from 'react';

const ImagePreview = ({ files, setFiles }) => {
    const handleRemove = () => {
        setFiles([]);
    }
    return (
        <div className='relative'>
            {
                files.map(file => <div key={file.name}>
                    <img src={file.preview} alt="" />
                    <button className='absolute top-0 right-0 text-white' onClick={handleRemove}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>)
            }
        </div>
    );
};

export default ImagePreview;