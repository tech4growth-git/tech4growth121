import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/caard";
import { Spotlight } from "@/components/ui/spotlight";

export const HeroSection = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Card should NOT control height */}
      <Card className="relative bg-black/[0.96] overflow-hidden">
        <Spotlight className="-top-40 left-1/3 md:block" />

        {/* Main layout */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1fr_1.3fr] items-center gap-10 px-6 py-0">
          {" "}
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Affordable Digital Solutions
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building Technology{" "}
              <span className="gradient-text-primary">That Drives</span> Growth
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              We help startups and NGOs build reliable, scalable, and affordable
              digital products that grow with their vision.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
          {/* RIGHT ROBOT (DESKTOP ONLY LOOKS BEST) */}
          <div className="relative sd:h-[380] md:h-[480px]  lg:h-[730px] xl:h-[690px]">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
