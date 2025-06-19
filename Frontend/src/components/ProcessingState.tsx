import React from 'react';
import { LoaderIcon, PlaneIcon } from 'lucide-react';
const ProcessingState = () => {
  return <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center relative overflow-hidden">
      {/* Animated Planes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-8 top-1/4 animate-[fly-diagonal_5s_ease-in-out_infinite]">
          <PlaneIcon size={24} className="text-sky-400 transform rotate-45" />
        </div>
        <div className="absolute -left-8 top-2/3 animate-[fly-diagonal_7s_ease-in-out_infinite_1s]">
          <PlaneIcon size={20} className="text-blue-400 transform rotate-45" />
        </div>
        <div className="absolute -right-8 top-1/3 animate-[fly-diagonal-reverse_6s_ease-in-out_infinite_0.5s]">
          <PlaneIcon size={28} className="text-sky-300 transform -rotate-45" />
        </div>
      </div>
      {/* Progress Bar */}
      <div className="mb-6 w-full max-w-md relative z-10">
        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 animate-pulse rounded-full w-3/4"></div>
        </div>
      </div>
      <div className="flex flex-col items-center relative z-10">
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-sky-50 flex items-center justify-center">
            <LoaderIcon size={32} className="text-sky-600 animate-spin" strokeWidth={1.5} />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-3 rounded-full">
            AI Processing
          </div>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">
          Analyzing Aircraft Image
        </h3>
        <p className="text-slate-600 text-center max-w-md">
          Our AI system is processing your image to detect structural
          deformations. This may take a moment...
        </p>
      </div>
    </div>;
};
export default ProcessingState;