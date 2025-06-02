import { useState } from 'react';

export default function PredictionForm({ onSubmit, isLoading, setFormData, formData }) {
  
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" || ["loan_grade", "cb_person_default_on_file"].includes(name) ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age (years)</label>
            <input
              type="number"
              name="person_age"
              value={formData.person_age}
              max="85"
              onChange={handleChange}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Income (₹)</label>
            <input
              type="number"
              name="person_income"
              value={formData.person_income}
              onChange={handleChange}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employment Length (years)</label>
            <input
              type="number"
              name="person_emp_length"
              value={formData.person_emp_length}
              max="40"
              onChange={handleChange}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit Grade</label>
            <select
              name="loan_grade"
              value={formData.loan_grade}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value={0}>Grade A - Excellent</option>
              <option value={1}>Grade B - Very Good</option>
              <option value={2}>Grade C - Good</option>
              <option value={3}>Grade D - Fair</option>
              <option value={4}>Grade E - Poor</option>
              <option value={5}>Grade F - Very Poor</option>
              <option value={6}>Grade G - Worst</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (₹)</label>
            <input
              type="number"
              name="loan_amnt"
              value={formData.loan_amnt}
              onChange={handleChange}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
            <input
              type="number"
              name="loan_int_rate"
              value={formData.loan_int_rate}
              onChange={handleChange}
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Default History</label>
            <select
              type="number"
              name="cb_person_default_on_file"
              value={formData.cb_person_default_on_file}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value={0}>No</option>
              <option value={1}>Yes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Credit History Length (years)</label>
            <input
              type="number"
              name="cb_person_cred_hist_length"
              value={formData.cb_person_cred_hist_length}
              onChange={handleChange}
              max="30"
              className="text-black w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Home Ownership</label>
            <select
              name="person_home_ownership"
              value={formData.person_home_ownership}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="OWN">Own</option>
              <option value="RENT">Rent</option>
              <option value="MORTGAGE">Mortgage</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Loan Intent</label>
            <select
              name="loan_intent"
              value={formData.loan_intent}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="MEDICAL">Medical</option>
              <option value="EDUCATION">Education</option>
              <option value="DEBTCONSOLIDATION">Debt Consolidation</option>
              <option value="HOMEIMPROVEMENT">Home Improvement</option>
              <option value="PERSONAL">Personal</option>
              <option value="VENTURE">Venture</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : 'Get Prediction'}
          </button>
        </div>
      </form>
    </div>
  );
}