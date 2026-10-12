import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactQA = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending to backend
    setSubmitted(true);
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <div className="pt-24 pb-12 px-10 xl:px-20 min-h-screen bg-white dark:bg-[#001f2b] transition-colors">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
          {t("marys_joy_dropdown.qa.name", "Q&A & Contact")}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          {t(
            "marys_joy_dropdown.qa.desc",
            "Ask your spiritual questions and get in touch. We will reply to you as soon as possible.",
          )}
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
            <h3 className="text-lg font-bold text-green-800 dark:text-green-400 mb-2">
              Message Sent!
            </h3>
            <p className="text-green-700 dark:text-green-500">
              Thank you for reaching out. We have received your question and
              will get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 font-bold text-green-800 dark:text-green-400 hover:underline"
            >
              Ask another question
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#001720] text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Email or Phone
              </label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#001720] text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                placeholder="How can we reach you?"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                Your Spiritual Question
              </label>
              <textarea
                required
                rows="5"
                value={formData.question}
                onChange={(e) =>
                  setFormData({ ...formData, question: e.target.value })
                }
                className="w-full p-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-[#001720] text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-yellow resize-none"
                placeholder="Ask anything..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 font-bold text-white bg-[#002230] dark:bg-brand-yellow dark:text-zinc-900 hover:bg-black dark:hover:bg-amber-400 rounded-xl transition-all shadow-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactQA;
