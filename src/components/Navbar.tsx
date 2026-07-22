import { Link, useNavigate } from "react-router-dom";
/*import { Carrot } from "lucide-react";*/

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className="w-full flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-[#EAE8DE] sticky top-0 z-50"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 text-[#3E5A34]">
        {/*<Carrot size={20} strokeWidth={2} />*/}
        <span className="text-base font-semibold tracking-tight">Recipe Generator</span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-12 text-sm text-[#4A4E43]">
        <Link to="/" className="hover:text-[#3E5A34] transition">
          Home
        </Link>
        <Link to="/discover" className="hover:text-[#3E5A34] transition">
          Discover
        </Link>
        <Link to="/app" className="hover:text-[#3E5A34] transition">
          Generate
        </Link>
      </div>

      {/* Login button */}
      <button
        onClick={() => navigate("/login")}
        className="px-8 py-3 rounded-lg bg-[#4B6B3F] text-white text-sm font-medium hover:bg-[#3E5A34] active:scale-[0.99] transition"
      >
        Login
      </button>
    </nav>
  );
}