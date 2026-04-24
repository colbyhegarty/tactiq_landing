import { Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3 text-center md:text-left">
            <img src={logoIcon} alt="Tactiq" className="w-12 h-12" />
            <div>
              <h3 className="text-lg font-bold mb-0">TACTIQ</h3>
              <p className="text-sm text-muted-foreground">
                Your Practice. Made Perfect.
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <a href="mailto:support@tactiqapp.com" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4 text-muted-foreground" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tactiq. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
