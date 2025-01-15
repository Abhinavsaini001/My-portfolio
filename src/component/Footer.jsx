import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#202327] via-[#2A2D34] to-[#202327] text-white py-10">
      {/* Footer Title and Subscription Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#FF014F] mb-4">ABHI</h2>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-64 bg-gray-800 text-white rounded-md focus:outline-none"
          />
          <button className="ml-2 px-6 py-2 bg-[#FF014F] hover:bg-[#FF4667] text-white rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center mt-8 space-x-8 text-sm">
        <a href="#" className="hover:text-[#FF014F]">
          About Us
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          Our Team
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          Packages
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          Gallery
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          Services
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-6 space-x-4 text-lg">
        <a href="#" className="hover:text-[#FF014F]">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="hover:text-[#FF014F]">
          <i className="fab fa-dribbble"></i>
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-8 text-sm">
        <p>© 2025 Kimono Photography, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
