
import React from 'react';
import { Accordion } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: "What do I get?",
    answer: "You get a comprehensive PDF guide outlining natural methods to reduce facial puffiness. This includes step-by-step instructions for techniques like potassium loading, sodium flushing, sweating, lymphatic drainage, and an anti-inflammatory diet reset, along with optional supplement recommendations."
  },
  {
    question: "How fast can I see results?",
    answer: "Many users report noticing reduced facial puffiness within the first 2 weeks, with visible improvements in facial definition typically appearing within 30 days, especially with consistent effort."
  },
  {
    question: "Do I need special equipment or experience?",
    answer: "No, you don't. The guide uses natural methods and common items. It's designed to be simple and easy to follow for everyone."
  },
  {
    question: "How do I get access?",
    answer: "After purchasing, you will receive immediate access to download the PDF guide to your device."
  },
  {
    question: "Is this a one-time payment?",
    answer: "Yes, it's a one-time payment for lifetime access. No hidden fees or subscriptions."
  },
  {
    question: "Is this guide for everyone?",
    answer: "The guide focuses on natural methods. While generally safe, it's always good to talk to a doctor before making big changes to your diet or taking new supplements, especially if you have health issues."
  }
];

const FAQSection: React.FC = () => {
  return (
    <div className="w-full px-4 mt-6 bg-black">
      <Separator className="mb-6 bg-gray-700" />
      <h2 className="text-white font-bold mb-4 text-2xl">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
