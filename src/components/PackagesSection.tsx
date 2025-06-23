import React from 'react';
import { Calendar, Users, MapPin, Camera } from 'lucide-react';
import type { Package } from '../types';

const PackagesSection: React.FC = () => {
  const packages: Package[] = [
    {
      id: '1',
      name: 'Weekend Getaway',
      image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '2 Days / 1 Night',
      price: 6500,
      inclusions: ['Homestay Accommodation', 'Car for Sightseeing', 'Breakfast & Dinner', 'Local Guide'],
      description: 'Perfect short escape for couples and small families looking to unwind and explore local attractions.'
    },
    {
      id: '2',
      name: 'Adventure Explorer',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '4 Days / 3 Nights',
      price: 15500,
      inclusions: ['Deluxe Room Stay', '4WD Vehicle', 'All Meals', 'Adventure Activities', 'Professional Guide'],
      description: 'Thrilling package for adventure enthusiasts with trekking, wildlife spotting, and off-road experiences.'
    },
    {
      id: '3',
      name: 'Family Vacation',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '5 Days / 4 Nights',
      price: 22000,
      inclusions: ['Family Rooms', 'SUV with Driver', 'All Meals', 'Kids Activities', 'Airport Transfer'],
      description: 'Comprehensive family package with child-friendly activities and comfortable accommodations for all ages.'
    },
    {
      id: '4',
      name: 'Romantic Retreat',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      duration: '3 Days / 2 Nights',
      price: 12500,
      inclusions: ['Private Room', 'Candlelight Dinner', 'Couple Spa', 'Scenic Drive', 'Photography Session'],
      description: 'Intimate package designed for couples celebrating special occasions with romantic experiences.'
    }
  ];

  const highlights = [
    {
      icon: <Calendar className="text-sky-500" size={32} />,
      title: "Flexible Booking",
      description: "Easy rescheduling and cancellation policies"
    },
    {
      icon: <Users className="text-green-500" size={32} />,
      title: "Group Discounts",
      description: "Special rates for groups of 6 or more"
    },
    {
      icon: <MapPin className="text-red-500" size={32} />,
      title: "Local Expertise",
      description: "Insider knowledge of hidden gems"
    },
    {
      icon: <Camera className="text-purple-500" size={32} />,
      title: "Memory Making",
      description: "Professional photography options available"
    }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated travel packages that combine comfortable accommodation, 
            reliable transportation, and unforgettable experiences tailored to your preferences.
          </p>
        </div>

        {/* Package Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-200">
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
              <p className="text-gray-600 text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                  <span className="text-lg font-bold">₹{pkg.price.toLocaleString()}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {pkg.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{pkg.description}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Package Includes:</h5>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Book Package
                  </button>
                  <button className="flex-1 border-2 border-sky-600 text-sky-600 hover:bg-sky-50 py-3 rounded-lg font-semibold transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="bg-gradient-to-r from-sky-600 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-xl mb-6 text-sky-100">
            Can't find the perfect package? Let us create a personalized itinerary just for you. 
            Tell us your preferences, budget, and duration - we'll handle the rest!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Create Custom Package
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-sky-600 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Speak to Advisor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;