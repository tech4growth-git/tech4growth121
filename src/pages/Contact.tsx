import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Sparkles, Calendar, ArrowRight, Bot, TrendingUp, Code2, CheckCircle, Send, Loader2 } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Using Web3Forms - Get your free access key at https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "c5d96e6c-4028-48e3-b64b-4e88d050da69",
          to_email: "contact.tech4growth@gmail.com",
          from_name: formData.name,
          reply_to: formData.email,
          subject: `New Inquiry: ${formData.service || 'Tech4Growth Services'} - from ${formData.name}`,
          // Form fields
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          Service: formData.service || "Not specified",
          Message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        // Fallback to mailto if Web3Forms fails
        handleEmailFallback();
      }
    } catch (error) {
      // Fallback to mailto
      handleEmailFallback();
    }
    
    setLoading(false);
  };

  const handleEmailFallback = () => {
    const subject = `New Inquiry: ${formData.service || 'Tech4Growth Services'} - from ${formData.name}`;
    const body = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW INQUIRY - TECH4GROWTH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS
━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}

SERVICE REQUESTED
━━━━━━━━━━━━━━━━━━
${formData.service || "Not specified"}

MESSAGE
━━━━━━━━━━━━━━━━━━
${formData.message}
    `;
    const mailtoUrl = `mailto:contact.tech4growth@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi Tech4Growth! I'm ${formData.name}.\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919601981524?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+919601981524';
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      detail: "contact.tech4growth@gmail.com",
      description: "Get a response within 24 hours",
      link: "mailto:contact.tech4growth@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 96019 81524",
      description: "Available 24/7",
      link: "tel:+919601981524",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Quick Chat",
      description: "Instant response guaranteed",
      link: "https://wa.me/919601981524",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const services = [
    { value: "", label: "Select a Service" },
    { value: "AI Agents & Automation", label: "AI Agents & Automation" },
    { value: "WhatsApp/Telegram Bots", label: "WhatsApp/Telegram Bots" },
    { value: "Digital Marketing", label: "Digital Marketing & Strategy" },
    { value: "Website Development", label: "Website Development" },
    { value: "App Development", label: "Application Development" },
    { value: "Content & Design", label: "Content & Design" },
    { value: "Analytics & Research", label: "Analytics & AI Research" },
    { value: "Complete Solution", label: "Complete Tech Solution" },
    { value: "Other", label: "Other / Not Sure" },
  ];

  const features = [
    {
      icon: Bot,
      title: "Free Consultation",
      description: "Tell us your needs, we'll find the solution",
    },
    {
      icon: TrendingUp,
      title: "Affordable Rates",
      description: "Quality work that fits your budget",
    },
    {
      icon: Code2,
      title: "24/7 Available",
      description: "We're always just a message away",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="bg-black pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6 animate-slide-down">
            <Sparkles className="w-4 h-4 text-[#D00D0D]" />
            <span className="text-sm font-medium text-gray-300">Let's Build Together</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Get in{" "}
            <span className="text-[#D00D0D]">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up animation-delay-150">
            Ready to get started? Have a quick question? Need help at odd hours?
            We're always available. Just reach out — no task is too small!
          </p>
        </div>
      </section>

      {/* Main Contact Form Section - NOW ON TOP */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative bg-black">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-black rounded-3xl p-8 lg:p-10 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-2">
                Start Your Project
              </h2>
              <p className="text-gray-400 mb-8">
                Fill in the details and we'll get back within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitted && (
                  <div className="bg-[#D00D0D]/20 border border-[#D00D0D]/50 rounded-xl p-4 flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#D00D0D]" />
                    <div>
                      <p className="text-[#D00D0D] font-semibold">Message sent!</p>
                      <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D00D0D] focus:ring-1 focus:ring-[#D00D0D] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D00D0D] focus:ring-1 focus:ring-[#D00D0D] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D00D0D] focus:ring-1 focus:ring-[#D00D0D] transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-[#D00D0D] focus:ring-1 focus:ring-[#D00D0D] transition-colors"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value} className="bg-gray-900">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-[#D00D0D] focus:ring-1 focus:ring-[#D00D0D] transition-colors resize-none"
                    placeholder="Describe your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 bg-[#D00D0D] text-white py-4 rounded-xl font-semibold hover:bg-[#B00B0B] transition-all duration-300 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center space-x-2 bg-white/10 text-white py-3 rounded-xl font-medium hover:bg-green-500/20 transition-all duration-300 border border-white/10 hover:border-green-500/50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleCall}
                    className="flex items-center justify-center space-x-2 bg-white/10 text-white py-3 rounded-xl font-medium hover:bg-white/20 transition-all duration-300 border border-white/10"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="bg-black rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose Tech4Growth?
                </h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D00D0D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-[#D00D0D]" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Methods */}
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith("http") ? "_blank" : undefined}
                    rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center space-x-4 bg-black p-4 rounded-xl border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#D00D0D] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-[#D00D0D] transition-colors">{method.title}</h4>
                      <p className="text-[#D00D0D] text-sm">{method.detail}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Location */}
              <div className="bg-black rounded-3xl p-6 border border-white/10">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-[#D00D0D] rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">We Work Remotely</h3>
                    <p className="text-gray-400 text-sm">Available across India & worldwide</p>
                  </div>
                </div>
              </div>

              {/* Quick Action */}
              <div className="bg-[#D00D0D]/10 rounded-3xl p-6 border border-[#D00D0D]/30">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-5 h-5 text-[#D00D0D]" />
                  <h3 className="text-lg font-bold text-white">Schedule a Free Call</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Book a free 30-minute consultation with our experts.
                </p>
                <a
                  href="https://wa.me/919601981524?text=Hi%20Tech4Growth!%20I%27d%20like%20to%20schedule%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[#D00D0D] hover:text-red-400 font-semibold text-sm"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="text-[#D00D0D]">
              Questions
            </span>
          </h2>

          <div className="space-y-4 text-left">
            {[
              {
                q: "How does your pricing work?",
                a: "We offer very affordable rates with flexible monthly subscriptions. This includes maintenance, ongoing support, and touch-to-touch assistance whenever you need it."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes! We work on a monthly subscription basis with maintenance included. You get continuous support - just message us anytime, day or night."
              },
              {
                q: "Can you handle small tasks too?",
                a: "Absolutely! No task is too small for us. From quick fixes to complete solutions - we're here to help with everything."
              },
            ].map((faq, i) => (
              <div key={i} className="bg-black rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
