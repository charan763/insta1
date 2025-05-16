
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <div className="text-center max-w-md">
        <img src='/image.jpg' alt='Instagram Logo' className="w-84 h-28 mx-auto mb-6" />
          
          <h1 className="text-4xl font-bold mb-6 font-instagram">Instagram</h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with friends and share your moments
          </p>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-6">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full border-gray-300 text-blue-500 hover:bg-gray-50 rounded-lg py-6">
            <Link to="/signup">Create new account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
