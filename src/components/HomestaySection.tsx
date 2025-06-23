import React from 'react';
import { Wifi, Coffee, Car, Users, Star, MapPin } from 'lucide-react';
import type { Room } from '../types';

const HomestaySection: React.FC = () => {
  const rooms: Room[] = [
    {
      id: '1',
      name: 'Deluxe Family Room',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 2500,
      capacity: 4,
      amenities: ['AC', 'Private Bathroom', 'Balcony', 'TV', 'Mini Fridge'],
      description: 'Spacious family room with modern amenities and beautiful garden view.'
    },
    {
      id: '2',
      name: 'Cozy Double Room',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1800,
      capacity: 2,
      amenities: ['AC', 'Private Bathroom', 'Work Desk', 'TV'],
      description: 'Perfect for couples seeking comfort and privacy in a serene environment.'
    },
    {
      id: '3',
      name: 'Budget Single Room',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      price: 1200,
      capacity: 1,
      amenities: ['Fan', 'Shared Bathroom', 'Study Table'],
      description: 'Comfortable and affordable option for solo travelers and backpackers.'
    }
  ];

  const commonAmenities = [
    { icon: <Wifi size={24} />, name: 'Free WiFi' },
    { icon: <Coffee size={24} />, name: 'Complimentary Breakfast' },
    { icon: <Car size={24} />, name: 'Free Parking' },
    { icon: <Users size={24} />, name: 'Common Lounge' }
  ];

  return (
    <section id="homestay" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Homestay</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the warmth of home away from home. Our carefully designed rooms offer 
            comfort, convenience, and authentic local hospitality.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 relative rounded-xl overflow-hidden shadow-2xl">
          <img
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
            alt="Homestay Exterior"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-bold mb-2">Welcome to Our Home</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-1" size={20} />
                <span className="font-semibold">4.9 (127 reviews)</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-red-400 mr-1" size={20} />
                <span>Prime Location</span>
              </div>
            </div>
          </div>
        </div>

        {/* Common Amenities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Included Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {commonAmenities.map((amenity, index) => (
              <div key={index} className="bg-sky-50 rounded-lg p-6 text-center hover:bg-sky-100 transition-colors duration-200">
                <div className="text-sky-600 flex justify-center mb-3">
                  {amenity.icon}
                </div>
                <h4 className="font-semibold text-gray-900">{amenity.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Room Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ₹{room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h4>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center mb-4">
                  <Users size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-600">Up to {room.capacity} guests</span>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Amenities:</h5>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Check Availability
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="mt-16 bg-gradient-to-r from-sky-50 to-orange-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Homestay?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-sky-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Family Atmosphere</h4>
              <p className="text-gray-600">Experience genuine warmth and hospitality in a family-run environment.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-orange-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Prime Location</h4>
              <p className="text-gray-600">Conveniently located near major attractions and transportation hubs.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-green-600" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Local Experience</h4>
              <p className="text-gray-600">Enjoy authentic local cuisine and insider tips about the best places to visit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomestaySection;