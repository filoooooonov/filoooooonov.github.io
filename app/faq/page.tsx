"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Variants for each FAQ entry to animate into view
const faqVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const faqs = [
  {
    question: "Which website package should I choose?",
    answer:
      "Go for the Landing Page package if you need a simple one-pager to showcase your business, or the Multiple Pages if you have more content that you want to share. We can always discuss what's the best option for you, so don't hesitate to contact me!",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Project timelines vary depending on complexity. A landing page website takes 2-4 weeks from concept to launch, multiple pages take 2-8 weeks. I like to keep projects fast-paced, so express 1-week development is also possible if need-be!",
  },
  // {
  //   question: "How do you build the website?",
  //   answer:
  //     "I build websites with code: no third-party templates or website builders. For the geeky ones, I use Next.js and React to build the website and Vercel to deploy it.   ",
  // },
  {
    question: "Can I edit the content of my website after it's finished?",
    answer:
      "Yes! All website packages come with an admin panel where you can change texts, images, layout and metadata of your new website.",
  },
  {
    question: "How can I revise the development progress?",
    answer:
      "I tend to have up to 3 revision sessions where you see the progress so far and express your further wishes and corrections. But I always listen to your preferences if you have something to say!",
  },

  // {
  //   question: "What's your pricing structure?",
  //   answer:
  //     "Each project is unique, and pricing reflects its specific requirements and complexity. I provide a quote after understanding your project during the first meeting.",
  // },

  {
    question: "Do you provide ongoing support?",
    answer:
      "Any unexpected bugs or issues are fixed ASAP on my side. If you need active maintenance, we can agree on a mothly plan that suits your needs.",
  },
  {
    question: "I already have a design. Can you turn into a website?",
    answer:
      "While I prefer designing the website myself, I'm always up to check out your design. Just let me know and I'll say if it's a good fit!",
  },
  {
    question: "I already have a website. Can you redesign it?",
    answer: "Absolutely! Just book a call or send me a message!",
  },
];

export default function page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="px-6">
      <div className="mx-auto">
        <h2 className="mb-8">Frequently Asked Questions</h2>
        <div className="">
          <div className=" rounded-xl space-y-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                // animate into view on scroll
                variants={faqVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className=" bg-stone-50 rounded-2xl shadow-xl overflow-hidden shadow-[#e9e8e37a] border-neutral-200"
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="cursor-pointer w-full flex items-center justify-between p-4 hover:bg-stone-50 rounded-t-2xl transition-colors"
                >
                  <span className="text-left">{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-200 ${
                      activeIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pt-4 pb-6 text-neutral-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <p className="text-neutral-600 text-sm mt-12">
            Have a question that's not on the list? Send me an{" "}
            <a
              target="_blank"
              href="mailto:alexfiloonov@gmail.com"
              className="font-medium"
            >
              email
            </a>{" "}
            and let's talk!
          </p>
        </div>
      </div>
    </section>
  );
}
