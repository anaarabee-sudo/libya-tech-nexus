import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Target, Eye, Award } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We believe in the transformative power of technology and innovation to drive economic growth.",
    },
    {
      icon: CheckCircle2,
      title: "Integrity",
      description: "Trust and transparency are the cornerstones of our relationships with partners and clients.",
    },
    {
      icon: Eye,
      title: "Vision",
      description: "We see beyond today's challenges to identify tomorrow's opportunities.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering exceptional results and exceeding expectations.",
    },
  ];

  const milestones = [
    { year: "2010", event: "Libya Inves Tech founded" },
    { year: "2015", event: "Reached $5M in investments" },
    { year: "2020", event: "50+ successful investments" },
    { year: "2024", event: "Leading tech investor in Libya" },
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
                About Us
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Pioneering technology investment and innovation in Libya since 2010.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Libya Inves Tech was founded with a clear mission: to identify, fund, and nurture technology companies that would drive Libya's digital transformation. Since our inception, we have been at the forefront of technology investment in the region.
                  </p>
                  <p>
                    Our team combines deep local market knowledge with international investment expertise. We understand the unique challenges and opportunities in Libya's technology sector and work closely with entrepreneurs to overcome obstacles and achieve sustainable growth.
                  </p>
                  <p>
                    Today, we are proud to have supported over 50 companies across various technology sectors, from fintech to e-commerce, from software development to digital services. Our portfolio companies have created hundreds of jobs and contributed significantly to Libya's economy.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Libya Inves Tech team meeting"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Key milestones in our growth story.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "justify-start" : "justify-end"
                      }`}
                    >
                      <div
                        className={`w-full md:w-5/12 ${
                          index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                        }`}
                      >
                        <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                          <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                          <p className="text-foreground mt-2">{milestone.event}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Join Our Success Story
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Whether you're a startup seeking funding or an investor looking for opportunities, we'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
