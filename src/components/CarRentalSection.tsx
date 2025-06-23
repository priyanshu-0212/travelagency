import React from 'react';
import { Users, Fuel, Settings, Shield, Clock, MapPin } from 'lucide-react';
import type { Car } from '../types';

const CarRentalSection: React.FC = () => {
  const cars: Car[] = [
    {
      id: '1',
      name: 'Maruti Swift (Compact)',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      pricePerDay: 1800,
      pricePerKm: 12,
      seating: 4,
      features: ['AC', 'Music System', 'GPS', 'Fuel Efficient'],
      available: true
    },
    {
      id: '2',
      name: 'Toyota Innova (SUV)',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      pricePerDay: 3500,
      pricePerKm: 18,
      seating: 7,
      features: ['AC', 'Spacious', 'Comfortable', 'Family Friendly'],
      available: true
    },
    {
      id: '3',
      name: 'Mahindra Scorpio (4WD)',
      image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      pricePerDay: 4200,
      pricePerKm: 22,
      seating: 7,
      features: ['4WD', 'Powerful Engine', 'Off-road Capable', 'AC'],
      available: true
    }
  ];

  const services = [
    {
      icon: <Clock className="text-blue-500" size={32} />,
      title: "24/7 Availability",
      description: "Book anytime, pickup anytime. We're here when you need us."
    },
    {
      icon: <Shield className="text-green-500" size={32} />,
      title: "Fully Insured",
      description: "All vehicles are comprehensively insured for your peace of mind."
    },
    {
      icon: <Settings className="text-purple-500" size={32} />,
      title: "Well Maintained",
      description: "Regular servicing ensures reliable and safe transportation."
    },
    {
      icon: <MapPin className="text-red-500" size={32} />,
      title: "Local Expertise",
      description: "Our drivers know the best routes and hidden gems in the area."
    }
  ];

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Car Rental Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore at your own pace with our reliable and well-maintained fleet. 
            From compact cars for city drives to SUVs for family trips and off-road adventures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Car Fleet */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    car.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                  }`}>
                    {car.available ? 'Available' : 'Booked'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h4>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Users size={16} className="text-gray-400 mr-2" />
                    <span className="text-gray-600">{car.seating} Seater</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel size={16} className="text-gray-400 mr-2" />
                    <span className="text-gray-600">Petrol/Diesel</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Features:</h5>
                  <div className="flex flex-wrap gap-2">
                    {car.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Per Day:</span>
                    <span className="font-bold text-lg text-gray-900">₹{car.pricePerDay}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Per KM:</span>
                    <span className="font-bold text-lg text-gray-900">₹{car.pricePerKm}</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    car.available 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!car.available}
                >
                  {car.available ? 'Book Now' : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Information */}
        <div className="bg-gradient-to-r from-orange-50 to-sky-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No hidden charges, no surprises. Our pricing is clear and competitive with flexible options to suit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Full Day Rental</h4>
              <p className="text-sm text-gray-600 mb-3">8 hours / 80 km included</p>
              <div className="text-2xl font-bold text-orange-500">Best Value</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Half Day Rental</h4>
              <p className="text-sm text-gray-600 mb-3">4 hours / 40 km included</p>
              <div className="text-2xl font-bold text-sky-500">Flexible</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Airport Transfer</h4>
              <p className="text-sm text-gray-600 mb-3">One-way trip</p>
              <div className="text-2xl font-bold text-green-500">Convenient</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h4 className="font-bold text-gray-900 mb-2">Outstation</h4>
              <p className="text-sm text-gray-600 mb-3">Multi-day trips</p>
              <div className="text-2xl font-bold text-purple-500">Adventure</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              <strong>Additional Benefits:</strong> Free cancellation up to 24 hours before pickup, 
              roadside assistance, and professional drivers available on request.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalSection;