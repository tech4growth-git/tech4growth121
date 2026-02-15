import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Code2,
  TrendingUp,
  MessageSquare,
  Palette,
  Headphones,
  Zap,
  Shield,
  Users,
  HeartHandshake,
  CheckCircle,
  Sparkles,
  Award,
  Rocket,
  Clock,
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/caard";
import { Spotlight } from "@/components/ui/spotlight";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Agents & Automation",
      description:
        "Custom AI solutions that automate tasks and boost productivity",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Telegram Bots",
      description: "Chatbots that handle customer queries 24/7 automatically",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable results",
    },
    {
      icon: Code2,
      title: "Website Development",
      description:
        "Modern, responsive websites that convert visitors into customers",
    },
    {
      icon: Palette,
      title: "Content & Design",
      description: "Stunning visuals and compelling content for your brand",
    },
    {
      icon: Headphones,
      title: "24/7 Tech Support",
      description: "Complete technical assistance whenever you need it",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Professional work with revisions until satisfied",
    },
    {
      icon: HeartHandshake,
      title: "Affordable Pricing",
      description: "Competitive rates designed for startups and SMBs",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description: "We're always just a message away, even at midnight",
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Happy Clients" },
    { icon: Rocket, value: "6+", label: "Projects Delivered" },
    { icon: Users, value: "24/7", label: "Support Available" },
    { icon: CheckCircle, value: "99%", label: "Satisfaction Rate" },
  ];

  const clients = [
    { name: "Noble Citizen Foundation", type: "NGO", logo: "/Noble.png" },
    { name: "Mahima Medicare", type: "Healthcare", logo: "/mahima.png" },
    { name: "Meduraa", type: "Education", logo: "/meduraa.png" },
    { name: "SS Tech Farming", type: "AgriTech", logo: "/sstech.png" },
    { name: "window-to-bhara", type: "Healthcare", logo: "/window.png" },
  ];
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Navigation />
      <div className="bg-black pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <Card className="relative bg-black/[0.96] overflow-hidden">
            <Spotlight className="-top-40 left-1/3 md:block" />

            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_1.3fr] items-center gap-10 px-6 py-0">
              {/* Left Content */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left pt-24 md:pt-0">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D00D0D]/30 bg-[#D00D0D]/10 px-4 py-2 text-sm text-gray-300">
                  <Sparkles className="h-4 w-4 text-[#D00D0D]" />
                  Your Complete Tech Partner
                </div>

                <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl text-white">
                  Building Technology{" "}
                  <span className="text-[#D00D0D]">That Drives</span> Growth
                </h1>

                <p className="mt-5 max-w-xl text-lg text-gray-400">
                  AI automation, websites, apps, marketing — all at{" "}
                  <span className="text-[#D00D0D] font-semibold">
                    affordable prices
                  </span>{" "}
                  with{" "}
                  <span className="text-[#D00D0D] font-semibold">
                    24/7 support
                  </span>
                  . No task too small, no hour too late.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 bg-[#D00D0D] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#B00B0B] transition-all duration-300 hover:-translate-y-1"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <span>View Services</span>
                  </Link>
                </div>
              </div>

              {/* Right Robot */}
              <div className="relative sd:h-[380] md:h-[480px] lg:h-[730px] xl:h-[690px]">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="h-full w-full"
                />
              </div>
            </div>
          </Card>
        </section>
        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-[#D00D0D] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Preview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-[#D00D0D]" />
                <span className="text-sm font-medium text-gray-300">
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Complete Tech <span className="text-[#D00D0D]">Solutions</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                From AI automation to digital marketing — everything your
                business needs to grow online
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-black rounded-2xl p-6 border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#D00D0D] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#D00D0D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-[#D00D0D] hover:text-red-400 font-semibold"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        {/* Why Choose Us */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
                    <Users className="w-4 h-4 text-[#D00D0D]" />
                    <span className="text-sm font-medium text-gray-300">
                      Why Tech4Growth
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Quality Tech Support,{" "}
                    <span className="text-[#D00D0D]">Affordable Prices</span>
                  </h2>
                  <p className="text-xl text-gray-400">
                    We believe quality tech support shouldn't cost a fortune.
                    Whether you need a quick fix at midnight or a complete
                    digital transformation — we're always available.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#D00D0D]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-[#D00D0D]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Team collaboration"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-xl font-bold mb-1">
                      Always Here For You
                    </h3>
                    <p className="text-gray-300 text-sm">
                      24/7 support, no task too small
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trusted By */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gray-400 mb-8">
              Trusted by businesses across industries
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#D00D0D]/30 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    onClick={() => setSelectedImage(client.logo)}
                    className="h-16 w-auto object-contain mx-auto cursor-pointer filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-gray-400 text-sm mt-3">{client.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Image Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-[80%] max-h-[80%] object-contain rounded-xl"
            />
          </div>
        )}
        {/* Pricing Preview */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">
                Affordable Pricing
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Plans Starting from <span className="text-[#D00D0D]">₹1,000</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              From one-time projects to monthly partnerships. Transparent
              pricing, no hidden fees.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-black rounded-2xl p-6 border border-white/10 text-center">
                <h3 className="text-white font-bold mb-2">One-Time Projects</h3>
                <p className="text-3xl font-bold text-[#D00D0D] mb-2">
                  ₹1,000+
                </p>
                <p className="text-gray-400 text-sm">
                  Websites, apps, bots - own it forever
                </p>
              </div>
              <div className="bg-black rounded-2xl p-6 border border-[#D00D0D] text-center">
                <div className="text-xs font-semibold text-[#D00D0D] mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-white font-bold mb-2">Monthly Plans</h3>
                <p className="text-3xl font-bold text-[#D00D0D] mb-2">
                  ₹2,999+
                </p>
                <p className="text-gray-400 text-sm">
                  Ongoing support & maintenance
                </p>
              </div>
              <div className="bg-black rounded-2xl p-6 border border-white/10 text-center">
                <h3 className="text-white font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-[#D00D0D] mb-2">Custom</p>
                <p className="text-gray-400 text-sm">
                  Full-scale tech partnership
                </p>
              </div>
            </div>

            <Link
              to="/pricing"
              className="inline-flex items-center space-x-2 text-[#D00D0D] hover:text-red-400 font-semibold"
            >
              <span>View All Pricing</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D00D0D] relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how Tech4Growth can help transform your business
              with cutting-edge technology and expert guidance. Free
              consultation, no obligations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-white text-[#D00D0D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919601981524?text=Hi%20Tech4Growth!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Index;
