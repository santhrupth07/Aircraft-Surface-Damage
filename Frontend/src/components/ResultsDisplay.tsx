import React from 'react';
import { CheckCircleIcon, RotateCcwIcon } from 'lucide-react';
const ResultsDisplay = ({
  originalImage,
  processedImage,
  onReset
}) => {
  return <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <CheckCircleIcon size={24} className="text-green-500 mr-3" />
        <h2 className="text-2xl font-semibold text-slate-800">
          Analysis Complete
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <div className="bg-slate-100 rounded-lg p-3 mb-3">
            <h3 className="text-slate-700 font-medium mb-2">Original Image</h3>
            <div className="bg-white rounded border border-slate-200 p-2 shadow-sm">
              <img src={originalImage} alt="Original aircraft" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-slate-100 rounded-lg p-3 mb-3">
            <h3 className="text-slate-700 font-medium mb-2">Processed Image</h3>
            <div className="bg-white rounded border border-slate-200 p-2 shadow-sm">
              <img src={processedImage} alt="Processed aircraft with deformation detection" className="w-full h-auto rounded" />
              <div className="mt-2 p-2 bg-blue-50 rounded border border-blue-100 text-xs text-blue-800">
                <p className="font-medium">AI Detection Results</p>
                <p className="mt-1">
                  Deformation areas highlighted in red. Severity score: 0.87
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button onClick={onReset} className="flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium shadow-sm transition duration-200">
          <RotateCcwIcon size={18} className="mr-2" />
          Upload Another Image
        </button>
      </div>
    </div>;
};
export default ResultsDisplay;