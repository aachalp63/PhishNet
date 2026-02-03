'use client';
import { useState } from 'react';

const quizData = [
  {
    question: "Which of these is a sign of a phishing email?",
    options: ["Official email signature", "Spelling mistakes", "Personalized greeting"],
    answer: "Spelling mistakes",
  },
  {
    question: "What should you do if you suspect a phishing link?",
    options: ["Click it", "Report to IT", "Ignore it"],
    answer: "Report to IT",
  },
  {
    question: "Which protocol helps prevent email spoofing?",
    options: ["SMTP", "DKIM", "POP3"],
    answer: "DKIM",
  },
  {
    question: "Where should you check the sender's domain?",
    options: ["In the subject", "In the email body", "In the email header"],
    answer: "In the email header",
  },
  {
    question: "Which of the following is a red flag?",
    options: ["Generic greeting", "Personalized greeting", "Company logo"],
    answer: "Generic greeting",
  },
  {
    question: "What's the safest way to visit a website mentioned in an email?",
    options: ["Click the link", "Search it manually", "Use a QR code"],
    answer: "Search it manually",
  },
  {
    question: "Which action can protect you from phishing?",
    options: ["Enabling 2FA", "Reusing passwords", "Opening attachments"],
    answer: "Enabling 2FA",
  },
  {
    question: "Why do phishing emails create urgency?",
    options: ["To inform", "To entertain", "To trick users into quick action"],
    answer: "To trick users into quick action",
  },
  {
    question: "A trusted organization will usually:",
    options: ["Ask for passwords", "Send urgent threats", "Never ask for personal info via email"],
    answer: "Never ask for personal info via email",
  },
  {
    question: "Hovering over a link helps because:",
    options: ["It opens the link", "It reveals the real URL", "It downloads the file"],
    answer: "It reveals the real URL",
  },
  {
    question: "You receive an email with a strange attachment. What should you do?",
    options: ["Download it", "Open and inspect", "Report to IT"],
    answer: "Report to IT",
  },
  {
    question: "Which tool helps detect phishing sites?",
    options: ["Antivirus", "AI URL analyzer", "Paint"],
    answer: "AI URL analyzer",
  },
  {
    question: "Phishing campaigns often target:",
    options: ["Everyone", "Only IT staff", "Only interns"],
    answer: "Everyone",
  },
  {
    question: "One way to verify a suspicious email is to:",
    options: ["Call the sender directly", "Reply to it", "Forward it"],
    answer: "Call the sender directly",
  },
  {
    question: "A URL with misspellings or extra characters may be:",
    options: ["A trusted site", "A phishing attempt", "A blog"],
    answer: "A phishing attempt",
  },
];

export default function TrainingPage() {
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === quizData[current].answer) setScore(score + 1);
    const next = current + 1;
    if (next < quizData.length) setCurrent(next);
    else setShowResult(true);
  };

  const handleReset = () => {
    setScore(0);
    setCurrent(0);
    setShowResult(false);
  };

  return (
    <main className="bg-gray-5 min-h-screen px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Phishing Awareness Training
        </h1>
        <p className="text-gray-600 mb-6">
          Test your knowledge and learn how to stay safe from phishing attacks.
        </p>

        {!showResult ? (
          <div className="space-y-6">

            {/* Progress */}
            <div className="flex justify-between text-sm text-gray-500">
              <span>Question {current + 1} of {quizData.length}</span>
              <span>{quizData.length - current - 1} remaining</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((current + 1) / quizData.length) * 100}%`,
                }}
              />
            </div>

            {/* Question */}
            <p className="text-xl font-semibold text-gray-800">
              {quizData[current].question}
            </p>

            {/* Options */}
            <div className="space-y-3">
              {quizData[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full text-left p-4 border border-gray-200 rounded-lg
                             bg-gray-50 hover:bg-purple-50 hover:border-purple-400
                             transition-all duration-200"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <p className="text-2xl font-bold text-purple-600">
              🎉 Quiz Completed!
            </p>
            <p className="text-lg text-gray-700">
              Your score: <strong>{score} / {quizData.length}</strong>
            </p>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg
                         hover:bg-purple-700 transition-colors"
            >
              🔄 Retry Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
