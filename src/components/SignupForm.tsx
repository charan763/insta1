
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';
import { auth, database } from '@/firebaseConfig'; // Import Firebase auth and database
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useToast } from "@/components/ui/use-toast"; // Import useToast for notifications

const SignupForm: React.FC = () => {
  const [emailOrMobile, setEmailOrMobile] = useState(''); // Let's assume this will be email for now
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // For Firebase Auth, we'll use the emailOrMobile field as email
    // You might want to add validation to ensure it's a valid email
    const email = emailOrMobile; 

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user info in Realtime Database
      await set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        fullName: fullName,
        createdAt: new Date().toISOString()
      });

      toast({
        title: "Account Created!",
        description: "You've successfully signed up. Please log in.",
      });
      // Optionally, redirect to login page or directly log the user in
      // For now, we'll just clear the form
      setEmailOrMobile('');
      setFullName('');
      setUsername('');
      setPassword('');

    } catch (error: any) {
      console.error("Error signing up:", error);
      let errorMessage = "Failed to create account. Please try again.";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "This email address is already in use.";
      } else if (error.code === 'auth/weak-password') {
        errorMessage = "Password is too weak. It should be at least 6 characters.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      }
      toast({
        title: "Signup Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
            type="text" // Changed to text, assuming it can be email or mobile. Firebase auth needs email.
            value={emailOrMobile}
            onChange={(e) => setEmailOrMobile(e.target.value)}
            required
            placeholder="Email address" // Clarified placeholder for Firebase Auth
            className="w-full px-4 py-3 text-[16px] border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
          />
          {password && (
            <button 
              type="button" 
              className="absolute right-3 top-3"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isLoading}
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
          disabled={!emailOrMobile || !fullName || !username || !password || isLoading}
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;

