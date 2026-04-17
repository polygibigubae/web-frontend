import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/polyGG logo blue.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.message || "Failed to sign up");
        // If validation errors are returned as an array, join them
        if (data.errors && Array.isArray(data.errors)) {
          setError(data.errors.map((e) => e.msg || e.message).join(", "));
        }
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#001720] flex items-center justify-center p-4 relative overflow-hidden transition-colors duration-500 py-12">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
        <div
          className="absolute top-20 -left-20 w-80 h-80 bg-brand-dark/10 dark:bg-brand-yellow/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md bg-white dark:bg-[#002230] rounded-3xl shadow-2xl overflow-hidden border border-zinc-100 dark:border-white/5">
        <div className="p-10">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 object-contain mx-auto transition-transform hover:scale-110 duration-500"
              />
            </Link>
            <h1 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
              Create Account
            </h1>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Join the spiritual community
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/50 rounded-2xl text-red-600 dark:text-red-400 text-sm font-medium text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5 focus-within:z-10 relative">
                <label className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-4 py-3.5 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-brand-yellow focus:bg-white dark:focus:bg-[#002230] transition-all outline-none"
                  placeholder="John"
                />
              </div>
              <div className="space-y-1.5 focus-within:z-10 relative">
                <label className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-4 py-3.5 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-brand-yellow focus:bg-white dark:focus:bg-[#002230] transition-all outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-1.5 focus-within:z-10 relative">
              <label className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-4 py-3.5 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-brand-yellow focus:bg-white dark:focus:bg-[#002230] transition-all outline-none"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5 focus-within:z-10 relative">
              <label className="text-[11px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-4 py-3.5 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-500 focus:ring-2 focus:ring-brand-yellow focus:bg-white dark:focus:bg-[#002230] transition-all outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 bg-brand-dark dark:bg-brand-yellow text-white dark:text-zinc-900 font-bold text-[13px] tracking-wide py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-zinc-100 dark:border-zinc-800 pt-6">
            <p className="text-[13px] font-medium text-zinc-600 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-brand-dark dark:text-brand-yellow font-bold hover:underline transition-all"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
