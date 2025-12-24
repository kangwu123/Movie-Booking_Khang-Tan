
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Plus, UploadCloud } from 'lucide-react';

const Upload = ({ onUpload }) => {
    const [myFiles, setMyFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setMyFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        if (onUpload) {
            onUpload(acceptedFiles[0]);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png'
    });

    const removeFile = file => {
        const newFiles = [...myFiles];
        newFiles.splice(newFiles.indexOf(file), 1);
        setMyFiles(newFiles);
    };

    const thumbs = myFiles.map(file => (
        <div key={file.name} className="relative w-full h-full">
            <img src={file.preview} alt={file.name} className="w-full h-full object-cover rounded-lg" />
            <button onClick={() => removeFile(file)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 text-xs">X</button>
        </div>
    ));

    return (
        <section className="container w-full h-full p-4 border-2 border-dashed border-gray-400 rounded-lg text-center">
            <div {...getRootProps({ className: 'dropzone' })} className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                <input {...getInputProps()} />
                {myFiles.length === 0 ? (
                    <div className="text-gray-500">
                        <UploadCloud size={48} className="mx-auto" />
                        {isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>}
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center">
                            <Plus size={20} className="mr-2" /> Select File
                        </button>
                    </div>
                ) : (
                    <aside className="w-full h-full flex justify-center items-center">
                        {thumbs}
                    </aside>
                )}
            </div>
        </section>
    );
};

export default Upload;