import { Link } from "react-router-dom";
import {
  Brain,
  Users,
  Target,
  Zap,
  ArrowRight,
  Award,
  TrendingUp,
  Rocket,
  Check,
  Sparkles,
  Bot,
  Code2,
  Palette,
} from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export default function About() {
  const team = [
    {
      role: "AI & Automation Experts",
      institution: "Smart Solutions",
      description: "Building intelligent systems that save you time and money",
      icon: Bot,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      role: "Full-Stack Developers",
      institution: "Modern Tech",
      description: "Websites and apps built with latest technologies",
      icon: Code2,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      role: "Digital Marketing Pros",
      institution: "Growth Focused",
      description: "Strategies that actually bring results",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      role: "Creative Designers",
      institution: "Visual Impact",
      description: "Designs that capture attention and convert",
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description:
        "We leverage cutting-edge AI and technology to deliver solutions that keep you ahead of the competition.",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your growth is our priority. We measure our success by the results we deliver for you.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every solution we build is designed for measurable outcomes and real business impact.",
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description:
        "Fast turnaround without compromising on quality. Enterprise-grade solutions, startup-friendly timelines.",
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Happy Clients" },
    { icon: Rocket, value: "6+", label: "Projects Delivered" },
    { icon: TrendingUp, value: "24/7", label: "Support Available" },
  ];

  const clients = [
    {
      name: "Noble Citizen Foundation",
      logo: "/Noble.png",
      type: "NGO",
    },
    {
      name: "Mahima Medicare",
      logo: "/mahima.png",
      type: "Healthcare",
    },
    {
      name: "Meduraa",
      logo: "/meduraa.png",
      type: "Education",
    },
    {
      name: "SS Tech Farming",
      logo: "/sstech.png",
      type: "AgriTech",
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
            <Zap className="w-4 h-4 text-[#D00D0D]" />
            <span className="text-sm font-medium text-gray-300">Your Tech Partner</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            About{" "}
            <span className="text-[#D00D0D]">
              Tech4Growth
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-slide-up animation-delay-150">
            We're a team of passionate tech professionals on a mission to provide 
            affordable, reliable tech support to businesses of all sizes — anytime you need us.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-2xl border border-white/10 text-center hover:border-[#D00D0D]/50 transition-all duration-300 hover:-translate-y-1"
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

      {/* Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-[#D00D0D]" />
                <span className="text-sm font-medium text-gray-300">Our Vision</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Quality Tech Support,{" "}
                <span className="text-[#D00D0D]">
                  Affordable Prices
                </span>
              </h2>

              <p className="text-xl text-gray-400 leading-relaxed">
                At Tech4Growth, we believe quality tech support shouldn't cost a fortune. 
                Many businesses struggle because tech services are too expensive or 
                unavailable when needed — we're here to change that.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Whether you need a quick fix at midnight or a complete digital transformation, 
                we're just a message away. No task is too small, no hour is too late. 
                We've helped startups, restaurants, hospitals, YouTubers, and more — 
                all at prices that make sense.
              </p>

              <div className="space-y-3">
                {[
                  "24/7 support - we're always available",
                  "Affordable pricing for every budget",
                  "No task too small or too big",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-gray-300">
                    <Check className="w-5 h-5 text-[#D00D0D]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-1">Always Here For You</h3>
                  <p className="text-gray-300 text-sm">24/7 support, no task too small</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-black border border-[#D00D0D]/20 px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#D00D0D]" />
              <span className="text-sm font-medium text-gray-300">What We Do</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Expert{" "}
              <span className="text-[#D00D0D]">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A skilled team ready to handle all your tech needs, big or small
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="bg-black rounded-2xl p-8 border border-white/10 hover:border-[#D00D0D]/50 transition-all duration-500 h-full text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#D00D0D] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D00D0D] transition-colors">
                    {member.role}
                  </h3>
                  <p className="text-[#D00D0D] text-sm font-medium mb-3">
                    {member.institution}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative">

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="text-[#D00D0D]">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we build and deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-black p-8 rounded-2xl border border-white/10 hover:border-[#D00D0D]/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#D00D0D] rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted By{" "}
            <span className="text-[#D00D0D]">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            From healthcare to non-profits, we've helped organizations across industries transform digitally
          </p>

          <div className="flex justify-center items-center flex-wrap gap-12">
            {clients.map((client, index) => (
              <div key={index} className="group">
                <div className="bg-black rounded-2xl p-8 border border-white/10 hover:border-[#D00D0D]/30 transition-all duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-16 object-contain mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <p className="text-gray-400 text-sm mt-4">{client.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#D00D0D] relative overflow-hidden">

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Grow with Us?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how Tech4Growth can help transform your business with 
            cutting-edge technology and expert guidance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-[#D00D0D] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}
