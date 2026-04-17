import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    woreda: "",
    zone: "",
    batchDept: "",
    family: "",
    role: "",
    programAttending: "",
    notAttendingReason: "",
    departmentToServe: "",
    sundaySchoolBefore: "",
    sundaySchoolLevel: "",
    sundaySchoolServed: "",
    sundaySchoolServedDept: "",
  });

  const roles = [
    "ስራ አስፈጻሜ",
    "የንዑስ አገልግሎት",
    "አያት",
    "አባት",
    "እናት",
    "አያትና ንዑስ",
    "አባትና ንዑስ",
    "እናትና ንዑስ",
    "ልጅ",
    "Other",
  ];

  const programs = [
    "የጊዮርጊስ ኮርስ",
    "የፖሊ ግቢ ጉባዔ ኮርስ",
    "የአቡየ ሰንበት ት/ት ኮርስ",
    "አብነት ዜማ",
    "ቅኔ",
    "መዝሙር",
    "መርሃ ግብር አልከታተልም",
    "Other",
  ];

  const departments = [
    "ት/ት ክፍል",
    "ልማት ክፍል",
    "መዝሙር ክፍል",
    "አባላት እንክብካቤ ክፍል",
    "ቋንቋና ልዩ ፍላጎት ክፍል",
    "ባችና መርሃግብራት ማስተባበሪያ ክፍል",
    "ሙያና በጎአድራጎት ክፍል",
    "መረጃና መዛግብት ክፍል",
    "ኦዲትና ኢንስፔክሽን ክፍል",
    "ሒሳብና ንብረት",
    "እያገለገልኩ ነው",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const BASE_URL =
        import.meta.env.VITE_API_URL || "http://localhost:3000/api";
      const response = await fetch(`${BASE_URL}/members/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 flex justify-center items-center bg-[#FBFDFB] dark:bg-[#001720]">
        <div className="text-center p-10 bg-white dark:bg-[#002230] rounded-xl shadow-lg border border-gray-100 dark:border-[#001f2b] max-w-lg">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Thank you for registering. May God bless you!
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#002230] dark:bg-brand-yellow text-white dark:text-[#002230] font-bold rounded-lg hover:opacity-90 transition-opacity"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 sm:px-12 lg:px-24 bg-[#FBFDFB] dark:bg-[#001720] transition-colors duration-500">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#002230] p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-[#001f2b]">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#002230] dark:text-white mb-4">
            {t("registration.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {t("registration.subtitle")}
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.first_name")} *
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.last_name")} *
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.phone")} *
              </label>
              <input
                type="text"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.woreda")}
              </label>
              <input
                type="text"
                name="woreda"
                value={formData.woreda}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.zone")}
              </label>
              <input
                type="text"
                name="zone"
                value={formData.zone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.batch_dept")} *
              </label>
              <input
                type="text"
                name="batchDept"
                required
                value={formData.batchDept}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.family")} *
              </label>
              <input
                type="text"
                name="family"
                required
                value={formData.family}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.role")} *
              </label>
              <select
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                {roles.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.program_attending")}
              </label>
              <select
                name="programAttending"
                value={formData.programAttending}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                {programs.map((p, i) => (
                  <option key={i} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.not_attending_reason")}
              </label>
              <input
                type="text"
                name="notAttendingReason"
                value={formData.notAttendingReason}
                onChange={handleChange}
                disabled={
                  !!formData.programAttending &&
                  formData.programAttending !== "መርሃ ግብር አልከታተልም"
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] disabled:opacity-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.department_to_serve")}
              </label>
              <select
                name="departmentToServe"
                value={formData.departmentToServe}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                {departments.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.sunday_school_before")} *
              </label>
              <select
                name="sundaySchoolBefore"
                required
                value={formData.sundaySchoolBefore}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                <option value="ተምሬአለሁ">Yes (ተምሬአለሁ)</option>
                <option value="አልተማርኩም">No (አልተማርኩም)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.sunday_school_level")}
              </label>
              <select
                name="sundaySchoolLevel"
                value={formData.sundaySchoolLevel}
                onChange={handleChange}
                disabled={formData.sundaySchoolBefore !== "ተምሬአለሁ"}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] disabled:opacity-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                <option value="ቀዳማይ">ቀዳማይ</option>
                <option value="ካልአይ">ካልአይ</option>
                <option value="ሳልሳይ">ሳልሳይ</option>
                <option value="ራብአይ">ራብአይ</option>
                <option value="ሀምሳይ">ሀምሳይ</option>
                <option value="ሳድሳይ">ሳድሳይ</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.sunday_school_served")} *
              </label>
              <select
                name="sundaySchoolServed"
                required
                value={formData.sundaySchoolServed}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              >
                <option value="">-- Select --</option>
                <option value="አገልግያለሁ">Yes (አገልግያለሁ)</option>
                <option value="አላገለገልኩም">No (አላገለገልኩም)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {t("registration.sunday_school_served_dept")}
              </label>
              <input
                type="text"
                name="sundaySchoolServedDept"
                value={formData.sundaySchoolServedDept}
                onChange={handleChange}
                disabled={formData.sundaySchoolServed !== "አገልግያለሁ"}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#001720] disabled:opacity-50 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-yellow focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-4 bg-[#002230] dark:bg-brand-yellow text-white dark:text-[#002230] font-bold tracking-wider rounded-xl hover:opacity-90 transition-opacity uppercase"
            >
              {loading ? "Submitting..." : t("registration.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
