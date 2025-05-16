import  { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KIVU GIANTS RFC</h3>
            <p className="text-gray-400 mb-6">
              Premier rugby club in the Kivu region, committed to excellence, community development and promoting rugby in East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MFURANZIZAHAMZA" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Mfuranziza100" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/mfuranzizahamza/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Kivu Stadium, Goma, Democratic Republic of Congo</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+250 796132866</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>mfuranzizahamza@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Training Hours</h3>
            <div className="space-y-2 text-gray-400">
              <p>Monday - Friday: 4:00 PM - 7:00 PM</p>
              <p>Saturday: 9:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} KIVU GIANTS Rugby Football Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 