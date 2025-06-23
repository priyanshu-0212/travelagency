import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle, Star, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Homestay', href: '#homestay' },
    { name: 'Car Rentals', href: '#cars' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Deluxe Rooms', href: '#homestay' },
    { name: 'Budget Accommodation', href: '#homestay' },
    { name: 'Car with Driver', href: '#cars' },
    { name: 'Self-Drive Cars', href: '#cars' },
    { name: 'Custom Packages', href: '#packages' },
    { name: 'Airport Transfer', href: '#cars' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-sky-400 mb-2">TravelStay</h3>
              <p className="text-gray-400 text-sm">Homestay & Car Rentals</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the perfect blend of comfort and adventure with our homestay and car rental services. 
              Creating memorable travel experiences since 2019.
            </p>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">4.9/5 (500+ reviews)</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="https://wa.me/911234567890" className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-200">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-sky-400 transition-colors duration-200 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">123 Mountain View Road</p>
                  <p className="text-gray-300">Hill Station, State 123456</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="text-sky-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">+91 12345 67890</p>
                  <p className="text-gray-300">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="text-orange-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">info@travelstay.com</p>
                  <p className="text-gray-300">bookings@travelstay.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="text-green-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-300">24/7 Availability</p>
                  <p className="text-gray-400 text-sm">Office: 9 AM - 9 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center w-full bg-sky-600 hover:bg-sky-700 text-white py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <Phone size={16} className="mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors duration-200"
              >
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-400">Subscribe to get special offers and travel tips</p>
          </div>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-400"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; {currentYear} TravelStay. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <button className="hover:text-sky-400 transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-sky-400 transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-sky-400 transition-colors duration-200">Cancellation Policy</button>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={14} className="text-red-500" fill="currentColor" />
                <span>for travelers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;