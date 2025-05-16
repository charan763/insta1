
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook } from 'lucide-react';

const SignupForm: React.FC = () => {
  return (
    <div className="space-y-4">
       <p className="text-center font-semibold text-gray-500 mb-4">
        Sign up to see photos and videos from your friends.
      </p>
      <Button variant="default" className="w-full bg-[#0095F6] hover:bg-[#0083D3] text-white font-semibold">
        <Facebook className="mr-2 h-5 w-5" />
        Log in with Facebook
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500 font-semibold">OR</span>
        </div>
      </div>

      <form className="space-y-3">
        <div>
          <Label htmlFor="emailOrMobile" className="sr-only">Mobile Number or Email</Label>
          <Input
            id="emailOrMobile"
            name="emailOrMobile"
            type="text"
            required
            placeholder="Mobile Number or Email"
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="fullName" className="sr-only">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Full Name"
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="username" className="sr-only">Username</Label>
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            placeholder="Username"
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="password" className="sr-only">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            placeholder="Password"
            className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
          />
        </div>

        <div className="text-xs text-gray-500 text-center space-y-2 pt-2">
            <p>
                People who use our service may have uploaded your contact information to Instagram. <a href="#" className="text-[#00376B] font-semibold">Learn More</a>
            </p>
            <p>
                By signing up, you agree to our <a href="#" className="text-[#00376B] font-semibold">Terms</a>, <a href="#" className="text-[#00376B] font-semibold">Privacy Policy</a> and <a href="#" className="text-[#00376B] font-semibold">Cookies Policy</a>.
            </p>
        </div>

        <Button type="submit" className="w-full bg-[#0095F6] hover:bg-[#0083D3] text-white mt-4">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
