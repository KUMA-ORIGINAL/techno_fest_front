import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Moon, Sun, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "О событии", to: "about" },
  { name: "Направления", to: "tracks" },
  { name: "Программа", to: "schedule" },
  { name: "Призовой фонд", to: "prizes" },
  { name: "FAQ", to: "faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              TECHNO <span className="text-primary">FEST</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 border-l border-border pl-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <Button className="rounded-full font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                  Регистрация
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border mt-3 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="contact" smooth={true} duration={500} offset={-80} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full mt-4 h-12 text-lg rounded-xl">
                  Подать заявку
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
