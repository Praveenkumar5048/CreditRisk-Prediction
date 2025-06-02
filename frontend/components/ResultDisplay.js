export default function ResultDisplay({ result }) {
  const { prediction, probability, optimized_loan_amnt } = result;
  console.log(result)
  const isPredictionApproved = prediction === "Approved";
  const probabilityPercentage = isPredictionApproved
    ? ((1 - probability) * 100).toFixed(2) + "%"
    : (probability * 100).toFixed(2) + "%";

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Prediction Result</h2>

      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <div
          className={`text-3xl font-bold mb-4 ${
            isPredictionApproved ? "text-green-600" : "text-red-600"
          }`}
        >
          {prediction}
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-2">Default Probability:</p>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div
              className={`h-6 rounded-full ${
                isPredictionApproved ? "bg-green-500" : "bg-red-500"
              }`}
              style={{ width: probabilityPercentage }}
            ></div>
          </div>
          <p className="text-gray-600 mt-2">{probabilityPercentage}</p>
        </div>

        {!isPredictionApproved && optimized_loan_amnt !== undefined && (
          <div className="mb-6 bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <p className="text-blue-700 text-sm">
              💡 You may be eligible for a loan amount of:{" "}
              <span className="font-semibold ml-1">
              ₹ {optimized_loan_amnt}
              </span>
            </p>
          </div>
        )}

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-gray-700">
          <p>
            <strong>Disclaimer:</strong> This is only a prediction based on the
            provided data and the underlying machine learning model. Consult with
            financial advisors for making real financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
