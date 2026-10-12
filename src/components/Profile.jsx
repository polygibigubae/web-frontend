import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#001720] flex justify-center p-4 py-20 relative overflow-hidden transition-colors duration-500">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-dark/10 dark:bg-brand-yellow/10 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-2 tracking-tight">
            My Profile
          </h1>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Avatar & Basic Info */}
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-[#002230] rounded-3xl shadow-xl border border-zinc-100 dark:border-white/5 p-8 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-brand-yellow dark:border-brand-dark bg-zinc-100 dark:bg-[#001720] flex items-center justify-center mb-6 shadow-inner">
                <span className="text-6xl font-bold text-zinc-400 dark:text-zinc-500 uppercase">
                  {user.firstName
                    ? user.firstName[0]
                    : user.email
                      ? user.email[0]
                      : "U"}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white capitalize">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                {user.role || "Member"}
              </p>

              <div className="w-full mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                      Status
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-bold text-[11px] uppercase tracking-wider">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500 dark:text-zinc-400 font-medium">
                      Joined
                    </span>
                    <span className="text-zinc-900 dark:text-white font-semibold">
                      {user.createdAt
                        ? new Date(user.createdAt).toLocaleDateString()
                        : "Present"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Info Form */}
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-[#002230] rounded-3xl shadow-xl border border-zinc-100 dark:border-white/5 p-10 h-full">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-8 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                Personal Information
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 relative">
                    <label className="text-[12px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={user.firstName || ""}
                      className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-5 py-4 text-sm font-bold placeholder-zinc-400 outline-none opacity-80 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-2 relative">
                    <label className="text-[12px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={user.lastName || ""}
                      className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-5 py-4 text-sm font-bold placeholder-zinc-400 outline-none opacity-80 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative mt-6">
                  <label className="text-[12px] font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    disabled
                    value={user.email || ""}
                    className="w-full bg-zinc-50 dark:bg-[#001720] border-none text-zinc-900 dark:text-white rounded-2xl px-5 py-4 text-sm font-bold placeholder-zinc-400 outline-none opacity-80 cursor-not-allowed"
                  />
                </div>

                <div className="pt-8">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 italic">
                    * If you need to update your name or email, please contact
                    support or an administrator.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
