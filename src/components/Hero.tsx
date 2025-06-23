import React from 'react';
import { MapPin, Star, Users, Car } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Perfect
            <span className="block text-orange-400">Travel Experience</span>
            Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Discover comfort in our cozy homestay and explore with reliable car rentals. 
            Create unforgettable memories with our personalized travel packages.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('homestay')}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Explore Homestay
            </button>
            <button
              onClick={() => scrollToSection('cars')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Rent a Car
            </button>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Star className="text-orange-400" size={24} />
              </div>
              <div className="text-2xl font-bold">4.9</div>
              <div className="text-sm text-gray-300">Guest Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-sky-400" size={24} />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-gray-300">Happy Guests</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <Car className="text-green-400" size={24} />
              </div>
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-gray-300">Cars Available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="text-red-400" size={24} />
              </div>
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-gray-300">Prime Locations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;