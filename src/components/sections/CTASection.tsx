import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card/50 p-8 text-center backdrop-blur-xl lg:p-16">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Ready to Grow?
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let's Build Something{' '}
            <span className="gradient-text-primary">Amazing Together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start your digital transformation journey today. Get a free consultation 
            and discover how we can help your organization thrive online.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
