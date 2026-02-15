import { Link } from 'react-router-dom';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-[#D00D0D]/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <Link to="/" className="mb-8 inline-flex items-center space-x-1 text-2xl font-bold tracking-tight">
          <span className="text-white">Tech</span>
          <span className="text-[#D00D0D]">4</span>
          <span className="text-white">Growth</span>
        </Link>

        {/* 404 */}
        <h1 className="mt-8 text-8xl font-bold text-[#D00D0D] sm:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Page Not Found</h2>
        <p className="mx-auto mt-4 max-w-md text-gray-400">
          Oops! The page you're looking for doesn't exist or has been moved.
          Don't worry, we're here to help!
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center space-x-2 bg-[#D00D0D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#B00B0B] transition-all duration-300"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto">
          <p className="text-gray-400 mb-4">Need help finding something?</p>
          <a
            href="https://wa.me/919601981524?text=Hi%20Tech4Growth!%20I%20need%20help%20finding%20something%20on%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[#D00D0D] hover:text-red-400 font-semibold"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
