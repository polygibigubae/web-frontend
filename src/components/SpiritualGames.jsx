import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SpiritualGames = () => {
  const { t } = useTranslation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: "Who wrote the Gospel of Luke?",
      answerOptions: [
        { answerText: "Matthew", isCorrect: false },
        { answerText: "Mark", isCorrect: false },
        { answerText: "Luke", isCorrect: true },
        { answerText: "John", isCorrect: false },
      ],
    },
    {
      questionText:
        'What does "Wotethasey menfeseye be\'amlakiye wemedhaniye" mean?',
      answerOptions: [
        { answerText: "My soul magnifies the Lord", isCorrect: false },
        {
          answerText: "And my spirit hath rejoiced in God my Saviour",
          isCorrect: true,
        },
        { answerText: "For he hath regarded the low estate", isCorrect: false },
        {
          answerText: "From henceforth all generations shall call me blessed",
          isCorrect: false,
        },
      ],
    },
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="pt-24 pb-12 px-10 xl:px-20 min-h-screen bg-white dark:bg-[#001f2b] transition-colors">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
          {t("marys_joy_dropdown.games.name", "Spiritual Games & Quizzes")}
        </h1>

        {showScore ? (
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#002230] border border-zinc-100 dark:border-white/5 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Quiz Completed!
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
              You scored {score} out of {questions.length}
            </p>
            {score === questions.length && (
              <div className="mb-6 py-3 px-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl font-bold">
                Congratulations! You are a winner! 🎉
              </div>
            )}
            <button
              onClick={restartQuiz}
              className="px-6 py-3 font-bold text-white bg-[#002230] dark:bg-brand-yellow dark:text-zinc-900 hover:bg-black dark:hover:bg-amber-400 rounded-xl transition-all shadow-sm"
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#002230] border border-zinc-100 dark:border-white/5 shadow-sm">
            <div className="mb-6">
              <span className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Question {currentQuestion + 1} / {questions.length}
              </span>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-2">
                {questions[currentQuestion].questionText}
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                    className="w-full text-left p-4 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 hover:border-brand-dark dark:hover:border-brand-yellow hover:bg-zinc-100 dark:hover:bg-[#002B36] font-medium text-zinc-800 dark:text-zinc-200 transition-colors"
                  >
                    {answerOption.answerText}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpiritualGames;
