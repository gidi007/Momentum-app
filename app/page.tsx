'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Instagram, Linkedin, Twitter, CheckCircle, BarChart, Brain, Zap, Users, Calendar } from 'lucide-react'

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days: d, hours: h, minutes: m, seconds: s })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white font-sans min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-900 opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover bg-center opacity-10"></div>
        </motion.div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Unlock Your Elite Potential
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of daily coaching, personalized routines, and cutting-edge mental toughness strategies to outperform in every aspect of your life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Journey Now
            </motion.button>
          </motion.div>
          <motion.img
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="/hero-ui.png"
            alt="Elite Performer App Preview"
            className="mx-auto mt-16 w-full max-w-4xl rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Elevate Your Performance
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                icon: <BarChart className="w-12 h-12 text-purple-500" />,
                title: 'Data-Driven Insights',
                description: 'Track your progress with advanced analytics and personalized performance metrics.'
              },
              {
                icon: <Brain className="w-12 h-12 text-indigo-500" />,
                title: 'Cognitive Enhancement',
                description: 'Sharpen your mind with scientifically-backed exercises and techniques.'
              },
              {
                icon: <Zap className="w-12 h-12 text-pink-500" />,
                title: 'Energy Optimization',
                description: 'Maximize your daily output with tailored energy management strategies.'
              },
              {
                icon: <Users className="w-12 h-12 text-purple-500" />,
                title: 'Community Support',
                description: 'Connect with like-minded individuals and share your journey to greatness.'
              },
              {
                icon: <Calendar className="w-12 h-12 text-indigo-500" />,
                title: 'Adaptive Scheduling',
                description: 'Optimize your daily routine with AI-powered scheduling recommendations.'
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-pink-500" />,
                title: 'Goal Achievement',
                description: 'Set, track, and crush your personal and professional goals with expert guidance.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div className="flex items-center justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center text-purple-300">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Success Stories
          </motion.h2>
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "This app revolutionized my approach to personal growth. I've achieved more in 3 months than I did in the past 3 years.",
                author: "Sarah K., Entrepreneur"
              },
              {
                quote: "The cognitive enhancement exercises have significantly improved my focus and decision-making skills. A game-changer for my career.",
                author: "Michael R., Executive"
              },
              {
                quote: "I've tried many self-improvement apps, but this one stands out. The personalized coaching and community support are unparalleled.",
                author: "Emily L., Athlete"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-700"
              >
                <p className="text-xl italic text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-purple-400 font-semibold">{testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Limited Time Offer
          </motion.h2>
          <div className="flex justify-center space-x-8">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-5xl font-bold mb-2">{value}</div>
                <div className="text-purple-400 uppercase">{unit}</div>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mx-auto block"
          >
            Claim Your Discount Now
          </motion.button>
        </div>
      </section>

     {/* FAQ Section */}
<section className="py-20 bg-gray-800">
  <div className="container mx-auto px-6">
    <motion.h2
      {...fadeInUp}
      className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
    >
      Frequently Asked Questions
    </motion.h2>
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="space-y-6 max-w-3xl mx-auto"
    >
      {[
        {
          question: 'How does the personalized coaching work?',
          answer: 'Our AI-powered system analyzes your goals, habits, and performance data to create a tailored coaching plan. You\'ll receive daily guidance, exercises, and feedback to optimize your growth.'
        },
        {
          question: 'Can I use the app if I\'m not an athlete or business professional?',
          answer: 'Our app is designed for anyone looking to improve their performance in any area of life, whether it\'s personal development, creativity, academics, or any other field.'
        },
        {
          question: 'How often should I use the app to see results?',
          answer: 'For optimal results, we recommend engaging with the app daily. However, even using it 3-4 times a week can lead to significant improvements in your performance and mindset.'
        },
        {
          question: 'Is my data secure and private?',
          answer: 'Yes, we take data security and privacy very seriously. All your personal information and performance data is encrypted and stored securely. We never share your data with third parties without your explicit consent.'
        }
      ].map((faq, index) => (
        <motion.div key={index} variants={fadeInUp} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full p-6 text-left flex justify-between items-center"
          >
            <span className="text-xl font-semibold text-purple-300">{faq.question}</span>
            <ChevronDown className={`transform transition-transform duration-300 text-purple-400 ${openFaq === index ? 'rotate-180' : ''}`} />
          </button>
          {openFaq === index && (
            <div className="p-6 pt-0 text-gray-300">
              <p>{faq.answer}</p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            {...fadeInUp}
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Ready to Unlock Your Full Potential?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Join thousands of high achievers who have transformed their lives with our cutting-edge performance optimization platform.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Free Trial Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Elite Performer</h3>
              <p className="mb-4">Empowering individuals to reach their highest potential through advanced performance optimization techniques.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>© 2024 Elite Performer. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}