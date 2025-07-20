import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-primary border-b border-primary/20 shadow-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary animate-glow">
              InfluenceHub
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/lists"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive("/lists") ? "text-primary font-semibold" : ""
              }`}
            >
              Lists
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/signup">
                <Button variant="outline" size="sm">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="glow" size="sm">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/lists"
                className={`text-foreground hover:text-primary transition-colors ${
                  isActive("/lists") ? "text-primary font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Lists
              </Link>
              
              <div className="flex flex-col space-y-2">
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="glow" size="sm" className="w-full">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;