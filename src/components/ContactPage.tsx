import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, FileText, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    urgency: 'সাধারণ'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        urgency: 'সাধারণ'
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">বার্তা পাঠানো হয়েছে!</h2>
            <p className="text-lg text-gray-600 mb-6">
              আপনার বার্তা আমাদের কাছে পৌঁছেছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </p>
            <button
              onClick={() => window.location.href = '#home'}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              হোমপেজে ফিরে যান
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">যোগাযোগ করুন</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আপনার কোনো প্রশ্ন বা সমস্যা থাকলে আমাদের সাথে যোগাযোগ করুন। 
            আমরা ২৪/৭ আপনার সেবায় নিয়োজিত।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">যোগাযোগের তথ্য</h2>
            
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-bold text-red-800">জরুরি যোগাযোগ</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-800">৯৯৯</p>
                    <p className="text-sm text-red-600">জাতীয় জরুরি সেবা</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-bold text-red-800">০১৮৪৪-৪৪৪৪৪ৄ</p>
                    <p className="text-sm text-red-600">আমাদের জরুরি হটলাইন</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regular Contact */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">ফোন</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">সাধারণ যোগাযোগ: ০১৭১১-১২৩৪৫৬</p>
                  <p className="text-gray-700">সাপোর্ট: ০১৮১৫-৭৮৯০১২</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">ইমেইল</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">সাধারণ: info@legalaid.bd</p>
                  <p className="text-gray-700">সাপোর্ট: support@legalaid.bd</p>
                  <p className="text-gray-700">জরুরি: emergency@legalaid.bd</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">ঠিকানা</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>ঢাকা অফিস:</strong><br />
                    ১২৩, ধানমন্ডি রোড নং ২৭<br />
                    ধানমন্ডি, ঢাকা-১২০৫
                  </p>
                  <p className="text-gray-700">
                    <strong>চট্টগ্রাম অফিস:</strong><br />
                    ৪৫৬, নাসিরাবাদ<br />
                    চট্টগ্রাম-৪০০০
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-orange-600 mr-3" />
                  <h3 className="text-lg font-bold text-gray-900">সেবার সময়</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">জরুরি সেবা: ২৪/৭</p>
                  <p className="text-gray-700">সাধারণ সেবা: সকাল ৯টা - রাত ৯টা</p>
                  <p className="text-gray-700">সাপ্তাহিক ছুটি: শুক্রবার</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">আমাদের লিখুন</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    আপনার নাম *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="আপনার পূর্ণ নাম"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    মোবাইল নম্বর
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="০১৭১১-১২৩৪৫৬"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    জরুরি মাত্রা
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  >
                    <option value="সাধারণ">সাধারণ</option>
                    <option value="জরুরি">জরুরি</option>
                    <option value="অতি জরুরি">অতি জরুরি</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="h-4 w-4 inline mr-2" />
                    বিষয় *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="আপনার সমস্যার বিষয়"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageCircle className="h-4 w-4 inline mr-2" />
                    বিস্তারিত বার্তা *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="আপনার সমস্যার বিস্তারিত বর্ণনা দিন..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  বার্তা পাঠান
                </button>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">দ্রুত যোগাযোগ</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  লাইভ চ্যাট
                </button>
                <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Phone className="h-4 w-4 mr-2" />
                  কল করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;