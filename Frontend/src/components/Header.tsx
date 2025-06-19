import React from 'react';
const Header = () => {
  return <header className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-8 px-4 shadow-md">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          AI-Powered Aircraft Deformation Detection
        </h1>
        <p className="text-lg text-sky-200">
          Upload an image to detect structural anomalies automatically
        </p>
      </div>
    </header>;
};
export default Header;