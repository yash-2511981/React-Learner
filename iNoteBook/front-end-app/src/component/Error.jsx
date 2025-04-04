import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="h-24 w-24 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="mt-8 text-center text-3xl font-extrabold text-white tracking-tight">
            Oops! Something went wrong
          </h1>
          
          <p className="mt-4 text-center text-slate-300">
            We've encountered an unexpected error. Don't worry, it's not your fault! Our team has been notified and we're working to fix the issue.
          </p>

          <div className="mt-8 space-y-3">
            <button 
              onClick={() => navigate('/')}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
            >
              Return to Homepage
            </button>
            
            <button 
              onClick={() => window.location.reload()}
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-slate-200 bg-slate-700 hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
          
          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-sm text-slate-400 text-center">
              Error Code: <span className="font-mono">500-INTERNAL-SERVER-ERROR</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;