import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Package, Video } from 'lucide-react';
const ProductShowcaseSection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const courseCategories = [{
    title: "💼 Business & Entrepreneurship",
    courses: ["Digital Product School", "10K Blueprint", "Big Business Blueprint", "Authority Blog Advantage", "7-Figure Mastery", "Online Business Blueprint", "Dropshipping 101", "Amazon Affiliate Profits", "Affiliate Marketing Action Plan", "Email List Secrets", "High Ticket Sales Secrets", "How to Start a Freelance Business", "Product Launch Mastery", "Sales Funnel Authority", "Scaling Your Business", "Side Hustle Secrets", "Social Media Marketing Blueprint", "Start an Online Coaching Business", "+ Many More..."]
  }, {
    title: "📈 Marketing & Sales",
    courses: ["Facebook Ads Mastery", "Instagram Ads Success", "LinkedIn Marketing Blueprint", "Email Marketing Success", "Niche Marketing Secrets", "List Building Profit Kit", "Modern Vlogging Guide", "Modern Podcasting Blueprint", "ClickBank Marketing Secrets", "Facebook Retargeting Secrets", "High-Converting Sales Funnels", "Internet Marketing Lifestyle", "YouTube Domination Blueprint", "How to Make Money on Fiverr", "+ Many More..."]
  }, {
    title: "🧠 Self-Development & Mindset",
    courses: ["Bulletproof Mindset", "Power of Positive Thinking", "Mindfulness Mastery", "Overcoming Anxiety", "Relentless Optimism", "Productivity for Procrastinators", "The Growth Mindset", "The Power of Focus", "Planning for Success", "Goal Setting Powerhouse", "How to Stop Worrying", "Mastering Your Destiny", "The Meaningful Life", "Self-Discipline Mastery", "+ Many More..."]
  }, {
    title: "💰 Wealth & Finance",
    courses: ["Bitcoin Profit Secrets", "Cryptocurrency Investing Blueprint", "Credit Card Catastrophe Avoidance", "Real Estate Money-Making Secrets", "Budgeting Strategies for Families", "Passive Income Strategies", "Wealth Attraction Formula", "Financial Freedom Blueprint", "E-commerce Mastery", "+ Many More..."]
  }, {
    title: "🤖 Technology & AI",
    courses: ["Artificial Intelligence in Digital Marketing", "Blockchain Secrets", "AI for Entrepreneurs", "Lead Generation on Demand", "Internet Business Models", "Ecommerce with WooCommerce", "Website Speed Optimization", "+ Many More..."]
  }, {
    title: "🏋️ Health & Fitness",
    courses: ["Absolute Yoga", "The Keto Diet 101", "Intermittent Fasting Formula", "The Clean Eating Plan", "HIIT It Hard", "Home Workout Bible", "Functional Strength Training", "Juicing for Vitality", "Hypertrophy Muscle Gain Manual", "The Running Manual", "Reverse Aging Secrets", "Sleep Optimization Blueprint", "Meditation for Busy People", "Overcoming Insomnia", "+ Many More..."]
  }, {
    title: "⏱️ Productivity & Time Management",
    courses: ["Get More Done in Less Time", "The Organized Mind", "Productivity Hacks", "Reclaim Your Time", "Time Management for Entrepreneurs", "Getting Things Done", "Motivation Mojo", "The Power of Execution", "+ Many More..."]
  }, {
    title: "❤️ Relationship & Lifestyle",
    courses: ["The Minimalist Lifestyle", "Freedom in Forgiveness", "The Art of Meditation", "Happiness Starts with You", "The Attitude of Gratitude", "Freedom Creation Blueprint", "Disconnect to Reconnect", "The Power of Mindfulness", "+ Many More..."]
  }];
  const digitalProductBundles = [{
    title: "🎬 ALL-IN-ONE VIDEO EDITING ASSETS BUNDLE 2.0",
    items: ["20,000+ Sound Effects", "20,000+ Presets & LUTs", "8,000+ Final Cut Pro Elements", "5,000+ Stock Video Footage", "5,000+ Adobe Premiere Pro Templates (.prproj)", "5,000+ Adobe Premiere Pro Motion Graphics Templates (.mogrt)", "5,000+ Adobe Premiere Assets", "5,000+ Adobe After Effects Templates (.aep)", "4,500+ Adobe Premiere Transitions & Effects Presets", "4,000+ Video Effects & Transitions", "1,500+ YouTube Creator Editing Presets", "1,000+ FX Presets Bundle", "250+ Hollywood Essentials SFX", "100+ VFX Videos", "100+ Transitions (4K, 1080p, SFX)", "100+ Lower Thirds (Adobe Premiere)", "50+ Instagram Graphics (Final Cut Pro)", "50+ Handcrafted LUTs", "Bonus 1: 5,000+ Adobe Photoshop Assets", "Bonus 2: Adobe Photoshop CC Essentials Course", "Bonus 3: Illustrator, Photoshop & After Effects Course", "Bonus 4: Wondershare Filmora 9 Video Editing Course", "Bonus 5: Adobe Premiere Pro Beginners Course", "Bonus 6: Cinematography Masterclass in Photoshop", "+ Many More..."]
  }, {
    title: "🧑‍💻 DEVELOPER BUNDLE 2.0",
    items: ["4,500+ WordPress Themes & Plugins", "1,000+ Website Themes (HTML5, CSS, PHP, WordPress)", "700+ PHP Scripts", "600+ Mobile Applications", "480+ HTML Websites", "250+ Shopify Themes", "100+ Opencart Templates", "50+ Prestashop Templates", "50+ Magento Themes", "50+ Drupal Themes", "+ Many More..."]
  }, {
    title: "📚 ULTIMATE EBOOK & PLR ARTICLES BUNDLE",
    items: ["300,000+ Ebooks Bundle", "12 Million+ PLR Articles", "Bonus: Royalty-Free Music, Videos & Images", "+ Many More..."]
  }, {
    title: "🎨 GRAPHIC DESIGN & VIDEO CREATION BUNDLE 2.0",
    items: ["650,000+ SVG Mega Bundle", "50,000+ Logo Templates", "30,000+ Font Templates", "25,000+ Vector Icons", "10,000+ Photoshop Actions", "10,000+ Slides & Infographics", "5,000+ Photoshop Brushes", "5,000+ Professional Overlays", "5,000+ Motion Graphics", "5,000+ Original LUTs", "4,000+ Video Effects & Transitions", "2,500+ Lightroom Presets (PC & Mobile)", "2,000+ Social Media Templates", "1,500+ Cinematic Sounds", "1,500+ YouTube Creator Editing Presets", "1,500+ Professional Sound Effects", "1,000+ FX Presets Bundle", "1,000+ Mockup Bundle", "770+ Photoshop Text Effects", "600+ Business Card Templates", "500+ Unique Lightroom Presets", "+ Many More..."]
  }, {
    title: "🎨 150,000+ LIGHTROOM PRESETS BUNDLE",
    items: ["150,000+ Premium Lightroom Presets", "+ Many More..."]
  }, {
    title: "🤖 MIDJOURNEY PROMPTS MASTERPACK",
    items: ["OVER 15,000 Midjourney Prompts", "Over 2,500 Midjourney Prompts (PDF)", "Midjourney Comprehensive Guide (PDF)", "Ebook: The Art of Midjourney AI", "12,600+ Midjourney Prompts (Excel)", "Best Midjourney Prompts - 644 Epic Prompts", "+ Many More..."]
  }, {
    title: "💬 CHATGPT PROMPTS BUNDLE 2.0",
    items: ["150,000+ ChatGPT Prompts Total", "100,000+ ChatGPT Prompts", "2,499+ ChatGPT Prompts (Bonus)", "60,000+ ChatGPT v20 & DAN Prompts", "Bonus: ChatGPT4 for Free", "Bonus Ebook: The Ultimate ChatGPT 4 Guide", "4,600+ Ultimate ChatGPT Prompts Update", "+ Many More..."]
  }, {
    title: "🧾 ALL-IN-ONE DIGITAL PRODUCT BUNDLE",
    items: ["Video Editing Effects", "Vector Icons", "T-Shirt Designs", "Shopify Themes", "Royalty Stock Images", "Resume Templates", "Premiere Pro Templates & Effects", "Lightroom Presets", "Fonts, SVGs & Icons", "Digital Planners", "Digital Journals", "Digital Trackers", "Canva Social Media Templates", "Adobe Photoshop Assets", "Adobe Illustrator Assets", "Adobe After Effects Assets", "PLR Articles", "Mockups", "Video Editing Presets", "+ Many More..."]
  }];
  const reelsCategories = ["20,000+ Luxury Reels", "1,500+ Glowing Motion Graphics Reels", "10,000+ Motivational Reels", "500+ AI Anime Reels", "1,000+ 2D Animation Reels", "500+ Cartoon Reels", "1,400+ Funny Reels", "1,000+ Comedy Reels", "500+ Omegle Reels", "AI Tech & AI Doctor Reels", "Business Reels", "3,500+ Shark Tank Reels", "Emotional & Lofi Music Reels", "Gym & Fitness Reels", "Car & Automotive Reels", "Tips, Tricks & Utility Reels", "Tools, DIY & Woodwork Reels", "Art & Craft Reels", "Study & Educational Reels", "Nature Reels", "Superhero Reels", "Satisfying ASMR Reels", "Useful Gadgets Reels", "Cricket Reels", "📦 Many Other Powerful Niches..."];
  return null;
};
export default ProductShowcaseSection;