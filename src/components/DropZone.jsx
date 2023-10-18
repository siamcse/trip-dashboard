import { useDropzone } from 'react-dropzone';

const DropZone = ({ files, setFiles }) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div key={file.name}>
            <div>
                <img
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    return (
        <>
            <div className='py-10 px-5 ' {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='flex items-center gap-4 text-[#72ADD7]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    <span className='text-center'>Upload Plane Image</span>
                </p>
            </div>
            <aside>{thumbs}</aside>
        </>
    )
};

export default DropZone;