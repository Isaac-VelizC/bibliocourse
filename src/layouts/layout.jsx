import React, { useState, useEffect } from 'react';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

const Layout = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBackToTopClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {children}
        <Footer />
        {showBackToTop && (
          <a href="#" className="back-to-top" onClick={handleBackToTopClick}>
            <i className="fa fa-angle-up"></i>
          </a>
        )}
      </main>
    </>
  );
};

export default Layout;
