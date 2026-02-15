import { Link } from 'react-router-dom';
import { Check, ArrowRight, Sparkles, Zap, Crown, Rocket, Clock, Shield, HeartHandshake, Bot, Code2, Palette, TrendingUp } from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

export default function Pricing() {
  const monthlyPlans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Basic Website Maintenance',
        'Technical Support (Business Hours)',
        'Small Fixes & Updates',
        'Monthly Check-in Call',
        'Email & WhatsApp Support',
        '1 Social Media Platform',
      ],
      popular: false,
      icon: Rocket,
    },
    {
      name: 'Growth',
      price: '₹7,999',
      period: '/month',
      description: 'For businesses needing ongoing support',
      features: [
        'All Starter Features',
        '24/7 Priority Support',
        'Website + Social Media Management',
        'Analytics & Monthly Reporting',
        'Unlimited Small Tasks',
        'Weekly Strategy Call',
        'Basic SEO Optimization',
      ],
      popular: true,
      icon: Crown,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full-scale tech partnership',
      features: [
        'All Growth Features',
        'Custom AI Solutions',
        'Dedicated Team Member',
        'Complete Tech Management',
        'Marketing & Content Creation',
        'On-demand Development',
        'Priority Everything',
      ],
      popular: false,
      icon: Shield,
    },
  ];

  const oneTimePricing = [
    {
      name: 'Landing Page',
      price: '₹2,000',
      description: 'Simple landing page or portfolio site',
      features: [
        'Single page website',
        'Mobile responsive design',
        'Contact form integration',
        'Basic SEO setup',
        'Lifetime ownership',
      ],
      icon: Code2,
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
      icon: Palette,
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
      icon: TrendingUp,
    },
  ];

  const addOns = [
    {
      name: 'AI Chatbot',
      price: '₹3,000',
      description: 'WhatsApp/Telegram bot for customer support',
      icon: Bot,
    },
    {
      name: 'Logo & Branding',
      price: '₹1,500',
      description: 'Professional logo and brand identity',
      icon: Palette,
    },
    {
      name: 'Social Media Setup',
      price: '₹2,000',
      description: 'Complete profile setup across all platforms',
      icon: TrendingUp,
    },
    {
      name: 'SEO Package',
      price: '₹3,000',
      description: 'On-page SEO optimization for better rankings',
      icon: Rocket,
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: "We're always just a message away, even at midnight",
    },
    {
      icon: HeartHandshake,
      title: 'No Hidden Costs',
      description: 'What you see is what you pay, transparent pricing always',
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: "Professional work with revisions until you're satisfied",
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick delivery without compromising on quality',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-black pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#D00D0D]" />
            <span className="text-sm font-medium text-gray-300">Simple, Transparent Pricing</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            Affordable Plans for{' '}
            <span className="text-[#D00D0D]">Every Budget</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees, no surprises. Quality tech solutions at prices that make sense.
            From ₹1,000 projects to complete tech partnerships.
          </p>
        </div>
      </section>

      {/* Benefits Row */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#D00D0D]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-[#D00D0D]" />
                </div>
                <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscription Plans */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">Monthly Plans</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Monthly{' '}
              <span className="text-[#D00D0D]">Subscription Plans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ongoing support and maintenance with 24/7 availability. Cancel anytime, no lock-ins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {monthlyPlans.map((plan, index) => (
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
                  <plan.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 ml-1">{plan.period}</span>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">One-Time Projects</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              One-Time{' '}
              <span className="text-[#D00D0D]">Website Plans</span>
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
                  <plan.icon className="w-7 h-7 text-white" />
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

      {/* Add-Ons Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Popular{' '}
              <span className="text-[#D00D0D]">Add-Ons</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enhance your package with these popular services
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addOn, index) => (
              <div
                key={index}
                className="bg-black rounded-2xl p-6 border border-white/10 hover:border-[#D00D0D]/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D00D0D]/20 flex items-center justify-center mx-auto mb-4">
                  <addOn.icon className="w-6 h-6 text-[#D00D0D]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{addOn.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{addOn.description}</p>
                <p className="text-[#D00D0D] font-bold text-xl">{addOn.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked{' '}
              <span className="text-[#D00D0D]">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How does monthly subscription work?',
                a: 'You pay a fixed monthly fee for ongoing support, maintenance, and access to our team. This includes unlimited small tasks, updates, and 24/7 availability. Cancel anytime with no penalties.',
              },
              {
                q: 'What\'s included in "unlimited small tasks"?',
                a: 'Small tasks include content updates, minor design changes, bug fixes, adding new sections, social media posts, and general tech assistance. Basically anything that takes under 2-3 hours.',
              },
              {
                q: 'Do I own my website after it\'s built?',
                a: "Absolutely! For one-time projects, you own 100% of the code and design. We'll hand over everything including source files, login credentials, and documentation.",
              },
              {
                q: 'Can I upgrade or downgrade my plan?',
                a: "Yes! You can switch between plans anytime. If you upgrade, you'll get prorated access. If you downgrade, changes take effect next billing cycle.",
              },
              {
                q: 'What payment methods do you accept?',
                a: "We accept UPI, bank transfers, credit/debit cards, and PayPal for international clients. We're flexible and can work with what suits you.",
              },
              {
                q: 'Do you work with clients outside India?',
                a: 'Yes! We work with clients worldwide. Our pricing for international clients is in USD and adjusted based on the project scope.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-black rounded-2xl p-6 border border-white/10 hover:border-[#D00D0D]/30 transition-all">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
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
