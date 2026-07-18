import type { Route } from "./+types/index";
import { ArrowRight, Link, Wrench } from "lucide-react";
import { Button } from "@base-ui/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Craftsman</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/auth?mode=login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth?mode=register">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-balance mb-6">
                Find Quality Craftsmen,{" "}
                <span className="text-primary">Get Work Done Right</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Connect with skilled professionals and service providers.
                Whether you need a plumber, electrician, carpenter, or any other
                specialist, Craftsman makes it simple to find and hire the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth?mode=register">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-lg">
                    Find Craftsmen <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/auth?mode=register">
                  <Button
                    variant="outline"
                    className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10"
                  >
                    Become a Craftsman
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/5 rounded-2xl border border-border p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block bg-primary text-primary-foreground p-6 rounded-full mb-4">
                  <Wrench className="w-12 h-12" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-2">
                  100+ Craftsmen
                </p>
                <p className="text-muted-foreground">
                  Ready to help you with any project
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-lg text-muted-foreground">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-lg text-muted-foreground">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">4.8/5</p>
              <p className="text-lg text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to connect with skilled professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What People Say</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied customers and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  {testimonial.content}
                </p>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join Craftsman today and discover a better way to connect with
            skilled professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth?mode=register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-lg">
                Sign Up Now
              </Button>
            </Link>
            <Link href="/auth?mode=login">
              <Button
                variant="outline"
                className="h-12 px-8 text-lg border-primary text-primary hover:bg-primary/10"
              >
                Already a Member? Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="font-bold">Craftsman</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting quality craftsmen with customers who value great
                work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Customers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Find Craftsmen
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Craftsmen</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Become a Member
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Grow Your Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Craftsman. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
