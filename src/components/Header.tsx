import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Shield size={32} className="text-red-700" />
            <span className="text-xl font-bold text-red-700">KIVU GIANTS RFC</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link to="/" className={`font-medium hover:text-red-700 ${isActive('/') ? 'text-red-700' : ''}`}>Home</Link>
              <Link to="/team" className={`font-medium hover:text-red-700 ${isActive('/team') ? 'text-red-700' : ''}`}>Team</Link>
              <Link to="/gallery" className={`font-medium hover:text-red-700 ${isActive('/gallery') ? 'text-red-700' : ''}`}>Gallery</Link>
              <Link to="/contact" className={`font-medium hover:text-red-700 ${isActive('/contact') ? 'text-red-700' : ''}`}>Contact</Link>
            </nav>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/admin" className="btn btn-secondary">Dashboard</Link>
                <button onClick={logout} className="btn btn-primary">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                <LogIn size={18} className="mr-2" />
                Login
              </Link>
            )}
          </div>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium ${isActive('/') ? 'text-red-700' : ''}`} onClick={closeMenu}>Home</Link>
              <Link to="/team" className={`font-medium ${isActive('/team') ? 'text-red-700' : ''}`} onClick={closeMenu}>Team</Link>
              <Link to="/gallery" className={`font-medium ${isActive('/gallery') ? 'text-red-700' : ''}`} onClick={closeMenu}>Gallery</Link>
              <Link to="/contact" className={`font-medium ${isActive('/contact') ? 'text-red-700' : ''}`} onClick={closeMenu}>Contact</Link>
              
              {isAuthenticated ? (
                <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
                  <Link to="/admin" className="btn btn-secondary" onClick={closeMenu}>Dashboard</Link>
                  <button onClick={() => { logout(); closeMenu(); }} className="btn btn-primary">Logout</button>
                </div>
              ) : (
                <Link to="/login" className="btn btn-primary mt-2" onClick={closeMenu}>
                  <LogIn size={18} className="mr-2" />
                  Login
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
 