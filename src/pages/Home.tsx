import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold mb-6">About KIVU GIANTS RFC</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010, KIVU GIANTS Rugby Football Club has become the premier rugby institution in the Kivu region. Our mission is to develop rugby talents and promote the sport throughout East Africa.
              </p>
              <p className="text-gray-700 mb-6">
                With a strong commitment to community development, we believe in using rugby as a vehicle for positive social change, teaching values of teamwork, discipline, and respect both on and off the field.
              </p>
              <Link to="/team" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-xl">
              <img
                src="/Amza.jpg"
                alt="Kivu Giants Rugby Team"
                className="w-full h-auto object-cover"
                style={{ maxHeight: '500px' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1521830101529-057b1dfd9784?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxydWdieSUyMHRlYW0lMjBhZnJpY2ElMjBhY3Rpb258ZW58MHx8fHwxNzQ2OTA4MDA0fDA&ixlib=rb-4.1.0&fit=fillmax&h=800&w=1200";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
