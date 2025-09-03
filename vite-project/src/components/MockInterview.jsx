import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Mic, MicOff, Clock, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';

const MockInterview = ({ category, onBack, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes per question
  const [answers, setAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const questions = {
    technical: [
      {
        id: 1,
        question: "Explain the difference between let, const, and var in JavaScript.",
        type: "technical",
        difficulty: "medium",
        expectedTime: 120,
        hints: ["Scope differences", "Hoisting behavior", "Reassignment rules"]
      },
      {
        id: 2,
        question: "What is the time complexity of binary search and why?",
        type: "technical",
        difficulty: "medium",
        expectedTime: 90,
        hints: ["Divide and conquer", "Logarithmic complexity", "Sorted array requirement"]
      },
      {
        id: 3,
        question: "How would you implement a REST API for user authentication?",
        type: "technical",
        difficulty: "hard",
        expectedTime: 180,
        hints: ["JWT tokens", "Password hashing", "Security considerations"]
      }
    ],
    behavioral: [
      {
        id: 1,
        question: "Tell me about a time when you had to work with a difficult team member.",
        type: "behavioral",
        difficulty: "medium",
        expectedTime: 120,
        hints: ["STAR method", "Conflict resolution", "Professional approach"]
      },
      {
        id: 2,
        question: "Describe a situation where you had to learn something new quickly.",
        type: "behavioral",
        difficulty: "easy",
        expectedTime: 90,
        hints: ["Learning strategy", "Time management", "Results achieved"]
      },
      {
        id: 3,
        question: "How do you handle stress and pressure in the workplace?",
        type: "behavioral",
        difficulty: "medium",
        expectedTime: 100,
        hints: ["Coping mechanisms", "Prioritization", "Examples"]
      }
    ],
    hr: [
      {
        id: 1,
        question: "Why do you want to work for our company?",
        type: "hr",
        difficulty: "easy",
        expectedTime: 90,
        hints: ["Company research", "Personal alignment", "Career goals"]
      },
      {
        id: 2,
        question: "What are your salary expectations?",
        type: "hr",
        difficulty: "medium",
        expectedTime: 60,
        hints: ["Market research", "Flexibility", "Value proposition"]
      },
      {
        id: 3,
        question: "Where do you see yourself in 5 years?",
        type: "hr",
        difficulty: "easy",
        expectedTime: 90,
        hints: ["Career progression", "Realistic goals", "Company growth"]
      }
    ]
  };

  const currentQuestions = questions[category?.id] || questions.technical;
  const currentQ = currentQuestions[currentQuestion];

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSubmit = () => {
    const newAnswer = {
      questionId: currentQ.id,
      question: currentQ.question,
      answer: answer,
      timeSpent: currentQ.expectedTime - timeLeft,
      score: Math.floor(Math.random() * 40) + 60, // Simulated AI scoring
      feedback: generateFeedback(answer, currentQ)
    };

    setAnswers([...answers, newAnswer]);
    setAnswer('');
    
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(currentQuestions[currentQuestion + 1].expectedTime);
    } else {
      setShowFeedback(true);
    }
  };

  const generateFeedback = (answer, question) => {
    // Simulated AI feedback generation
    const feedbacks = [
      {
        positive: ["Good structure in your answer", "Clear communication", "Relevant examples provided"],
        improvements: ["Could provide more specific details", "Consider mentioning industry best practices"],
        score: Math.floor(Math.random() * 20) + 70
      },
      {
        positive: ["Comprehensive understanding shown", "Good use of technical terminology"],
        improvements: ["Could improve time management", "Add more real-world examples"],
        score: Math.floor(Math.random() * 25) + 65
      }
    ];
    
    return feedbacks[Math.floor(Math.random() * feedbacks.length)];
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop voice recording
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (showFeedback) {
    const averageScore = answers.reduce((sum, ans) => sum + ans.score, 0) / answers.length;
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getScoreBackground(averageScore)} mb-4`}>
                <BarChart3 className={`w-10 h-10 ${getScoreColor(averageScore)}`} />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Interview Complete!</h1>
              <p className="text-xl text-gray-600">Your overall score: <span className={`font-bold ${getScoreColor(averageScore)}`}>{Math.round(averageScore)}%</span></p>
            </div>

            <div className="space-y-6">
              {answers.map((ans, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Question {index + 1}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBackground(ans.score)} ${getScoreColor(ans.score)}`}>
                      {ans.score}%
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{ans.question}</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Your Answer:</h4>
                    <p className="text-gray-700">{ans.answer || "No answer provided"}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        What went well:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {ans.feedback.positive.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 mb-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Areas for improvement:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {ans.feedback.improvements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Practice Again
              </button>
              <button
                onClick={onBack}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg mb-6 p-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Categories</span>
            </button>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className={`font-mono text-lg ${timeLeft < 30 ? 'text-red-600' : 'text-gray-900'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{category?.title}</h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {currentQuestions.length}</p>
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                currentQ.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQ.difficulty.charAt(0).toUpperCase() + currentQ.difficulty.slice(1)}
              </span>
              <span className="text-sm text-gray-500">Expected time: {Math.floor(currentQ.expectedTime / 60)} min</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{currentQ.question}</h2>
            
            {/* Hints */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-medium text-blue-900 mb-2">💡 Hints to consider:</h3>
              <ul className="text-blue-800 text-sm space-y-1">
                {currentQ.hints.map((hint, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Answer Input */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-lg font-medium text-gray-900">Your Answer:</label>
              <button
                onClick={toggleRecording}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isRecording 
                    ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                <span>{isRecording ? 'Stop Recording' : 'Voice Input'}</span>
              </button>
            </div>
            
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here or use voice input..."
              className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {answer.length} characters
              </span>
              <div className="space-x-3">
                <button
                  onClick={() => {
                    setAnswer('');
                    if (currentQuestion < currentQuestions.length - 1) {
                      setCurrentQuestion(currentQuestion + 1);
                      setTimeLeft(currentQuestions[currentQuestion + 1].expectedTime);
                    } else {
                      setShowFeedback(true);
                    }
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Skip Question
                </button>
                <button
                  onClick={handleAnswerSubmit}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <span>Submit Answer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-medium text-gray-900 mb-4">Interview Progress</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{currentQuestion + 1}</div>
              <div className="text-sm text-gray-600">Current Question</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{answers.length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{currentQuestions.length - currentQuestion - 1}</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
