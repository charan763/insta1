
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { auth } from '@/firebaseConfig'; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast"; // Import useToast for notifications
// import { useNavigate } from 'react-router-dom'; // If you want to redirect after login

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState(''); // Changed from username to email for clarity with Firebase
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  // const navigate = useNavigate(); // Uncomment if you want to redirect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: "Login Successful!",
        description: "Welcome back!",
      });
      // TODO: Navigate to a protected route, e.g., home feed
      // navigate('/home'); // Example redirect
      // For now, just clear form
      setEmail('');
      setPassword('');

    } catch (error: any) {
      console.error("Error signing in:", error);
      let errorMessage = "Failed to log in. Please check your credentials.";
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid email or password.";
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = "Please enter a valid email address.";
      }
      toast({
        title: "Login Failed",
        description: errorMessage,
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
          id="email" // Changed from username
          name="email" // Changed from username
          type="text" // Can be "email" type for better browser validation
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email" // Changed from username
          required
          placeholder="Email address" // Updated placeholder
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

