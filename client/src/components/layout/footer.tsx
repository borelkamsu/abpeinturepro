import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Logo size="sm" variant="light" />
            </div>
            <p className="mb-4 text-gray-400">
              "Les Murs de Augustin" - Votre expert en peinture et rénovation à Québec. 
              Qualité, professionnalisme et satisfaction garantie.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 AB-Peinture Pro. Tous droits réservés.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services Rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services" className="hover:text-primary-green transition-colors" data-testid="footer-link-interior">
                  Peinture Intérieure
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary-green transition-colors" data-testid="footer-link-exterior">
                  Peinture Extérieure
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-primary-green transition-colors" data-testid="footer-link-renovation">
                  Rénovation
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-green transition-colors" data-testid="footer-link-estimate">
                  Estimation Gratuite
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary-green transition-colors" data-testid="footer-link-consultation">
                  Conseil Expert
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Rapide</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2" data-testid="footer-phone">
                <Phone className="text-primary-green" size={16} />
                <span>(418) 473-6433</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="footer-email">
                <Mail className="text-primary-green" size={16} />
                <span>augustinmbende82@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="footer-address">
                <MapPin className="text-primary-green" size={16} />
                <span>Charlesbourg, Québec</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-white font-semibold mb-2">Suivez-nous</p>
              <div className="flex space-x-4">
                <a 
                  href="https://web.facebook.com/profile.php?id=61579253472270" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-green transition-colors" 
                  data-testid="social-facebook"
                  title="Suivez A&B PEINTURE sur Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-green transition-colors" data-testid="social-instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-green transition-colors" data-testid="social-linkedin">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Conçu avec passion pour AB-Peinture Pro - "Les Murs de Augustin"</p>
        </div>
      </div>
    </footer>
  );
}
