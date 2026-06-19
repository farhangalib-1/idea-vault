import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center mt-6">
          <h1 className="text-3xl font-bold">
            Forgot Password?
          </h1>

          <p className="text-gray-500 mt-3">
            No worries! Enter your email address and we'll help you
            reset your password.
          </p>
        </div>
        <div className="mt-8">
          <label className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            className="w-full mt-5 py-3 rounded-xl bg-violet-500 text-white font-medium hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </div>
        <div className="text-center mt-6">
          <Link
            href="/login"
            className="text-primary font-medium hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

