import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Target, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Technology Investment",
      description: "Strategic investments in cutting-edge technology companies and innovative startups across Libya.",
    },
    {
      icon: Users,
      title: "Startup Funding",
      description: "Comprehensive funding solutions for early-stage to growth-stage technology startups.",
    },
    {
      icon: Target,
      title: "Business Consulting",
      description: "Expert guidance and strategic advisory services to help businesses scale and succeed.",
    },
    {
      icon: Briefcase,
      title: "Market Analysis",
      description: "In-depth market research and analysis to identify emerging opportunities in the tech sector.",
    },
  ];

  const stats = [
    { number: "50+", label: "Funded Companies" },
    { number: "$10M+", label: "Invested Capital" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Success Rate" },
  ];

  const achievements = [
    "Leading technology investment firm in Libya",
    "Strong portfolio of successful startups",
    "Expert team with international experience",
    "Proven track record of sustainable growth",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive investment and consulting services tailored to drive technological innovation in Libya.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/services" className="group">
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Libya Inves Tech?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We combine deep market knowledge with international expertise to identify and nurture the most promising technology ventures in Libya.
                </p>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-card/80 backdrop-blur-sm rounded-2xl shadow-2xl">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Ready to Innovate?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Let's build the future together
                    </p>
                    <Button variant="hero" asChild>
                      <Link to="/contact">Get in Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
