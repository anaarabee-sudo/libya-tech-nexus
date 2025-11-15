import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const navLinks = [
    { key: "nav.home", path: "/" },
    { key: "nav.services", path: "/services" },
    { key: "nav.about", path: "/about" },
    { key: "nav.contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm shadow-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-primary-foreground font-bold text-xl">LIT</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">Libya Inves Tech</h1>
              <p className="text-xs text-muted-foreground">Technology Investment</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {t(link.key)}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    isActive(link.path) && "w-full"
                  )}
                />
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 text-foreground" />
            </button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">{t("nav.getStarted")}</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium py-2 px-4 rounded-lg transition-colors",
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {t(link.key)}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-lg transition-colors text-foreground hover:bg-muted"
              >
                <Languages className="w-4 h-4" />
                {language === "en" ? "العربية" : "English"}
              </button>
              <Button variant="hero" size="sm" asChild className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.getStarted")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
