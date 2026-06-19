import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-bold text-primary">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          Oops! The page you're looking for doesn't exist or has
          been moved to another location.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl bg-violet-500 text-white font-medium hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

