import React, { useState } from 'react';
import { ArrowLeft, Brain, Users, Target, BarChart3, Clock, Star, Play, CheckCircle } from 'lucide-react';
import MockInterview from '../components/MockInterview';

const JobPrep = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentStep, setCurrentStep] = useState('overview'); // overview, category, interview, results

  const interviewCategories = [
    {
      id: 'technical',
      title: 'Technical Interview',
      description: 'Programming, algorithms, and technical skills',
      icon: <Brain className="w-6 h-6" />,
      color: 'bg-blue-500',
      questions: 25,
      duration: '45 min'
    },
    {
      id: 'behavioral',
      title: 'Behavioral Interview',
      description: 'Soft skills, teamwork, and personality assessment',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500',
      questions: 20,
      duration: '30 min'
    },
    {
      id: 'hr',
      title: 'HR Interview',
      description: 'Company culture, salary, and general questions',
      icon: <Target className="w-6 h-6" />,
      color: 'bg-purple-500',
      questions: 15,
      duration: '25 min'
    },
    {
      id: 'case-study',
      title: 'Case Study',
      description: 'Problem-solving and analytical thinking',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-orange-500',
      questions: 10,
      duration: '60 min'
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Questions',
      description: 'Get personalized interview questions based on your profile and job role'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: 'Real-time Feedback',
      description: 'Receive instant feedback on your answers and speaking patterns'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed analytics and improvement suggestions'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Expert Tips',
      description: 'Learn from industry experts with curated tips and best practices'
    }
  ];

  const stats = [
    { label: 'Success Rate', value: '94%', color: 'text-green-600' },
    { label: 'Average Score Improvement', value: '+40%', color: 'text-blue-600' },
    { label: 'Practice Sessions', value: '50K+', color: 'text-purple-600' },
    { label: 'Happy Users', value: '10K+', color: 'text-orange-600' }
  ];

  // Handle navigation between different steps
  if (currentStep === 'interview' && selectedCategory) {
    return (
      <MockInterview 
        category={selectedCategory}
        onBack={() => {
          setCurrentStep('overview');
          setSelectedCategory(null);
        }}
        onComplete={() => setCurrentStep('results')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/src/assets/Jobcalls logo (1).png" alt="JobsCalls" className="h-10" />
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-gray-900">Job Prep</span>
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md font-medium">NEW</span>
              </div>
            </div>
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ace Your Next Interview with
              <span className="block text-yellow-300">AI-Powered Practice</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Practice with our AI interviewer, get instant feedback, and boost your confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentStep('category')}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Mock Interview</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Interview Prep?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of interview preparation with cutting-edge AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Interview Type
            </h2>
            <p className="text-xl text-gray-600">
              Select the type of interview you want to practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewCategories.map((category) => (
              <div 
                key={category.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentStep('interview');
                }}
              >
                <div className={`${category.color} text-white p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{category.questions} questions</span>
                  <span>{category.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how our AI interview prep helped others land their dream jobs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer at Google",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                quote: "The AI feedback helped me identify my weak points and improve my technical answers significantly."
              },
              {
                name: "Rahul Kumar",
                role: "Product Manager at Microsoft",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                quote: "Practicing behavioral questions with AI gave me the confidence I needed for real interviews."
              },
              {
                name: "Anita Patel",
                role: "Data Scientist at Amazon",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                quote: "The detailed analytics showed me exactly where to focus my preparation efforts."
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-gray-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
                <div className="flex text-yellow-400 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful candidates who used our AI interview prep
          </p>
          <button 
            onClick={() => setCurrentStep('category')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Start Your Free Practice</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default JobPrep;
