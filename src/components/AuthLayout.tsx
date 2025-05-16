
import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  pageType: 'login' | 'signup';
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, pageType }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <main className="w-full max-w-md space-y-8">
        <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
          <div className="flex justify-center mb-6">
            {/* Instagram Logo - text for now */}
            <h1 className="text-4xl font-['Grand_Hotel',_cursive] text-center">Instagram</h1>
          </div>
          {children}
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm text-center">
          {pageType === 'login' ? (
            <p className="text-sm text-gray-900">
              Don't have an account?{' '}
              <a href="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
                Sign up
              </a>
            </p>
          ) : (
            <p className="text-sm text-gray-900">
              Have an account?{' '}
              <a href="/login" className="font-semibold text-blue-600 hover:text-blue-500">
                Log in
              </a>
            </p>
          )}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-900">Get the app.</p>
          <div className="flex justify-center space-x-3 mt-3">
            {/* Placeholder for app store images/links */}
            <a href="#" className="text-sm text-blue-600 hover:underline">App Store</a>
            <a href="#" className="text-sm text-blue-600 hover:underline">Google Play</a>
          </div>
        </div>
      </main>
      <footer className="mt-10 text-center text-xs text-gray-500 space-x-3">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact Uploading & Non-Users</span>
        <span>Meta Verified</span>
      </footer>
    </div>
  );
};

export default AuthLayout;
