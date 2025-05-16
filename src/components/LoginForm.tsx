
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook } from 'lucide-react';

const LoginForm: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="username" className="sr-only">Phone number, username, or email</Label>
        <Input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          placeholder="Phone number, username, or email"
          className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
        />
      </div>

      <div>
        <Label htmlFor="password" className="sr-only">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="Password"
          className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
        />
      </div>

      <Button type="submit" className="w-full bg-[#0095F6] hover:bg-[#0083D3] text-white">
        Log In
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500 font-semibold">OR</span>
        </div>
      </div>

      <div>
        <Button variant="link" className="w-full text-[#385185] hover:text-[#385185]/90 font-semibold">
          <Facebook className="mr-2 h-5 w-5" />
          Log in with Facebook
        </Button>
      </div>

      <div className="text-center">
        <a href="#" className="text-xs text-[#00376B] hover:underline">
          Forgot password?
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
