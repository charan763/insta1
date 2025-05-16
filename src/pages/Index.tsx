
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Welcome!</h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a clone of Instagram's login and signup flow.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center">
          <Button asChild size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            <Link to="/login">Go to Login Page</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50">
            <Link to="/signup">Go to Signup Page</Link>
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-12">
          Firebase integration for backend functionality will be the next step.
        </p>
      </div>
    </div>
  );
};

export default Index;
