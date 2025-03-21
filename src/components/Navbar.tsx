
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const navItems = [
    { 
      label: 'Services', 
      href: '/services',
      dropdown: true,
      items: [
        { label: 'Residential', href: '/services/residential' },
        { label: 'Commercial', href: '/services/commercial' },
        { label: 'Termite Control', href: '/services/termite-control' },
        { label: 'Rodent Control', href: '/services/rodent-control' },
      ]
    },
    { label: 'Pest Library', href: '/pest-library' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glassmorphism py-3' : 'py-5'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold">PestFinity</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.dropdown ? (
                <button 
                  onClick={() => handleDropdown(`dropdown-${index}`)}
                  className="flex items-center py-2 text-sm font-medium hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link to={item.href} className="py-2 text-sm font-medium hover:text-primary transition-colors">
                  {item.label}
                </Link>
              )}

              {item.dropdown && (
                <div 
                  className={cn(
                    "absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10 transition-all duration-200 opacity-0 invisible transform translate-y-2",
                    activeDropdown === `dropdown-${index}` && "opacity-100 visible transform-none"
                  )}
                >
                  <div className="py-1">
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button className="button-hover" variant="outline">
            Get a Quote
          </Button>
          <Button className="button-hover">
            Book Now
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'md:hidden absolute top-full left-0 right-0 glassmorphism transition-all duration-300 ease-in-out overflow-hidden',
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-3">
          {navItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.dropdown ? (
                <div>
                  <button 
                    onClick={() => handleDropdown(`mobile-dropdown-${index}`)}
                    className="flex items-center justify-between w-full text-sm font-medium"
                  >
                    {item.label}
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200",
                        activeDropdown === `mobile-dropdown-${index}` ? "transform rotate-180" : ""
                      )} 
                    />
                  </button>
                  <div 
                    className={cn(
                      "mt-1 pl-4 border-l-2 border-gray-200 transition-all duration-200 overflow-hidden",
                      activeDropdown === `mobile-dropdown-${index}` ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.href}
                        className="block py-2 text-sm hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={item.href} 
                  className="block text-sm font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
            <Button className="w-full" variant="outline">
              Get a Quote
            </Button>
            <Button className="w-full">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
