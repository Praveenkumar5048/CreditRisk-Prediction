export default function Header() {
  return (
    <header className="text-center py-12 px-4">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg blur-3xl opacity-20"></div>
        <h1 className="relative text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">
          Credit Risk Prediction Model
        </h1>
      </div>
      
      <p className="text-xl text-blue-800 mb-6 font-semibold">
        Make Smarter Lending Decisions with AI
      </p>
      
      <div className="max-w-2xl mx-auto relative">
        <p className="text-gray-600 leading-relaxed mb-12">
          Our advanced machine learning model analyzes multiple factors to assess credit risk and provide instant loan approval predictions. Get personalized insights and optimize your loan amount for better approval chances.
        </p>
        
        <div className="flex justify-center gap-8 text-center">
          <div className="flex-1 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Instant Analysis</h3>
            <p className="text-sm text-gray-600">Get immediate predictions based on your data</p>
          </div>
          
          <div className="flex-1 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Smart Optimization</h3>
            <p className="text-sm text-gray-600">Get suggestions for optimal loan amounts</p>
          </div>
          
          <div className="flex-1 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Secure & Private</h3>
            <p className="text-sm text-gray-600">Your data is protected and confidential</p>
          </div>
        </div>
      </div>
    </header>
  );
}