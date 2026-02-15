import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Rocket,
  RefreshCw,
  Server,
  Wrench,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built with modern technologies for optimal performance.",
  },
  {
    icon: Rocket,
    title: "Startup & NGO Websites",
    description:
      "Tailored solutions designed specifically for emerging businesses and organizations.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform your outdated website into a modern, high-converting digital presence.",
  },
  {
    icon: Server,
    title: "Domain & Hosting",
    description:
      "Reliable hosting solutions with domain management and SSL certificates.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your website secure, updated, and performing at its best.",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="relative  lg:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Digital Solutions for{" "}
            <span className="gradient-text-primary">Modern Growth</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From concept to launch, we provide comprehensive services to
            establish your digital presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card group p-6 transition-all duration-500 hover:scale-[1.02] lg:p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="glass-card flex flex-col items-center justify-center p-6 text-center lg:p-8">
            <h3 className="mb-2 text-xl font-semibold">Ready to Start?</h3>
            <p className="mb-6 text-muted-foreground">
              Explore all our services and find the perfect fit for your needs.
            </p>
            <Button variant="hero" asChild>
              <Link to="/services" className="group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
