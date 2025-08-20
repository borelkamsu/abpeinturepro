import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "À Propos", href: "/about" },
    { name: "Galerie", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50" data-testid="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center" data-testid="logo-link">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className={`font-medium transition-colors hover:text-primary-green ${
                  isActive(item.href)
                    ? "text-primary-green"
                    : "text-neutral"
                }`}
                data-testid={`nav-link-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Facebook Icon */}
            <a 
              href="https://web.facebook.com/profile.php?id=61579253472270" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral hover:text-primary-green transition-colors"
              title="Suivez A&B PEINTURE sur Facebook"
              data-testid="header-facebook"
            >
              <Facebook size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4 mt-4">
              {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`font-medium transition-colors hover:text-primary-green ${
                    isActive(item.href)
                      ? "text-primary-green"
                      : "text-neutral"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
