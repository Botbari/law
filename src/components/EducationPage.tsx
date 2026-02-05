import React, { useState } from 'react';
import { Play, BookOpen, Video, Clock, Eye, ThumbsUp, MessageCircle, Search, Filter } from 'lucide-react';
import Chatbot from './Chatbot';

interface VideoSuggestion {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  likes: string;
  category: string;
  level: 'শুরুর দিকে' | 'মধ্যম' | 'উন্নত';
  instructor: string;
}

interface EducationPageProps {
  onAdvocateSuggestion?: () => void;
}

const EducationPage: React.FC<EducationPageProps> = ({ onAdvocateSuggestion }) => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('সব');
  const [searchTerm, setSearchTerm] = useState('');

  const videoSuggestions: VideoSuggestion[] = [
    {
      id: 1,
      title: "বাংলাদেশের সংবিধান - মৌলিক অধিকার",
      description: "বাংলাদেশের সংবিধানে বর্ণিত নাগরিকদের মৌলিক অধিকার সম্পর্কে বিস্তারিত আলোচনা",
      thumbnail: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "১৫:৩০",
      views: "২৫,৪৩২",
      likes: "১,২৩৪",
      category: "সাংবিধানিক আইন",
      level: "শুরুর দিকে",
      instructor: "ড. আহমেদ করিম"
    },
    {
      id: 2,
      title: "পারিবারিক আইন - বিবাহ ও বিবাহবিচ্ছেদ",
      description: "ইসলামী পারিবারিক আইন অনুযায়ী বিবাহ এবং বিবাহবিচ্ছেদের নিয়মকানুন",
      thumbnail: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "২২:১৫",
      views: "১৮,৭৬৫",
      likes: "৯৮৭",
      category: "পারিবারিক আইন",
      level: "মধ্যম",
      instructor: "ব্যারিস্টার ফাতেমা খাতুন"
    },
    {
      id: 3,
      title: "সম্পত্তি আইন - জমি ক্রয়-বিক্রয়ের নিয়ম",
      description: "জমি কেনাবেচার সময় কী কী বিষয় খেয়াল রাখতে হবে এবং প্রয়োজনীয় কাগজপত্র",
      thumbnail: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "১৮:৪৫",
      views: "৩২,১০৯",
      likes: "১,৫৬৭",
      category: "সম্পত্তি আইন",
      level: "মধ্যম",
      instructor: "অ্যাডভোকেট রহিম উদ্দিন"
    },
    {
      id: 4,
      title: "ফৌজদারি আইন - মামলা দায়ের প্রক্রিয়া",
      description: "থানায় মামলা দায়ের থেকে শুরু করে কোর্টে হাজিরা পর্যন্ত সম্পূর্ণ প্রক্রিয়া",
      thumbnail: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "২৮:২০",
      views: "১৪,৮৯৩",
      likes: "৭৮৯",
      category: "ফৌজদারি আইন",
      level: "উন্নত",
      instructor: "ব্যারিস্টার নাসির হোসেন"
    },
    {
      id: 5,
      title: "ব্যবসায়িক আইন - কোম্পানি নিবন্ধন",
      description: "বাংলাদেশে নতুন কোম্পানি গঠনের জন্য প্রয়োজনীয় পদক্ষেপ এবং আইনি প্রক্রিয়া",
      thumbnail: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "২৫:১০",
      views: "১১,২৩৪",
      likes: "৬৫৪",
      category: "ব্যবসায়িক আইন",
      level: "উন্নত",
      instructor: "ড. সালমা আক্তার"
    },
    {
      id: 6,
      title: "সাইবার আইন - অনলাইন নিরাপত্তা",
      description: "সাইবার ক্রাইম থেকে নিজেকে রক্ষা করার উপায় এবং আইনি প্রতিকার",
      thumbnail: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400",
      duration: "২০:৩৫",
      views: "৯,৮৭৬",
      likes: "৫৪৩",
      category: "সাইবার আইন",
      level: "শুরুর দিকে",
      instructor: "অ্যাডভোকেট তানিয়া রহমান"
    }
  ];

  const categories = ['সব', 'সাংবিধানিক আইন', 'পারিবারিক আইন', 'সম্পত্তি আইন', 'ফৌজদারি আইন', 'ব্যবসায়িক আইন', 'সাইবার আইন'];

  const filteredVideos = videoSuggestions.filter(video => {
    const matchesCategory = selectedCategory === 'সব' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleChatbotVideoSuggestion = () => {
    setIsChatbotOpen(true);
    // Auto-suggest videos based on user query
    setTimeout(() => {
      // This would be handled by the chatbot's message system
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              আইনি শিক্ষা কেন্দ্র
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            বিনামূল্যে আইনি শিক্ষা নিন। বিশেষজ্ঞদের তৈরি ভিডিও টিউটোরিয়াল দেখুন এবং 
            আইনি জ্ঞান বৃদ্ধি করুন। AI চ্যাটবট আপনাকে সঠিক ভিডিও খুঁজে দিতে সাহায্য করবে।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsChatbotOpen(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🤖 AI ভিডিও সাজেশন নিন
            </button>
            <button 
              onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              📚 সব ভিডিও দেখুন
            </button>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="h-10 w-10 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">AI ভিডিও সাজেশন চ্যাটবট</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              আপনার প্রয়োজন অনুযায়ী সঠিক আইনি শিক্ষামূলক ভিডিও খুঁজে পেতে আমাদের AI চ্যাটবটের সাহায্য নিন।
              শুধু আপনার প্রশ্ন বা বিষয় লিখুন, চ্যাটবট আপনাকে উপযুক্ত ভিডিও সাজেস্ট করবে।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Video className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">স্মার্ট ভিডিও সার্চ</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <BookOpen className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">বিষয়ভিত্তিক সাজেশন</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <MessageCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">তাৎক্ষণিক সহায়তা</p>
              </div>
            </div>
            <button
              onClick={handleChatbotVideoSuggestion}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              চ্যাটবট শুরু করুন
            </button>
          </div>
        </div>
      </section>

      {/* Video Suggestions Section */}
      <section id="videos" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ভিডিও টিউটোরিয়াল সংগ্রহ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              বিশেষজ্ঞ আইনজীবী এবং শিক্ষকদের তৈরি উচ্চমানের আইনি শিক্ষামূলক ভিডিও
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ভিডিও খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-blue-600 p-4 rounded-full hover:bg-blue-50 transition-colors">
                      <Play className="h-8 w-8" />
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      video.level === 'শুরুর দিকে' ? 'bg-green-100 text-green-800' :
                      video.level === 'মধ্যম' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {video.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium">{video.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{video.duration}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <strong>শিক্ষক:</strong> {video.instructor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">কোনো ভিডিও পাওয়া যায়নি</h3>
              <p className="text-gray-600 mb-4">আপনার সার্চ টার্ম বা ক্যাটেগরি পরিবর্তন করে আবার চেষ্টা করুন</p>
              <button
                onClick={() => setIsChatbotOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                AI চ্যাটবটের সাহায্য নিন
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">আরও জানতে চান?</h2>
          <p className="text-xl mb-8">
            আমাদের AI চ্যাটবট আপনাকে সঠিক ভিডিও খুঁজে দিতে এবং আইনি প্রশ্নের উত্তর দিতে সাহায্য করবে
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsChatbotOpen(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              চ্যাটবট শুরু করুন
            </button>
            <button
              onClick={onAdvocateSuggestion}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
            >
              অ্যাডভোকেট খুঁজুন
            </button>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot 
        isOpen={isChatbotOpen}
        onToggle={() => setIsChatbotOpen(!isChatbotOpen)}
        onAdvocateSuggestion={onAdvocateSuggestion} 
      />
    </div>
  );
};

export default EducationPage;