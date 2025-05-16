
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here when we implement Firebase
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg overflow-hidden">
        <Input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
          placeholder="Username, email address or mobile number"
          className="w-full px-4 py-3 text-[16px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
        />
      </div>

      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
          placeholder="Password"
          className="w-full px-4 py-3 text-[16px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
        />
        {password && (
          <button 
            type="button" 
            className="absolute right-3 top-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-500" />
            ) : (
              <Eye className="h-5 w-5 text-gray-500" />
            )}
          </button>
        )}
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6 text-[16px]"
        disabled={!username || !password}
      >
        Log in
      </Button>

      <div className="text-center mt-4">
        <Link to="#" className="text-blue-900 text-sm">
          Forgotten password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
