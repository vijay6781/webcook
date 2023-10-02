import React, { useState } from 'react';

const FAQSection = () => {
  const [faq, setFaq] = useState(null);

  const faqs = [
    {
      question: "What type of websites do you create?",
      answer: "We specialize in creating various types of websites including business websites, shop website, e-commerce sites, personal portfolios, and more."
    },
    {
      question: "How long does it take to get a website?",
      answer: "The time frame depends on the complexity of the project. We aim to deliver websites as quickly as possible without compromising quality."
    },
    {
      question: "What are the pricing options?",
      answer: "We offer very affordable pricing for all our services. "
    },
  ];

  const handleFaqClick = (index) => {
    setFaq(index === faq ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-gray-500 mt-1 mb-1 via-gray-500 to-cyan-500 text-white p-8 text-center relative">
      <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="mt-8 text-left">
        {faqs.map((item, index) => (
          <div key={index} className="mb-4">
            <div
              className="cursor-pointer text-xl font-bold text-white mb-2"
              onClick={() => handleFaqClick(index)}
            >
              {item.question}
            </div>
            {faq === index && (
              <div className="text-lg text-white">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
