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
  
  const [formData, setFormData] = useState({
    person_age: "",
    person_income: "",
    person_emp_length: "",
    loan_grade: 0,
    loan_amnt: "",
    loan_int_rate: "",
    loan_percent_income: null,
    cb_person_default_on_file: 0,
    cb_person_cred_hist_length: "",
    person_home_ownership: "OWN",
    loan_intent: "MEDICAL"
  });

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://creditrisk-prediction.onrender.com/analyze", formData);
      
      const apiResult = {
        prediction: response.data.prediction,
        probability: response.data.probability,
        optimized_loan_amnt: response.data.optimized_loan_amnt
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/30 to-indigo-50/40"></div>
      <div className="relative">
        <Head>
          <title>Credit Risk Prediction | Smart Lending Decisions</title>
          <meta name="description" content="Make smarter lending decisions with our AI-powered credit risk prediction model. Get instant loan approval predictions and optimize your loan amount." />
          <link rel="icon" href="/favicon.ico" />
          <style>{`
            .bg-grid-pattern {
              background-image: linear-gradient(to right, #93c5fd 1px, transparent 1px),
                              linear-gradient(to bottom, #93c5fd 1px, transparent 1px);
              background-size: 40px 40px;
            }
          `}</style>
        </Head>

        <main className="max-w-5xl mx-auto px-4 relative z-10">
          <Header />
          
          {!showForm && !result && (
            <div className="mt-12 mb-20 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <button
                  onClick={() => setShowForm(true)}
                  className="relative bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                >
                  Start Your Assessment
                </button>
              </div>
              <p className="mt-4 text-gray-600 text-sm">
                Takes only a few minutes • Get instant results • No credit check required
              </p>
            </div>
          )}

          {showForm && !result && (
            <div className="mt-8 mb-20">
              <PredictionForm onSubmit={handleSubmit} isLoading={isLoading} setFormData={setFormData} formData={formData}/>
            </div>
          )}

          {result && (
            <div className="mt-8 mb-20">
              <ResultDisplay result={result} />
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => {
                    setShowForm(true);
                    setResult(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg"
                >
                  Try Another Assessment
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setResult(null);
                  }}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg shadow-md transition-all hover:shadow-lg"
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </main>

        <footer className="max-w-5xl mx-auto p-8 text-center relative z-10">
          <div className="border-t pt-8">
            <p className="text-gray-600 text-sm">
              © 2025 Credit Risk Prediction | Made with ❤️ by praveen
            </p>
            <p className="text-gray-500 text-xs mt-2">
              This is a prediction model. Please consult with financial advisors for actual lending decisions.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

