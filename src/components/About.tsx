import React from 'react';
import { Award, Heart, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Heart className="text-red-500" size={48} />,
      title: "Personalized Service",
      description: "We treat every guest like family, ensuring a warm and memorable stay experience."
    },
    {
      icon: <Award className="text-yellow-500" size={48} />,
      title: "Premium Quality",
      description: "Our homestay and vehicles are maintained to the highest standards for your comfort."
    },
    {
      icon: <Shield className="text-green-500" size={48} />,
      title: "Safe & Secure",
      description: "Your safety is our priority with secure accommodations and well-maintained vehicles."
    },
    {
      icon: <Clock className="text-blue-500" size={48} />,
      title: "24/7 Support",
      description: "Round-the-clock assistance to ensure your travel experience is smooth and hassle-free."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TravelStay</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 5 years of experience in hospitality and travel services, we're dedicated to 
            making your journey comfortable, safe, and unforgettable. From cozy homestays to reliable 
            car rentals, we've got all your travel needs covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Our Beautiful Homestay"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Started as a family business, TravelStay has grown to become a trusted name in local 
              hospitality. We believe that travel should be more than just reaching a destination - 
              it should be about creating connections and memories that last a lifetime.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our homestay offers the perfect blend of comfort and authenticity, while our car rental 
              service ensures you can explore the region at your own pace. Every detail is carefully 
              curated to provide you with an exceptional experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-sky-600">500+</div>
                <div className="text-gray-600">Satisfied Customers</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-orange-500">5</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-green-500">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;