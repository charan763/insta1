
import React from 'react';
import AuthLayout from '@/components/AuthLayout';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout pageType="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
