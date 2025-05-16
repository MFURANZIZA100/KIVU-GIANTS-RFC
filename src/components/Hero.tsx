import  { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-cover bg-center flex items-center" 
         style={{backgroundImage: 'url("https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KIVU GIANTS RUGBY FOOTBALL CLUB
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Home of champions in the heart of East Africa. Building strength, unity, and excellence through rugby.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/team" className="btn btn-primary py-3 px-6 text-lg">
              Meet Our Team
            </Link>
            <Link to="/contact" className="btn btn-secondary py-3 px-6 text-lg">
              Join The Giants <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
 