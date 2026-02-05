import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';

interface LocationDetectorProps {
  onLocationDetected: (location: string) => void;
}

const LocationDetector: React.FC<LocationDetectorProps> = ({ onLocationDetected }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState<string>('');

  // Bangladesh districts mapping
  const bangladeshDistricts = [
    'ঢাকা', 'চট্টগ্রাম', 'সিলেট', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'রংপুর', 'ময়মনসিংহ',
    'কুমিল্লা', 'নারায়ণগঞ্জ', 'গাজীপুর', 'টাঙ্গাইল', 'কিশোরগঞ্জ', 'মানিকগঞ্জ', 'মুন্শিগঞ্জ',
    'নরসিংদী', 'ফরিদপুর', 'গোপালগঞ্জ', 'মাদারীপুর', 'রাজবাড়ী', 'শরীয়তপুর', 'কক্সবাজার',
    'ফেনী', 'লক্ষ্মীপুর', 'নোয়াখালী', 'ব্রাহ্মণবাড়িয়া', 'চাঁদপুর', 'হবিগঞ্জ', 'মৌলভীবাজার',
    'সুনামগঞ্জ', 'নাটোর', 'নওগাঁ', 'পাবনা', 'বগুড়া', 'জয়পুরহাট', 'চাঁপাইনবাবগঞ্জ',
    'সিরাজগঞ্জ', 'যশোর', 'সাতক্ষীরা', 'মেহেরপুর', 'নড়াইল', 'চুয়াডাঙ্গা', 'কুষ্টিয়া',
    'মাগুরা', 'ঝালকাঠি', 'পটুয়াখালী', 'পিরোজপুর', 'ভোলা', 'বরগুনা', 'গাইবান্ধা',
    'কুড়িগ্রাম', 'লালমনিরহাট', 'নীলফামারী', 'পঞ্চগড়', 'ঠাকুরগাঁও', 'দিনাজপুর',
    'জামালপুর', 'নেত্রকোনা', 'শেরপুর', 'বান্দরবান', 'রাঙ্গামাটি', 'খাগড়াছড়ি'
  ];

  const detectLocation = () => {
    setIsDetecting(true);
    setError('');

    if (!navigator.geolocation) {
      setError('আপনার ব্রাউজার লোকেশন সাপোর্ট করে না');
      setIsDetecting(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          
          // Simulate location detection for Bangladesh
          // In real implementation, you would use a geocoding service
          const simulatedLocation = bangladeshDistricts[Math.floor(Math.random() * bangladeshDistricts.length)];
          
          setCurrentLocation(simulatedLocation);
          onLocationDetected(simulatedLocation);
          setIsDetecting(false);
        } catch (err) {
          setError('লোকেশন নির্ধারণে সমস্যা হয়েছে');
          setIsDetecting(false);
        }
      },
      (error) => {
        let errorMessage = 'লোকেশন অ্যাক্সেস করতে পারছি না';
        
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'লোকেশন অনুমতি দেওয়া হয়নি';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'লোকেশন তথ্য পাওয়া যাচ্ছে না';
            break;
          case error.TIMEOUT:
            errorMessage = 'লোকেশন খোঁজার সময় শেষ';
            break;
        }
        
        setError(errorMessage);
        setIsDetecting(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <Navigation className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-xl font-bold text-gray-900">আপনার লোকেশন নির্ধারণ করুন</h3>
        </div>
        
        <p className="text-gray-600 mb-6">
          আপনার এলাকার সেরা অ্যাডভোকেটদের খুঁজে পেতে লোকেশন শেয়ার করুন
        </p>

        {currentLocation && (
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">
                আপনার লোকেশন: {currentLocation}
              </span>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-red-800">{error}</span>
            </div>
          </div>
        )}

        <button
          onClick={detectLocation}
          disabled={isDetecting}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            isDetecting
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isDetecting ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              লোকেশন খোঁজা হচ্ছে...
            </div>
          ) : (
            <div className="flex items-center">
              <Navigation className="h-4 w-4 mr-2" />
              আমার লোকেশন নিন
            </div>
          )}
        </button>

        <p className="text-xs text-gray-500 mt-3">
          আপনার লোকেশন তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয় রাখা হবে
        </p>
      </div>
    </div>
  );
};

export default LocationDetector;