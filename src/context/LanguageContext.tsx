import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "bn" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header
  "app.name": { bn: "সহায়তা২৪", en: "Sahayata24" },
  "app.tagline": { bn: "২৪/৭ আইনি সহায়তা", en: "24/7 Legal Assistance" },
  "nav.home": { bn: "হোম", en: "Home" },
  "nav.advocates": { bn: "অ্যাডভোকেট", en: "Advocates" },
  "nav.education": { bn: "শিক্ষা", en: "Education" },
  "nav.somjhota": { bn: "সমঝোতা", en: "Mediation" },
  "nav.guidelines": { bn: "গাইডলাইন", en: "Guidelines" },
  "nav.contact": { bn: "যোগাযোগ", en: "Contact" },
  "nav.registration": { bn: "রেজিস্ট্রেশন", en: "Registration" },
  "nav.advocateRegistration": {
    bn: "অ্যাডভোকেট রেজিস্ট্রেশন",
    en: "Advocate Registration",
  },
  "nav.emergency": { bn: "জরুরি সহায়তা", en: "Emergency Help" },

  // Hero Section
  "hero.title": { bn: "আইনি বিপদে?", en: "Legal Trouble?" },
  "hero.subtitle": { bn: "আমরা আপনার পাশে আছি", en: "We are here for you" },
  "hero.description": {
    bn: "২৪/৭ আইনি সহায়তা, বিশেষজ্ঞ অ্যাডভোকেট পরামর্শ এবং জরুরি সাহায্য - সব একই জায়গায়। আপনার আইনি সমস্যার সমাধান এখনই পান।",
    en: "24/7 legal assistance, expert advocate consultation, and emergency help - all in one place. Get solutions to your legal problems now.",
  },
  "hero.emergencyBtn": {
    bn: "🆘 জরুরি সহায়তা নিন",
    en: "🆘 Get Emergency Help",
  },
  "hero.chatBtn": { bn: "💬 চ্যাটবটের সাথে কথা বলুন", en: "💬 Chat with Bot" },
  "hero.legalAdvice": { bn: "আইনি পরামর্শ", en: "Legal Advice" },
  "hero.fromExperts": { bn: "বিশেষজ্ঞদের কাছ থেকে", en: "From Experts" },
  "hero.legalHelp": { bn: "আইনি সহায়তা", en: "Legal Help" },
  "hero.available247": { bn: "২৪/৭ উপলব্ধ", en: "Available 24/7" },
  "hero.advocateNetwork": {
    bn: "অ্যাডভোকেট নেটওয়ার্ক",
    en: "Advocate Network",
  },
  "hero.nationwide": { bn: "সারাদেশে বিস্তৃত", en: "Nationwide" },
  "hero.smartChatbot": { bn: "স্মার্ট চ্যাটবট", en: "Smart Chatbot" },
  "hero.smartChatbotDesc": {
    bn: "AI চালিত চ্যাটবট যা আপনার আইনি প্রশ্নের তাৎক্ষণিক উত্তর দেবে",
    en: "AI-powered chatbot that provides instant answers to your legal questions",
  },
  "hero.locationBased": { bn: "লোকেশন ভিত্তিক", en: "Location Based" },
  "hero.locationBasedDesc": {
    bn: "আপনার এলাকার সেরা অ্যাডভোকেটদের খুঁজে পান মাত্র কয়েক ক্লিকে",
    en: "Find the best advocates in your area in just a few clicks",
  },
  "hero.service247": { bn: "২৪/৭ সেবা", en: "24/7 Service" },
  "hero.service247Desc": {
    bn: "দিন-রাত যেকোনো সময় আইনি সহায়তা পান, কোনো বিরতি নেই",
    en: "Get legal assistance anytime day or night, non-stop",
  },
  "hero.safeSecure": { bn: "নিরাপদ ও গোপনীয়", en: "Safe & Confidential" },
  "hero.safeSecureDesc": {
    bn: "আপনার সব তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয় রাখা হয়",
    en: "All your information is completely safe and confidential",
  },

  // Advocate Suggestion
  "advocates.title": { bn: "অ্যাডভোকেট সাজেশন", en: "Advocate Suggestions" },
  "advocates.description": {
    bn: "আপনার এলাকার সেরা এবং অভিজ্ঞ আইনজীবীদের খুঁজে নিন। বিশেষজ্ঞতা অনুযায়ী সঠিক পরামর্শ পান।",
    en: "Find the best and experienced lawyers in your area. Get the right advice according to expertise.",
  },
  "advocates.experiencedAdvocate": {
    bn: "অভিজ্ঞ অ্যাডভোকেট",
    en: "Experienced Advocate",
  },
  "advocates.years15": { bn: "১৫+ বছরের অভিজ্ঞতা", en: "15+ years experience" },
  "advocates.professionalService": {
    bn: "পেশাদার সেবা",
    en: "Professional Service",
  },
  "advocates.allLegalSolutions": {
    bn: "সব ধরনের আইনি সমস্যার সমাধান",
    en: "Solutions for all types of legal problems",
  },
  "advocates.selectLocation": {
    bn: "অথবা ম্যানুয়ালি এলাকা নির্বাচন করুন:",
    en: "Or manually select your area:",
  },
  "advocates.rating": { bn: "রেটিং", en: "Rating" },
  "advocates.available": { bn: "উপলব্ধ", en: "Available" },
  "advocates.experience": { bn: "অভিজ্ঞতা", en: "Experience" },
  "advocates.caseSolved": { bn: "মামলা সমাধান", en: "Cases Solved" },
  "advocates.call": { bn: "কল করুন", en: "Call" },
  "advocates.chat": { bn: "চ্যাট", en: "Chat" },
  "advocates.notFound": {
    bn: "আপনার মতো কোনো অ্যাডভোকেট খুঁজে পাচ্ছেন না?",
    en: "Can't find an advocate like yours?",
  },
  "advocates.contactUs": {
    bn: "আমাদের সাথে যোগাযোগ করুন এবং আপনার নির্দিষ্ট প্রয়োজন অনুযায়ী সেরা আইনজীবী খুঁজে নিন",
    en: "Contact us and find the best lawyer according to your specific needs",
  },
  "advocates.specialHelp": {
    bn: "বিশেষ সহায়তার জন্য যোগাযোগ করুন",
    en: "Contact for Special Assistance",
  },

  // Locations
  "location.dhaka": { bn: "ঢাকা", en: "Dhaka" },
  "location.chittagong": { bn: "চট্টগ্রাম", en: "Chittagong" },
  "location.sylhet": { bn: "সিলেট", en: "Sylhet" },
  "location.rajshahi": { bn: "রাজশাহী", en: "Rajshahi" },
  "location.khulna": { bn: "খুলনা", en: "Khulna" },
  "location.barishal": { bn: "বরিশাল", en: "Barishal" },

  // Specializations
  "spec.criminal": { bn: "ফৌজদারি আইন", en: "Criminal Law" },
  "spec.family": { bn: "পারিবারিক আইন", en: "Family Law" },
  "spec.business": { bn: "ব্যবসায়িক আইন", en: "Business Law" },
  "spec.property": { bn: "সম্পত্তি আইন", en: "Property Law" },

  // Guidelines Section
  "guidelines.title": {
    bn: "আইনি গাইডলাইন ও পরামর্শ",
    en: "Legal Guidelines & Advice",
  },
  "guidelines.description": {
    bn: "বাংলাদেশের আইন সম্পর্কে প্রয়োজনীয় তথ্য এবং গাইডলাইন। আপনার অধিকার জানুন এবং সঠিক পদক্ষেপ নিন।",
    en: "Essential information and guidelines about Bangladesh law. Know your rights and take the right steps.",
  },
  "guidelines.learnLaw": {
    bn: "আইনি জ্ঞান অর্জন করুন",
    en: "Gain Legal Knowledge",
  },
  "guidelines.readGuidelines": {
    bn: "বিশেষজ্ঞদের তৈরি গাইডলাইন পড়ুন",
    en: "Read guidelines created by experts",
  },
  "guidelines.topics": { bn: "বিষয়সমূহ", en: "Topics" },
  "guidelines.familyLaw": { bn: "পারিবারিক আইন", en: "Family Law" },
  "guidelines.propertyLaw": { bn: "সম্পত্তি আইন", en: "Property Law" },
  "guidelines.businessLaw": { bn: "ব্যবসায়িক আইন", en: "Business Law" },
  "guidelines.criminalLaw": { bn: "ফৌজদারি আইন", en: "Criminal Law" },
  "guidelines.readMore": { bn: "আরও পড়ুন", en: "Read More" },
  "guidelines.specialArticle": { bn: "বিশেষ আর্টিকেল", en: "Special Article" },
  "guidelines.learnRights": {
    bn: "আপনার আইনি অধিকার সম্পর্কে জানুন",
    en: "Learn about your legal rights",
  },
  "guidelines.readFullArticle": {
    bn: "সম্পূর্ণ আর্টিকেল পড়ুন",
    en: "Read Full Article",
  },
  "guidelines.minutes": { bn: "মিনিট", en: "minutes" },

  // Articles
  "article.divorce": {
    bn: "বিবাহবিচ্ছেদের নিয়ম ও প্রক্রিয়া",
    en: "Divorce Rules and Process",
  },
  "article.divorceSummary": {
    bn: "বাংলাদেশে বিবাহবিচ্ছেদের আইনি প্রক্রিয়া, প্রয়োজনীয় কাগজপত্র এবং খরচ সম্পর্কে বিস্তারিত তথ্য।",
    en: "Detailed information about the legal process, required documents, and costs of divorce in Bangladesh.",
  },
  "article.custody": {
    bn: "সন্তানের অভিভাবকত্ব ও ভরণপোষণ",
    en: "Child Custody and Maintenance",
  },
  "article.custodySummary": {
    bn: "বিবাহবিচ্ছেদের পর সন্তানের অভিভাবকত্ব নির্ধারণ এবং ভরণপোষণের আইন সম্পর্কে জানুন।",
    en: "Learn about determining child custody and maintenance laws after divorce.",
  },
  "article.domesticViolence": {
    bn: "পারিবারিক সহিংসতা প্রতিরোধ",
    en: "Domestic Violence Prevention",
  },
  "article.domesticViolenceSummary": {
    bn: "পারিবারিক সহিংসতার বিরুদ্ধে আইনি ব্যবস্থা গ্রহণের পদ্ধতি এবং সুরক্ষা।",
    en: "Methods of taking legal action against domestic violence and protection.",
  },
  "article.landPurchase": {
    bn: "জমি ক্রয়-বিক্রয়ের নিয়মাবলী",
    en: "Land Purchase and Sale Rules",
  },
  "article.landPurchaseSummary": {
    bn: "জমি কেনাবেচার সময় কী কী বিষয় খেয়াল রাখবেন এবং প্রয়োজনীয় কাগজপত্র।",
    en: "What to look out for when buying and selling land and required documents.",
  },
  "article.inheritance": {
    bn: "উত্তরাধিকার সূত্রে সম্পত্তি বণ্টন",
    en: "Property Distribution by Inheritance",
  },
  "article.inheritanceSummary": {
    bn: "ইসলামী আইন ও বাংলাদেশী আইন অনুযায়ী সম্পত্তি বণ্টনের নিয়ম।",
    en: "Property distribution rules according to Islamic and Bangladeshi law.",
  },
  "article.rentDispute": {
    bn: "ভাড়া সংক্রান্ত বিরোধ নিষ্পত্তি",
    en: "Rent Dispute Resolution",
  },
  "article.rentDisputeSummary": {
    bn: "বাড়িভাড়া ও দোকানভাড়া সংক্রান্ত সমস্যার আইনি সমাধান।",
    en: "Legal solutions for house and shop rent problems.",
  },
  "article.companyReg": {
    bn: "কোম্পানি নিবন্ধন প্রক্রিয়া",
    en: "Company Registration Process",
  },
  "article.companyRegSummary": {
    bn: "বাংলাদেশে নতুন কোম্পানি গঠনের জন্য প্রয়োজনীয় পদক্ষেপ এবং খরচ।",
    en: "Steps and costs required to form a new company in Bangladesh.",
  },
  "article.businessContract": {
    bn: "ব্যবসায়িক চুক্তি ও আইন",
    en: "Business Contracts and Law",
  },
  "article.businessContractSummary": {
    bn: "ব্যবসায়িক চুক্তিপত্র তৈরি এবং আইনি সুরক্ষার উপায়।",
    en: "Creating business contracts and ways of legal protection.",
  },
  "article.laborRights": {
    bn: "শ্রমিক অধিকার ও নিয়োগ আইন",
    en: "Labor Rights and Employment Law",
  },
  "article.laborRightsSummary": {
    bn: "কর্মী নিয়োগ, বেতন ও অন্যান্য সুবিধা সংক্রান্ত আইনি নির্দেশনা।",
    en: "Legal guidelines for employee recruitment, salaries and other benefits.",
  },
  "article.cyberCrime": {
    bn: "সাইবার ক্রাইম থেকে সুরক্ষা",
    en: "Protection from Cyber Crime",
  },
  "article.cyberCrimeSummary": {
    bn: "অনলাইন প্রতারণা, হ্যাকিং এবং সাইবার বুলিং এর বিরুদ্ধে আইনি ব্যবস্থা।",
    en: "Legal measures against online fraud, hacking and cyber bullying.",
  },
  "article.fileCase": {
    bn: "মামলা দায়ের করার প্রক্রিয়া",
    en: "Case Filing Process",
  },
  "article.fileCaseSummary": {
    bn: "থানায় মামলা দায়ের থেকে কোর্টে হাজিরা পর্যন্ত সম্পূর্ণ প্রক্রিয়া।",
    en: "Complete process from filing a case at the police station to appearing in court.",
  },
  "article.bail": { bn: "জামিন ও আইনি সহায়তা", en: "Bail and Legal Aid" },
  "article.bailSummary": {
    bn: "জামিনের আবেদন প্রক্রিয়া এবং আইনি সহায়তা পাওয়ার উপায়।",
    en: "Bail application process and ways to get legal aid.",
  },
  "article.fundamentalRights": {
    bn: '"বাংলাদেশে নাগরিকদের মৌলিক অধিকার ও কর্তব্য"',
    en: '"Fundamental Rights and Duties of Citizens in Bangladesh"',
  },
  "article.fundamentalRightsSummary": {
    bn: "সংবিধানে বর্ণিত নাগরিকদের মৌলিক অধিকারসমূহ এবং সেগুলো লঙ্ঘিত হলে কী করণীয় সে সম্পর্কে বিস্তারিত আলোচনা।",
    en: "Detailed discussion on citizens' fundamental rights as described in the constitution and what to do if they are violated.",
  },

  // Footer
  "footer.emergencyLine": {
    bn: "জরুরি সহায়তা লাইন",
    en: "Emergency Help Line",
  },
  "footer.available24": { bn: "২৪ ঘন্টা উপলব্ধ", en: "Available 24 hours" },
  "footer.nationalEmergency": {
    bn: "জাতীয় জরুরি সেবা",
    en: "National Emergency Service",
  },
  "footer.nationalEmergencyNumber": { bn: "৯৯৯", en: "999" },
  "footer.womenChildren": {
    bn: "মহিলা ও শিশু নির্যাতন",
    en: "Women & Child Abuse",
  },
  "footer.womenChildrenNumber": {
    bn: "১০৯",
    en: "109",
  },
  "footer.ourHotline": { bn: "আমাদের হটলাইন", en: "Our Hotline" },
  "footer.ourHotlineNumber": { bn: "০১৮৪৪-৪৪৪৪৪৪", en: "01844-444444" },
  "footer.description": {
    bn: "বাংলাদেশের প্রথম ডিজিটাল আইনি সহায়তা প্ল্যাটফর্ম। আমরা সাধারণ মানুষের পাশে আছি আইনি বিপদের সময়।",
    en: "Bangladesh's first digital legal assistance platform. We stand with common people in times of legal trouble.",
  },
  "footer.quickLinks": { bn: "দ্রুত লিংক", en: "Quick Links" },
  "footer.findAdvocate": { bn: "অ্যাডভোকেট খুঁজুন", en: "Find Advocate" },
  "footer.legalGuidelines": { bn: "আইনি গাইডলাইন", en: "Legal Guidelines" },
  "footer.faq": { bn: "সচরাচর প্রশ্ন", en: "FAQ" },
  "footer.privacyPolicy": { bn: "গোপনীয়তা নীতি", en: "Privacy Policy" },
  "footer.termsOfUse": { bn: "ব্যবহারের শর্তাবলী", en: "Terms of Use" },
  "footer.ourServices": { bn: "আমাদের সেবা", en: "Our Services" },
  "footer.aiChatbot": {
    bn: "AI চ্যাটবট পরামর্শ",
    en: "AI Chatbot Consultation",
  },
  "footer.advocateConsultation": {
    bn: "অ্যাডভোকেট কনসালটেশন",
    en: "Advocate Consultation",
  },
  "footer.legalDocuments": {
    bn: "আইনি ডকুমেন্ট তৈরি",
    en: "Legal Document Creation",
  },
  "footer.caseTracking": {
    bn: "কোর্ট কেস ট্র্যাকিং",
    en: "Court Case Tracking",
  },
  "footer.emergencyHelp": {
    bn: "জরুরি আইনি সহায়তা",
    en: "Emergency Legal Aid",
  },
  "footer.legalEducation": {
    bn: "আইনি শিক্ষা ও প্রশিক্ষণ",
    en: "Legal Education & Training",
  },
  "footer.contactUs": { bn: "যোগাযোগ", en: "Contact Us" },
  "footer.dhakaOffice": {
    bn: "ঢাকা অফিস: ধানমন্ডি, ঢাকা-১২০৫",
    en: "Dhaka Office: Dhanmondi, Dhaka-1205",
  },
  "footer.chittagongOffice": {
    bn: "চট্টগ্রাম অফিস: নাসিরাবাদ, চট্টগ্রাম",
    en: "Chittagong Office: Nasirabad, Chittagong",
  },
  "footer.serviceHours": { bn: "সেবার সময়:", en: "Service Hours:" },
  "footer.emergencyService": {
    bn: "২৪/৭ (জরুরি সেবা)",
    en: "24/7 (Emergency Service)",
  },
  "footer.regularService": {
    bn: "সকাল ৯টা - রাত ৯টা (সাধারণ সেবা)",
    en: "9 AM - 9 PM (Regular Service)",
  },
  "footer.copyright": {
    bn: "© ২০২৫ আইনি সহায়ক। সর্বস্বত্ব সংরক্ষিত। | গণপ্রজাতন্ত্রী বাংলাদেশ সরকার কর্তৃক অনুমোদিত",
    en: "© 2025 Legal Assistant. All rights reserved. | Approved by the Government of Bangladesh",
  },
  "footer.madeIn": { bn: "🇧🇩 বাংলাদেশে তৈরি", en: "🇧🇩 Made in Bangladesh" },
  "footer.safeTrusted": { bn: "নিরাপদ ও বিশ্বস্ত", en: "Safe & Trusted" },

  // Chatbot
  "chatbot.title": { bn: "আইনি সহায়ক বট", en: "Legal Assistant Bot" },
  "chatbot.status": {
    bn: "অনলাইন এবং সহায়তা করতে প্রস্তুত",
    en: "Online and ready to help",
  },
  "chatbot.greeting": {
    bn: "নমস্কার! আমি আপনার আইনি সহায়ক। আপনার কী সমস্যা? আমি সাহায্য করতে পারি। আপনি টেক্সট, ছবি, ভিডিও বা অডিও পাঠাতে পারেন।",
    en: "Hello! I am your legal assistant. What is your problem? I can help. You can send text, images, videos or audio.",
  },
  "chatbot.quickResponses": { bn: "দ্রুত উত্তর:", en: "Quick Responses:" },
  "chatbot.familyDispute": { bn: "পারিবারিক বিরোধ", en: "Family Dispute" },
  "chatbot.propertyIssue": { bn: "সম্পত্তি বিষয়ক", en: "Property Issue" },
  "chatbot.jobRelated": { bn: "চাকরি সংক্রান্ত", en: "Job Related" },
  "chatbot.businessProblem": {
    bn: "ব্যবসায়িক সমস্যা",
    en: "Business Problem",
  },
  "chatbot.criminalCase": { bn: "ফৌজদারি মামলা", en: "Criminal Case" },
  "chatbot.cyberCrime": { bn: "সাইবার ক্রাইম", en: "Cyber Crime" },
  "chatbot.needAdvocate": { bn: "অ্যাডভোকেট প্রয়োজন", en: "Need Advocate" },
  "chatbot.emergencyHelp": { bn: "জরুরি সহায়তা", en: "Emergency Help" },
  "chatbot.sendFiles": { bn: "ফাইল পাঠান:", en: "Send Files:" },
  "chatbot.placeholder": {
    bn: "আপনার প্রশ্ন লিখুন...",
    en: "Type your question...",
  },
  "chatbot.advocateSuggestion": {
    bn: "অ্যাডভোকেট সাজেশন দেখুন",
    en: "View Advocate Suggestions",
  },
  "chatbot.typing": { bn: "টাইপ করছি...", en: "Typing..." },

  // Language
  "language.switch": { bn: "English", en: "বাংলা" },
  "language.label": { bn: "EN", en: "বাং" },

  // Emergency Numbers
  "emergency.999": { bn: "৯৯৯", en: "999" },

  // Location Detector
  "location.title": {
    bn: "আপনার লোকেশন নির্ধারণ করুন",
    en: "Detect Your Location",
  },
  "location.description": {
    bn: "আপনার এলাকার সেরা অ্যাডভোকেটদের খুঁজে পেতে লোকেশন শেয়ার করুন",
    en: "Share your location to find the best advocates in your area",
  },
  "location.yourLocation": { bn: "আপনার লোকেশন:", en: "Your Location:" },
  "location.browserNotSupported": {
    bn: "আপনার ব্রাউজার লোকেশন সাপোর্ট করে না",
    en: "Your browser does not support location",
  },
  "location.errorDetecting": {
    bn: "লোকেশন নির্ধারণে সমস্যা হয়েছে",
    en: "Problem detecting location",
  },
  "location.cannotAccess": {
    bn: "লোকেশন অ্যাক্সেস করতে পারছি না",
    en: "Cannot access location",
  },
  "location.permissionDenied": {
    bn: "লোকেশন অনুমতি দেওয়া হয়নি",
    en: "Location permission denied",
  },
  "location.unavailable": {
    bn: "লোকেশন তথ্য পাওয়া যাচ্ছে না",
    en: "Location information unavailable",
  },
  "location.timeout": {
    bn: "লোকেশন খোঁজার সময় শেষ",
    en: "Location search timed out",
  },
  "location.searching": {
    bn: "লোকেশন খোঁজা হচ্ছে...",
    en: "Searching for location...",
  },
  "location.getMyLocation": { bn: "আমার লোকেশন নিন", en: "Get My Location" },
  "location.privacyNote": {
    bn: "আপনার লোকেশন তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয় রাখা হবে",
    en: "Your location information will be kept completely safe and confidential",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANGUAGE_STORAGE_KEY = "sahayata24_language";

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize from localStorage or default to 'bn'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage === "en" || savedLanguage === "bn") {
        return savedLanguage;
      }
    }
    return "bn";
  });

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "bn" ? "en" : "bn";
      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
      }
      return newLanguage;
    });
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export default LanguageContext;
