import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HomestaySection from './components/HomestaySection';
import CarRentalSection from './components/CarRentalSection';
import PackagesSection from './components/PackagesSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HomestaySection />
        <CarRentalSection />
        <PackagesSection />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;