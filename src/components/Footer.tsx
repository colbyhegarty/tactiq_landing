import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <img src={logoIcon} alt="Tactiq" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-0">TACTIQ</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Your Practice. Made Perfect.
              </p>
            </div>
          </div>

          {/* Nav links — wrap on very small screens */}
          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors whitespace-nowrap">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors whitespace-nowrap">Terms of Service</Link>
            <a href="mailto:support@tactiqapp.com" className="hover:text-foreground transition-colors whitespace-nowrap">Contact</a>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://www.tiktok.com/@tactiq.app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="TikTok">
              <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/tactiq.app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tactiq. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
