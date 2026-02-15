import { CheckCircle, Zap, Shield, Users, HeartHandshake, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security for your digital assets.',
  },
  {
    icon: Users,
    title: 'Startup Focused',
    description: 'We understand the unique needs of growing organizations.',
  },
  {
    icon: HeartHandshake,
    title: 'Affordable Pricing',
    description: 'Competitive rates designed for startups and NGOs.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Oriented',
    description: 'Solutions built to scale with your success.',
  },
  {
    icon: CheckCircle,
    title: 'Dedicated Support',
    description: '24/7 assistance to keep your business running smoothly.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Why Tech4Growth
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Built for Startups,{' '}
            <span className="gradient-text-primary">Powered by Innovation</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We combine technical excellence with a deep understanding of startup challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid gap-8 rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 lg:p-12">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '99%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
            { value: '3x', label: 'Faster Growth' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-primary lg:text-5xl">{stat.value}</div>
              <div className="mt-2 text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
