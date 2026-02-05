import React, { useState } from 'react';
import { Phone, Users, Scale, Clock, DollarSign, FileText, CheckCircle, AlertCircle, MessageCircle, User, Mail } from 'lucide-react';

const SomjhotaPage = () => {
  const [formData, setFormData] = useState({
    party1Name: '',
    party1Email: '',
    party1Phone: '',
    party2Name: '',
    party2Email: '',
    party2Phone: '',
    disputeType: 'পারিবারিক বিরোধ',
    description: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const disputeTypes = [
    'পারিবারিক বিরোধ',
    'সম্পত্তি বিরোধ',
    'ব্যবসায়িক বিরোধ',
    'চুক্তি সংক্রান্ত বিরোধ',
    'প্রতিবেশী বিরোধ',
    'অন্যান্য'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({
        party1Name: '',
        party1Email: '',
        party1Phone: '',
        party2Name: '',
        party2Email: '',
        party2Phone: '',
        disputeType: 'পারিবারিক বিরোধ',
        description: '',
        preferredTime: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">আবেদন সফল!</h2>
            <p className="text-lg text-gray-600 mb-6">
              আপনার সমঝোতার আবেদন গ্রহণ করা হয়েছে। আমাদের বিশেষজ্ঞ টিম শীঘ্রই উভয় পক্ষের সাথে যোগাযোগ করবে।
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 font-medium">পরবর্তী পদক্ষেপ:</p>
              <ul className="text-blue-700 text-sm mt-2 space-y-1">
                <li>• ২৪ ঘন্টার মধ্যে আমাদের কল পাবেন</li>
                <li>• উভয় পক্ষের সম্মতিতে সময় নির্ধারণ</li>
                <li>• অভিজ্ঞ আইনজীবীর উপস্থিতিতে আলোচনা</li>
              </ul>
            </div>
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Scale className="h-12 w-12 text-blue-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                দ্বিপাক্ষিক আইনি সমাধান
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              আলোচনা ও সমঝোতার মাধ্যমে মামলা নিষ্পত্তি
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              আইনি জটিলতায় জড়িয়েছেন? মামলার ঝামেলা ও দীর্ঘ প্রক্রিয়া এড়াতে চান?
              <br />
              আমাদের এই বিশেষ সেবার মাধ্যমে দুই পক্ষ—যারা আইনি বিরোধে জড়িয়েছেন—একটি নিরপেক্ষ ও নিরাপদ অনলাইন প্ল্যাটফর্মে সরাসরি কথা বলতে পারবেন।
            </p>
            
            {/* Hero Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="আইনি সমঝোতা" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">শান্তিপূর্ণ সমাধান</h3>
                  <p className="text-lg">অভিজ্ঞ আইনজীবীর মধ্যস্থতায়</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">আমাদের সেবার বৈশিষ্ট্য</h2>
            <p className="text-xl text-gray-600">
              এই সেবাটি মূলত তাদের জন্য, যারা চায় আইনি পথ মেনেই ঝামেলাবিহীন সমাধান।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 p-4 rounded-full w-fit mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">নিরাপদ কলের মাধ্যমে সরাসরি আলোচনা</h3>
              <p className="text-gray-700">
                আমাদের নিরাপদ প্ল্যাটফর্মে উভয় পক্ষ সরাসরি কথা বলতে পারবেন এবং তাদের বক্তব্য তুলে ধরতে পারবেন।
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-600 p-4 rounded-full w-fit mb-6">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">অভিজ্ঞ আইনজীবীর পরামর্শ ও মধ্যস্থতা</h3>
              <p className="text-gray-700">
                আমাদের অভিজ্ঞ আইনজীবীরা নিরপেক্ষভাবে মধ্যস্থতা করবেন এবং আইনি পরামর্শ প্রদান করবেন।
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 p-4 rounded-full w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">স্বেচ্ছায় সমঝোতার সুযোগ</h3>
              <p className="text-gray-700">
                কোনো চাপ ছাড়াই উভয় পক্ষ স্বেচ্ছায় সমঝোতায় পৌঁছানোর সুযোগ পাবেন।
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 p-4 rounded-full w-fit mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">সময় ও অর্থ সাশ্রয়</h3>
              <p className="text-gray-700">
                দীর্ঘ আদালতি প্রক্রিয়া এড়িয়ে কম সময়ে এবং কম খরচে সমাধান পান।
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-600 p-4 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">মামলা নিষ্পত্তির সহজ ও কার্যকর উপায়</h3>
              <p className="text-gray-700">
                জটিল আইনি প্রক্রিয়া ছাড়াই সহজ এবং কার্যকর উপায়ে বিরোধ নিষ্পত্তি করুন।
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-teal-600 p-4 rounded-full w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">গোপনীয়তা ও নিরাপত্তা</h3>
              <p className="text-gray-700">
                আপনার সব তথ্য এবং আলোচনা সম্পূর্ণ গোপনীয় এবং নিরাপদ রাখা হবে।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">কীভাবে কাজ করে?</h2>
            <p className="text-xl text-gray-600">সহজ ৪টি ধাপে সমঝোতার প্রক্রিয়া</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ১
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">আবেদন জমা দিন</h3>
              <p className="text-gray-600">নিচের ফর্মে উভয় পক্ষের তথ্য এবং বিরোধের বিবরণ দিন</p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ২
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">যোগাযোগ ও সময় নির্ধারণ</h3>
              <p className="text-gray-600">আমাদের টিম উভয় পক্ষের সাথে যোগাযোগ করে উপযুক্ত সময় নির্ধারণ করবে</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ৩
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">মধ্যস্থতা সেশন</h3>
              <p className="text-gray-600">অভিজ্ঞ আইনজীবীর উপস্থিতিতে নিরাপদ কলে আলোচনা</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ৪
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">সমঝোতা ও সমাধান</h3>
              <p className="text-gray-600">উভয় পক্ষের সম্মতিতে চূড়ান্ত সমাধান এবং চুক্তি</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">সমঝোতার জন্য আবেদন করুন</h2>
            <p className="text-xl text-gray-600">
              নিচের ফর্মটি পূরণ করুন এবং আমাদের বিশেষজ্ঞ টিমের সাহায্য নিন
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Party 1 Information */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  প্রথম পক্ষের তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">নাম *</label>
                    <input
                      type="text"
                      name="party1Name"
                      value={formData.party1Name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="প্রথম পক্ষের নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
                    <input
                      type="email"
                      name="party1Email"
                      value={formData.party1Email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ফোন *</label>
                    <input
                      type="tel"
                      name="party1Phone"
                      value={formData.party1Phone}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="০১৭১১-১২৩৪৫৬"
                    />
                  </div>
                </div>
              </div>

              {/* Party 2 Information */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  দ্বিতীয় পক্ষের তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">নাম *</label>
                    <input
                      type="text"
                      name="party2Name"
                      value={formData.party2Name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="দ্বিতীয় পক্ষের নাম"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ইমেইল *</label>
                    <input
                      type="email"
                      name="party2Email"
                      value={formData.party2Email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="example@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ফোন *</label>
                    <input
                      type="tel"
                      name="party2Phone"
                      value={formData.party2Phone}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="০১৭১১-১২৩৪৫৬"
                    />
                  </div>
                </div>
              </div>

              {/* Dispute Information */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  বিরোধের তথ্য
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">বিরোধের ধরন *</label>
                    <select
                      name="disputeType"
                      value={formData.disputeType}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    >
                      {disputeTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">পছন্দের সময়</label>
                    <input
                      type="text"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                      placeholder="যেমন: সকাল ১০টা - দুপুর ২টা"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">বিরোধের বিস্তারিত বিবরণ *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                    placeholder="বিরোধের কারণ, বর্তমান অবস্থা এবং আপনার প্রত্যাশিত সমাধান সম্পর্কে বিস্তারিত লিখুন..."
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="border-t pt-6">
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                    আমি <a href="#" className="text-blue-600 hover:underline">শর্তাবলী</a> এবং 
                    <a href="#" className="text-blue-600 hover:underline ml-1">গোপনীয়তা নীতি</a> মেনে নিচ্ছি
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  সমঝোতার জন্য আবেদন করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">আরও জানতে চান?</h2>
          <p className="text-xl mb-8">
            সমঝোতা সেবা সম্পর্কে বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
              <Phone className="h-5 w-5 mr-2" />
              ০১৮৪৪-৪৪৪৪৪৪
            </div>
            <div className="flex items-center justify-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">
              <Mail className="h-5 w-5 mr-2" />
              mediation@legalaid.bd
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SomjhotaPage;