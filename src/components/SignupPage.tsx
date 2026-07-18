import { useState } from "react";
import { Eye, EyeOff, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function handleSignup() {
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Fill in every field to continue.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("Demo only — no account system yet!");
    }, 1200);
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#F6F5F0] px-7"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-[#EAE8DE] p-8">
        {/* Badge */}
        <div className="w-11 h-11 rounded-full bg-[#3E5A34] flex items-center justify-center mb-5">
          <Sprout size={20} className="text-[#F6F5F0]" />
        </div>

        <h2 className="text-[26px] font-medium text-[#22261F] mb-1">
          Create an account
        </h2>
        <p className="text-[#6B6F63] text-sm mb-7">
          Sign up to start finding recipes from what you've got.
        </p>

        <label
          className="block text-xs font-medium text-[#4A4E43] mb-1.5"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@example.com"
          className="w-full px-3.5 py-2.5 mb-4 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
        />

        <label
          className="block text-xs font-medium text-[#4A4E43] mb-1.5"
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative mb-4">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 pr-10 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8D7F] hover:text-[#4B6B3F] transition"
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        <label
          className="block text-xs font-medium text-[#4A4E43] mb-1.5"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          id="confirmPassword"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full px-3.5 py-2.5 mb-2 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
        />

        {error && <p className="text-xs text-[#B5451D] mb-4 mt-2">{error}</p>}

        <button
          onClick={handleSignup}
          disabled={isLoading}
          className="w-full py-2.5 mt-4 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition disabled:opacity-70"
        >
          {isLoading ? "Creating account..." : "Create account"}
        </button>

        <p className="text-center text-sm text-[#6B6F63] mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-[#4B6B3F] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
