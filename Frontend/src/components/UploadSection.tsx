import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadCloudIcon, ImageIcon, AlertCircleIcon } from 'lucide-react';
const UploadSection = ({
  file,
  onFileUpload,
  onSubmit,
  error
}) => {
  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  }, [onFileUpload]);
  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxSize: 5242880 // 5MB
  });
  return <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-slate-800 mb-2">
          Upload Aircraft Image
        </h2>
        <p className="text-slate-600">
          Upload an image of an aircraft to detect structural deformations
        </p>
      </div>
      <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition duration-200 ${isDragActive ? 'border-sky-500 bg-sky-50' : 'border-slate-300 hover:border-sky-400 hover:bg-slate-50'} ${file ? 'bg-slate-50' : ''}`}>
        <input {...getInputProps()} />
        {file ? <div className="flex flex-col items-center">
            <div className="w-full max-w-xs mb-4 relative">
              <img src={URL.createObjectURL(file)} alt="Uploaded aircraft" className="rounded-lg shadow-sm max-h-48 mx-auto object-contain" />
            </div>
            <p className="text-slate-600 font-medium">{file.name}</p>
            <p className="text-slate-500 text-sm mt-1">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div> : <div className="flex flex-col items-center">
            <UploadCloudIcon size={48} className="text-slate-400 mb-4" strokeWidth={1.5} />
            <p className="text-lg font-medium text-slate-700 mb-1">
              {isDragActive ? 'Drop the image here' : 'Drag & drop aircraft image here'}
            </p>
            <p className="text-slate-500 mb-4">or click to browse files</p>
            <div className="flex items-center text-xs text-slate-500">
              <ImageIcon size={14} className="mr-1" />
              <span>Accepted formats: .jpg, .png (Max: 5MB)</span>
            </div>
          </div>}
      </div>
      {error && <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center">
          <AlertCircleIcon size={18} className="mr-2 flex-shrink-0" />
          <span>{error}</span>
        </div>}
      <div className="mt-6 flex justify-center">
        <button onClick={onSubmit} disabled={!file} className={`px-6 py-3 rounded-lg font-medium text-white shadow-sm transition duration-200 ${file ? 'bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700' : 'bg-slate-300 cursor-not-allowed'}`}>
          Analyze Image
        </button>
      </div>
    </div>;
};
export default UploadSection;