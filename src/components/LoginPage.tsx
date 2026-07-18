import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  function handleLogin() {
    setError("");
    if (!email || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setError("Demo only — no account system yet!");
    }, 1200);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div
      className="min-h-screen w-full flex bg-[#F6F5F0]"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      {/* LEFT PANEL */}
      <div className="hidden md:flex md:w-1/2 bg-[#3E5A34] relative overflow-hidden flex-col justify-between p-12">
        <div className="flex items-center gap-2 text-[#F6F5F0]">
          {/*<Carrot size={22} strokeWidth={2} />*/}
          <span
            style={{ fontFamily: "'Poppins', serif" }}
            className="text-lg font-medium tracking-tight"
          >
            Recipe Generator
          </span>
        </div>
        <div>
          <h1
            style={{ fontFamily: "'Poppins', serif" }}
            className="text-[42px] leading-[1.15] font-medium text-[#F6F5F0] mb-4"
          >
            What's in your
            <br />
            fridge tonight?
          </h1>
          <p className="text-[#D9E0CE] text-[15px] leading-relaxed max-w-xs">
            Tell us what you've got. We'll tell you what to cook.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <h2
            style={{ fontFamily: "'Poppins', serif" }}
            className="text-[28px] font-medium text-[#22261F] mb-1"
          >
            Welcome back
          </h2>
          <p className="text-[#6B6F63] text-sm mb-8">
            Log in to pick up where you left off.
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
            onKeyDown={handleKeyDown}
            placeholder="email@example.com"
            className="w-full px-3.5 py-2.5 mb-4 rounded-lg border border-[#DDE1D3] bg-white text-[15px] outline-none focus:border-[#4B6B3F] focus:ring-2 focus:ring-[#4B6B3F]/15 transition"
          />

          <label
            className="block text-xs font-medium text-[#4A4E43] mb-1.5"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative mb-2">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
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

          <div className="flex justify-end mb-6">
            <button className="text-xs text-[#4B6B3F] hover:underline">
              Forgot password?
            </button>
          </div>

          {error && (
            <p className="text-xs text-[#B5451D] mb-4 -mt-2">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full py-2.5 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition disabled:opacity-70"
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>

          <p className="text-center text-sm text-[#6B6F63] mt-6">
            New here?{" "}
            <Link
              to="/signup"
              className="text-[#4B6B3F] font-medium hover:underline"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
