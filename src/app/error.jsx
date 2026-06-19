"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-8xl font-bold text-red-500">
          500
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Something Went Wrong
        </h2>

        <p className="text-gray-500 mt-4">
          An unexpected error occurred while loading this page.
          Please try again.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl bg-primary text-white"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-xl border"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

