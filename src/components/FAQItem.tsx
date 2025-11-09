
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

type FAQItemProps = {
  faq: {
    question: string;
    answer: string;
  };
  index: number;
};

const FAQItem: React.FC<FAQItemProps> = ({ faq, index }) => {
  return (
    <AccordionItem value={`item-${index}`} className="border-b border-gray-700">
      <AccordionTrigger className="py-4 font-semibold text-white hover:no-underline text-left">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-300 text-sm pb-4">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
