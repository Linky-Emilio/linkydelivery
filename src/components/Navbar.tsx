
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Truck, 
  User, 
  LogOut, 
  Menu, 
  X
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: 'Solicitar Entrega', path: '/request', icon: <Package className="h-5 w-5 mr-2" /> },
    { name: 'Panel de Repartidor', path: '/driver', icon: <Truck className="h-5 w-5 mr-2" /> },
    { name: 'Perfil', path: '/profile', icon: <User className="h-5 w-5 mr-2" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
            Linky
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.path}>
              <Button 
                variant={isActive(link.path) ? "default" : "ghost"} 
                size="sm"
                className="flex items-center"
              >
                {link.icon}
                {link.name}
              </Button>
            </Link>
          ))}
          <Button 
            variant="outline" 
            size="sm"
            className="flex items-center text-gray-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Cerrar Sesión
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-50 animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                to={link.path} 
                key={link.path}
                className={`flex items-center p-3 rounded-md ${
                  isActive(link.path) 
                    ? 'bg-purple-600 text-white' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={toggleMenu}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center"
              >
                <LogOut className="h-5 w-5 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
