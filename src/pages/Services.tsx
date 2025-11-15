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
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();

  const mainServices = [
    {
      icon: TrendingUp,
      title: t("services.techInvestment"),
      description: t("services.techInvestmentDesc"),
    },
    {
      icon: Users,
      title: t("services.startupFunding"),
      description: t("services.startupFundingDesc"),
    },
    {
      icon: Target,
      title: t("services.consulting"),
      description: t("services.consultingDesc"),
    },
    {
      icon: Briefcase,
      title: t("services.marketAnalysis"),
      description: t("services.marketAnalysisDesc"),
    },
    {
      icon: Rocket,
      title: t("services.acceleration"),
      description: t("services.accelerationDesc"),
    },
    {
      icon: LineChart,
      title: t("services.growth"),
      description: t("services.growthDesc"),
    },
    {
      icon: Shield,
      title: t("services.risk"),
      description: t("services.riskDesc"),
    },
    {
      icon: Globe,
      title: t("services.expansion"),
      description: t("services.expansionDesc"),
    },
    {
      icon: Lightbulb,
      title: t("services.innovation"),
      description: t("services.innovationDesc"),
    },
    {
      icon: Database,
      title: t("services.data"),
      description: t("services.dataDesc"),
    },
    {
      icon: Settings,
      title: t("services.operations"),
      description: t("services.operationsDesc"),
    },
    {
      icon: Award,
      title: t("services.portfolio"),
      description: t("services.portfolioDesc"),
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
