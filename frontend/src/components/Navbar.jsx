import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Default active link is Home

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className="section-desktop h-18 rounded-2xl bg-background shadow-md flex items-center justify-between px-6">
      
      {/* Logo Section (Visible on both desktop and mobile) */}
      <div className="w-42 flex gap-2">
        <img src="/cooking.png" className="w-10 h-9" alt="Logo" />
        <div className="flex flex-col h-9 w-12 font-bold">
          <div>Cooksy</div>
          <div>Delight</div>
        </div>
      </div>

      {/* Desktop Menu Links (Hidden on mobile) */}
      <div className="hidden md:flex h-9 gap-6 items-center font-light">
        <h2
          className={`cursor-pointer ${activeLink === 'Home' ? 'font-semibold border-b-2 border-primary3' : ''}`}
          onClick={() => handleLinkClick('Home')}
        >
          Home
        </h2>
        <h2
          className={`cursor-pointer ${activeLink === 'Recipe' ? 'font-semibold border-b-2 border-primary3' : ''}`}
          onClick={() => handleLinkClick('Recipe')}
        >
          Recipe
        </h2>
        <h2
          className={`cursor-pointer ${activeLink === 'Cooking Tips' ? 'font-semibold border-b-2 border-primary3' : ''}`}
          onClick={() => handleLinkClick('Cooking Tips')}
        >
          Cooking Tips
        </h2>
        <h2
          className={`cursor-pointer ${activeLink === 'About Us' ? 'font-semibold border-b-2 border-primary3' : ''}`}
          onClick={() => handleLinkClick('About Us')}
        >
          About Us
        </h2>
      </div>

      {/* Desktop Sign-Up Button (Hidden on mobile) */}
      <div className="hidden md:block">
        <button className="rounded-2xl px-6 py-3 bg-dark text-background w-32">
          Sign up
        </button>
      </div>

      {/* Mobile Hamburger Button (Visible on mobile only) */}
      <button
        className="md:hidden flex items-center justify-center text-dark focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Menu (Visible only when hamburger is clicked) */}
      {isOpen && (
        <div className="section-mobile absolute top-18 left-0 w-full bg-dark text-background z-10">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {/* Mobile Links */}
            <h2
              className={`cursor-pointer ${activeLink === 'Home' ? 'font-semibold border-b-2 border-primary3' : ''}`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </h2>
            <h2
              className={`cursor-pointer ${activeLink === 'Recipe' ? 'font-semibold border-b-2 border-primary3' : ''}`}
              onClick={() => handleLinkClick('Recipe')}
            >
              Recipe
            </h2>
            <h2
              className={`cursor-pointer ${activeLink === 'Cooking Tips' ? 'font-semibold border-b-2 border-primary3' : ''}`}
              onClick={() => handleLinkClick('Cooking Tips')}
            >
              Cooking Tips
            </h2>
            <h2
              className={`cursor-pointer ${activeLink === 'About Us' ? 'font-semibold border-b-2 border-primary3' : ''}`}
              onClick={() => handleLinkClick('About Us')}
            >
              About Us
            </h2>

            {/* Sign-Up Button in Mobile Menu */}
            <button className="w-full bg-gray-700 text-background py-2 px-4 rounded-xl">
              Sign up
            </button>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
