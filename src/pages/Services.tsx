import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Code2, MessageSquare, Palette, BarChart3, Smartphone, Headphones, ArrowRight, Check, Sparkles, Zap } from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: 'AI Agents & Automation',
      description: 'Custom AI solutions that automate repetitive tasks, enhance productivity, and make smarter business decisions.',
      features: [
        'Custom AI chatbots',
        'Workflow automation',
        'Intelligent data processing',
        'Predictive analytics',
      ],
      gradient: 'from-violet-500 to-purple-600',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80'
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp & Telegram Bots',
      description: 'Build powerful chatbots for WhatsApp and Telegram that handle customer queries 24/7 automatically.',
      features: [
        'Instant customer responses',
        'Order & booking management',
        'Lead qualification',
        'Multi-language support',
      ],
      gradient: 'from-emerald-500 to-teal-600',
      img: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing & Strategy',
      description: 'Data-driven marketing campaigns that deliver measurable results and accelerate your growth.',
      features: [
        'SEO & content marketing',
        'Social media management',
        'Paid advertising (Meta, Google)',
        'Analytics & reporting',
      ],
      gradient: 'from-blue-500 to-cyan-600',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Modern, responsive websites built with cutting-edge technology that convert visitors into customers.',
      features: [
        'Custom web design',
        'E-commerce solutions',
        'CMS integration',
        'Performance optimization',
      ],
      gradient: 'from-orange-500 to-red-600',
      img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80'
    },
    {
      icon: Smartphone,
      title: 'Application Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on any device.',
      features: [
        'iOS & Android apps',
        'Cross-platform (React Native)',
        'UI/UX design',
        'App store deployment',
      ],
      gradient: 'from-pink-500 to-rose-600',
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80'
    },
    {
      icon: Palette,
      title: 'Content & Design',
      description: 'Compelling content and stunning visuals that tell your story and engage your audience.',
      features: [
        'Video production',
        'Graphic design & posters',
        'Social media content',
        'Canva templates',
      ],
      gradient: 'from-amber-500 to-yellow-600',
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80'
    },
    {
      icon: BarChart3,
      title: 'Analytics & AI Research',
      description: 'Deep insights powered by AI to help you understand your market and make data-driven decisions.',
      features: [
        'Market research',
        'Competitor analysis',
        'Customer insights',
        'Performance tracking',
      ],
      gradient: 'from-cyan-500 to-blue-600',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: Headphones,
      title: 'End-to-End Tech Support',
      description: 'Complete technical assistance from setup to maintenance. We handle all your tech challenges.',
      features: [
        '24/7 support availability',
        'Remote troubleshooting',
        'System configuration',
        'Ongoing maintenance',
      ],
      gradient: 'from-indigo-500 to-purple-600',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80'
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic Website Maintenance',
        'Technical Support (Business Hours)',
        'Small Fixes & Updates',
        'Monthly Check-in',
        'Email & WhatsApp Support',
      ],
      popular: false,
      gradient: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Growth',
      price: '₹7,999',
      period: 'month',
      description: 'For businesses needing ongoing support',
      features: [
        'All Starter Features',
        '24/7 Priority Support',
        'Website + Social Media Management',
        'Analytics & Reporting',
        'Unlimited Small Tasks',
        'Monthly Strategy Call',
      ],
      popular: true,
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored',
      description: 'Full-scale tech partnership',
      features: [
        'All Growth Features',
        'Custom AI Solutions',
        'Dedicated Team Member',
        'Complete Tech Management',
        'Marketing & Content Creation',
        'On-demand Development',
      ],
      popular: false,
      gradient: 'from-violet-500 to-purple-600'
    },
  ];

  const oneTimePricing = [
    {
      name: 'Basic Website',
      price: '₹2,000',
      description: 'Simple landing page or portfolio site',
      features: [
        'Single page website',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Lifetime ownership',
      ],
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Business Website',
      price: '₹5,000+',
      description: 'Multi-page professional website',
      features: [
        'Up to 5 pages',
        'Custom design',
        'WhatsApp integration',
        'Google Analytics',
        'Lifetime ownership',
      ],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'E-commerce / Custom',
      price: '₹10,000+',
      description: 'Full-featured online store or app',
      features: [
        'Product catalog',
        'Payment gateway',
        'Admin dashboard',
        'Inventory management',
        'Lifetime ownership',
      ],
      gradient: 'from-orange-500 to-red-600'
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-black pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6 animate-slide-down">
            <Sparkles className="w-4 h-4 text-[#D00D0D]" />
            <span className="text-sm font-medium text-gray-300">All Services Under One Roof</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Complete Tech{' '}
            <span className="text-[#D00D0D]">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up animation-delay-150">
            From AI automation to digital marketing, website development to content creation — 
            all at <span className="text-[#D00D0D] font-semibold">affordable prices</span> with{' '}
            <span className="text-[#D00D0D] font-semibold">24/7 support</span>. No task too small, no hour too late.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="group"
              >
                <div className="relative bg-black rounded-2xl overflow-hidden border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-[#D00D0D] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#D00D0D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, j) => (
                        <li key={j} className="flex items-center text-sm text-gray-500">
                          <Check className="w-4 h-4 text-[#D00D0D] mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">Simple Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Monthly{' '}
              <span className="text-[#D00D0D]">
                Subscription Plans
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Affordable monthly plans with maintenance & 24/7 support included. Cancel anytime, no lock-ins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-black rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-[#D00D0D]' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#D00D0D] rounded-full">
                    <span className="text-sm font-semibold text-white">Most Popular</span>
                  </div>
                )}

                <div className="w-14 h-14 rounded-2xl bg-[#D00D0D] flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period !== 'tailored' && (
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#D00D0D] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#D00D0D] text-white hover:bg-[#B00B0B]'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One-Time Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">One-Time Projects</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              One-Time{' '}
              <span className="text-[#D00D0D]">
                Website Plans
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
              Get your website built once — own it for lifetime. No recurring costs.
            </p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              <span className="text-[#D00D0D]">*</span> Prices depend on complexity. Starts from ₹1,000 and goes up based on your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {oneTimePricing.map((plan, index) => (
              <div
                key={index}
                className="relative bg-black rounded-2xl p-8 border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D00D0D] flex items-center justify-center mb-6">
                  <Code2 className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2 text-sm">one-time</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-[#D00D0D] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-white/10 text-white hover:bg-[#D00D0D]/20 border border-white/20 hover:border-[#D00D0D]/50"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D00D0D] relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Not Sure What You Need?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            No problem! Just reach out and tell us your challenge. We'll find the right 
            solution at the right price. Free consultation, no obligations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#D00D0D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
