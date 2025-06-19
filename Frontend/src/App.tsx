import React, { useState } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import ProcessingState from './components/ProcessingState';
import ResultsDisplay from './components/ResultsDisplay';
import Footer from './components/Footer';
export function App() {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const handleFileUpload = uploadedFile => {
    setFile(uploadedFile);
    setError(null);
  };
  const handleSubmit = async () => {
    if (!file) {
      setError('Please select an image to analyze');
      return;
    }
    setIsProcessing(true);
    setError(null);
    // Create FormData for API request
    const formData = new FormData();
    formData.append('image', file);
    try {
      // Actual API call to backend
      const response = await fetch('http://127.0.0.1:5000/detect', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to analyze image');
      }
      const blob = await response.blob();
      setResult({
        originalImage: URL.createObjectURL(file),
        processedImage: URL.createObjectURL(blob)
      });
      setIsProcessing(false);
    } catch (err) {
      setError('An error occurred while processing the image. Please try again.');
      setIsProcessing(false);
    }
  };
  const handleReset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    setIsProcessing(false);
  };
  return <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {!result && !isProcessing && <UploadSection file={file} onFileUpload={handleFileUpload} onSubmit={handleSubmit} error={error} />}
        {isProcessing && <ProcessingState />}
        {result && <ResultsDisplay originalImage={result.originalImage} processedImage={result.processedImage} onReset={handleReset} />}
      </main>
      <Footer />
    </div>;
}