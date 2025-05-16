
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

const SignupForm: React.FC = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here when we implement Firebase
  };

  return (
    <div className="space-y-4">
      <p className="text-center font-semibold text-gray-600 mb-6">
        Sign up to see photos and videos from your friends.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <Input
            id="emailOrMobile"
            name="emailOrMobile"
            type="text"
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            placeholder="Mobile Number or Email"
            className="w-full px-4 py-3 text-[16px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          />
        </div>
        <div>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 text-[16px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
          />
        </div>
        <div>
          <Input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            placeholder="Username"
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
            autoComplete="new-password"
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

        <div className="text-xs text-gray-500 text-center space-y-2 pt-2">
            <p>
                People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-[#00376B] font-semibold">Learn More</a>
            </p>
            <p>
                By signing up, you agree to our <a href="#" className="text-[#00376B] font-semibold">Terms</a>, <a href="#" className="text-[#00376B] font-semibold">Privacy Policy</a> and <a href="#" className="text-[#00376B] font-semibold">Cookies Policy</a>.
            </p>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6 mt-4 text-[16px]"
          disabled={!emailOrMobile || !fullName || !username || !password}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
