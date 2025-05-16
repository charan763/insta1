
import React from 'react';
import AuthLayout from '@/components/AuthLayout';
import SignupForm from '@/components/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <AuthLayout pageType="signup">
      <SignupForm />
    </AuthLayout>
  );
};

export default SignupPage;
