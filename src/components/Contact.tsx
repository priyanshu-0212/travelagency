import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="text-sky-600" size={24} />,
      title: "Call Us",
      details: ["+91 12345 67890", "+91 98765 43210"],
      description: "Available 24/7 for bookings and emergencies"
    },
    {
      icon: <Mail className="text-orange-500" size={24} />,
      title: "Email Us",
      details: ["info@travelstay.com", "bookings@travelstay.com"],
      description: "We respond within 2 hours during business hours"
    },
    {
      icon: <MapPin className="text-red-500" size={24} />,
      title: "Visit Us",
      details: ["123 Mountain View Road", "Hill Station, State 123456"],
      description: "Open daily for walk-in consultations"
    },
    {
      icon: <Clock className="text-green-500" size={24} />,
      title: "Office Hours",
      details: ["Mon-Sun: 24/7", "Office: 9:00 AM - 9:00 PM"],
      description: "Always here when you need us"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to plan your perfect getaway? Contact us for bookings, custom packages, 
            or any questions about our homestay and car rental services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                    <p className="text-gray-500 text-sm mt-1">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/919415269258"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Chat
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-2" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Google Maps integration would go here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="homestay">Homestay Only</option>
                    <option value="car-rental">Car Rental Only</option>
                    <option value="package">Complete Package</option>
                    <option value="custom">Custom Package</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Tell us about your requirements, special requests, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
