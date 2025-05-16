
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  pageType: 'login' | 'signup';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, pageType }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between py-10 px-6 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Language selector */}
        <div className="flex justify-center mb-6">
          <button className="text-gray-500 font-normal flex items-center text-sm">
            English (India)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <main className="w-full mt-16">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-12">
            <div className="instagram-gradient-logo w-16 h-16 rounded-xl p-2 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-lg border-4 border-white flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full" />
              </div>
            </div>
          </div>
          
          {children}
        </main>
      </div>

      <div className="w-full max-w-md">
        {pageType === 'login' ? (
          <div className="mt-6 w-full">
            <Link to="/signup" className="w-full flex justify-center py-3.5 px-4 border border-gray-300 rounded-lg text-blue-500 font-medium">
              Create new account
            </Link>
          </div>
        ) : null}

        {/* Meta Footer */}
        <div className="flex justify-center mt-8">
          <span className="text-gray-500 flex items-center gap-1 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 15V9c0-6 8-6 8-6s8 0 8 6v6c0 6-8 14-8 14s-8-8-8-14Z" />
            </svg>
            Meta
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
