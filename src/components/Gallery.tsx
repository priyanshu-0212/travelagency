import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Homestay Exterior',
      category: 'Homestay'
    },
    {
      src: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Deluxe Room',
      category: 'Rooms'
    },
    {
      src: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Car Fleet',
      category: 'Vehicles'
    },
    {
      src: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Local Attractions',
      category: 'Attractions'
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Cozy Room Interior',
      category: 'Rooms'
    },
    {
      src: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'SUV for Family Trips',
      category: 'Vehicles'
    },
    {
      src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Adventure Activities',
      category: 'Activities'
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Common Area',
      category: 'Homestay'
    },
    {
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Budget Room',
      category: 'Rooms'
    },
    {
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Romantic Setting',
      category: 'Special'
    },
    {
      src: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Off-road Vehicle',
      category: 'Vehicles'
    },
    {
      src: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      alt: 'Family Fun',
      category: 'Activities'
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const categories = ['All', 'Homestay', 'Rooms', 'Vehicles', 'Activities', 'Attractions', 'Special'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our homestay, vehicle fleet, and the beautiful experiences 
            that await you. See what makes us special through the eyes of our guests.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-sky-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-sky-50 hover:text-sky-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openImage(images.findIndex(img => img.src === image.src))}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>
              
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="font-semibold text-lg">{images[selectedImage].alt}</p>
                <p className="text-sm text-gray-300">
                  {selectedImage + 1} of {images.length} • {images[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Guest Photos CTA */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-sky-50 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We love seeing our guests' perspectives! Share your photos with us on social media 
            using #TravelStayMemories and get featured in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Upload Your Photos
            </button>
            <button className="border-2 border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-full font-semibold transition-colors duration-200">
              Follow on Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;