import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Award, FileText, Camera, Save, ArrowLeft } from 'lucide-react';

interface AdvocateFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  specialization: string;
  experience: string;
  barCouncilId: string;
  description: string;
  profileImage: string;
}

interface AdvocateRegistrationProps {
  onChatbotOpen: () => void;
}

const AdvocateRegistration: React.FC<AdvocateRegistrationProps> = ({ onChatbotOpen }) => {
  const [formData, setFormData] = useState<AdvocateFormData>({
    name: '',
    email: '',
    phone: '',
    location: 'ঢাকা',
    specialization: 'ফৌজদারি আইন',
    experience: '',
    barCouncilId: '',
    description: '',
    profileImage: ''
  });

  const [imagePreview, setImagePreview] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const locations = ['ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'রংপুর', 'ময়মনসিংহ'];
  const specializations = [
    'ফৌজদারি আইন',
    'পারিবারিক আইন',
    'ব্যবসায়িক আইন',
    'সম্পত্তি আইন',
    'শ্রম আইন',
    'সাইবার আইন',
    'ট্যাক্স আইন',
    'সাংবিধানিক আইন'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData(prev => ({
          ...prev,
          profileImage: result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store in localStorage for now (in real app, would send to backend)
    const existingAdvocates = JSON.parse(localStorage.getItem('registeredAdvocates') || '[]');
    const newAdvocate = {
      id: Date.now(),
      name: formData.name,
      specialization: formData.specialization,
      rating: 4.5,
      experience: `${formData.experience}+ বছর`,
      location: formData.location,
      phone: formData.phone,
      image: formData.profileImage || "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      cases: 0,
      available: true,
      description: formData.description,
      barCouncilId: formData.barCouncilId
    };
    
    existingAdvocates.push(newAdvocate);
    localStorage.setItem('registeredAdvocates', JSON.stringify(existingAdvocates));
    setIsSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: 'ঢাকা',
        specialization: 'ফৌজদারি আইন',
        experience: '',
        barCouncilId: '',
        description: '',
        profileImage: ''
      });
      setImagePreview('');
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">রেজিস্ট্রেশন সফল!</h2>
            <p className="text-lg text-gray-600 mb-6">
              আপনার প্রোফাইল সফলভাবে তৈরি হয়েছে। আপনার তথ্য যাচাই করার পর ওয়েবসাইটে প্রকাশ করা হবে।
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '#home'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                হোমপেজে ফিরে যান
              </button>
              <button
                onClick={onChatbotOpen}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                চ্যাটবটের সাথে কথা বলুন
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">অ্যাডভোকেট রেজিস্ট্রেশন</h1>
            <p className="text-gray-600 mt-2">আপনার তথ্য দিয়ে প্রোফাইল তৈরি করুন এবং ক্লায়েন্টদের সাহায্য করুন</p>
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <User className="h-16 w-16 text-gray-400" />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                    <Camera className="h-4 w-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-sm text-gray-600 mt-2">প্রোফাইল ছবি আপলোড করুন</p>
              </div>

              {/* Basic Information */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  পূর্ণ নাম *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
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
                  মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="০১৭১১-১২৩৪৫৬"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  কর্মস্থল *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="h-4 w-4 inline mr-2" />
                  বিশেষজ্ঞতার ক্ষেত্র *
                </label>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  অভিজ্ঞতা (বছর) *
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="50"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="৫"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="h-4 w-4 inline mr-2" />
                  বার কাউন্সিল আইডি *
                </label>
                <input
                  type="text"
                  name="barCouncilId"
                  value={formData.barCouncilId}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="BC-12345"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  নিজের সম্পর্কে বিস্তারিত
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                  placeholder="আপনার শিক্ষাগত যোগ্যতা, অভিজ্ঞতা এবং বিশেষত্ব সম্পর্কে লিখুন..."
                />
              </div>
            </div>
          </div>

          {/* Terms and Submit */}
          <div className="mt-8 pt-6 border-t">
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
              <Save className="h-5 w-5 mr-2" />
              রেজিস্ট্রেশন সম্পন্ন করুন
            </button>
          </div>
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">সাহায্য প্রয়োজন?</h3>
          <p className="text-gray-700 mb-4">
            রেজিস্ট্রেশনে কোনো সমস্যা হলে আমাদের সাথে যোগাযোগ করুন:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm">০১৮৪৪-৪৪৪৪৪৪</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm">support@legalaid.bd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocateRegistration;