import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Rocket,
  LineChart,
  Shield,
  Globe,
  Lightbulb,
  Database,
  Settings,
  Award,
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: TrendingUp,
      title: "Technology Investment",
      description: "Strategic investments in cutting-edge technology companies and innovative startups across Libya. We provide capital and guidance to help technology ventures scale effectively.",
    },
    {
      icon: Users,
      title: "Startup Funding",
      description: "Comprehensive funding solutions for early-stage to growth-stage technology startups. From seed funding to Series A and beyond, we support entrepreneurs at every stage.",
    },
    {
      icon: Target,
      title: "Business Consulting",
      description: "Expert guidance and strategic advisory services to help businesses scale and succeed. Our consultants bring years of experience in technology and business development.",
    },
    {
      icon: Briefcase,
      title: "Market Analysis",
      description: "In-depth market research and analysis to identify emerging opportunities in the tech sector. We help you understand market dynamics and competitive landscapes.",
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "Comprehensive acceleration programs designed to fast-track startup growth with mentorship, resources, and strategic partnerships.",
    },
    {
      icon: LineChart,
      title: "Growth Strategy",
      description: "Tailored growth strategies that align with your business goals, market positioning, and long-term vision for sustainable expansion.",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Professional risk assessment and mitigation strategies to protect investments and ensure sustainable business growth.",
    },
    {
      icon: Globe,
      title: "International Expansion",
      description: "Support for companies looking to expand beyond Libya, including market entry strategies and international partnership facilitation.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Help organizations foster innovation cultures, develop new products, and stay ahead of technological trends.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      description: "Advanced data analytics services to inform decision-making and optimize business operations.",
    },
    {
      icon: Settings,
      title: "Operational Excellence",
      description: "Process optimization and operational efficiency consulting to streamline business operations and reduce costs.",
    },
    {
      icon: Award,
      title: "Portfolio Management",
      description: "Comprehensive portfolio management services ensuring optimal performance and strategic alignment across investments.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary via-primary to-accent overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] bg-repeat" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Comprehensive investment and consulting solutions designed to accelerate technological innovation and business growth in Libya.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your technology and business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
