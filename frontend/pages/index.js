import { useState } from 'react';
import Head from 'next/head';
import PredictionForm from '../components/PredictionForm';
import Header from '../components/Header';
import ResultDisplay from '../components/ResultDisplay';
import axios from "axios";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      
      const response = await axios.post("http://127.0.0.1:5000/analyze", formData);
      
      const apiResult = {
        prediction: response.data.prediction,
        probability: response.data.probability
      };
      
      setResult(apiResult);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while processing your request. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Credit Risk Prediction | NITK</title>
        <meta name="description" content="Credit Risk prediction model - IT464 Course Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto p-4">
        <Header />
        
        {!showForm && !result && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
            >
              Check Prediction
            </button>
          </div>
        )}

        {showForm && !result && (
          <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} />
        )}

        {result && (
          <div className="mt-8">
            <ResultDisplay result={result} />
            <div className="mt-8 flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowForm(true);
                  setResult(null);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg"
              >
                Try Another Prediction
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setResult(null);
                }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="max-w-4xl mx-auto p-4 text-center text-gray-500 text-sm mt-12">
        <p>© 2025 Department of Information Technology, NITK Surathkal</p>
      </footer>
    </div>
  );
}