import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-heading text-6xl text-gray-dark mb-2">404</h1>
        <p className="font-heading text-2xl text-gray-dark mb-4">Page Not Found</p>
        <p className="font-body text-sm text-gray-dark mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-primary text-white font-body text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
