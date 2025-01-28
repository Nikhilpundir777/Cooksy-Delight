import SubscribeBar from "../components/SubscribeBar";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa"; // Importing icons

const FooterPage = () => {
  return (
    <section>
      {/* Mobile Section */}
      <div className="section-mobile rounded-2xl h-[55rem] block md:hidden ">

      <div className="w-full bg-dark rounded-2xl py-16">
          <div className="w-2/3 items-center text-center text-background mx-auto">
            <h1 className="text-4xl font-bold ">
              Deliciousness <br />
              to your inbox
            </h1>
            <p className="font-thin text-lg">
              Enjoy weekly hand-picked recipes and recommendations, cooking
              tips, and exclusive insights straight to your inbox
            </p>

        {/* Input Box */}
      <input 
        type="email" 
        name="email" 
        className="w-full border h-12 px-4 mb-4 rounded-full shadow-md dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary3"
        placeholder="Enter your email..." 
        required 
      />

      {/* Subscribe Button */}
      <button 
        type="submit" 
        className="w-full p-3 bg-primary3 rounded-full text-white hover:bg-primary3/80 focus:outline-none"
      >
        Subscribe Now
      </button>
     


            
          </div>
        </div>


        <div className="w-full h-[24rem] bg-primary1 rounded-2xl mt-4">
          <div className="w-2/3  mx-auto py-6">
            {/* Logo Section */}
            <div className="flex gap-2 items-center">
              <img src="/cooking.png" className="w-10 h-9" alt="Logo" />
              <div className="flex flex-col font-bold">
                <div>Cooksy</div>
                <div>Delight</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-col mx-auto gap-8 text-lg items-center font-extralight">
              <h2 className="hover:text-gray-950 hover:font-semibold  cursor-pointer">
                Home
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                Recipes
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                Cooking Tips
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                About Us
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex mt-2 gap-6 items-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
            </div>
          </div>
          <p className="text-center mt-4 font-extralight">
                Copyright: © 2024 Cooksy Delight.<br />
                <hr />
                <p className="text-center mt-4 font-extralight">
                Designed by Nikhil Pundir
                </p>
            

             </p>
        </div>













      </div>

      {/* Desktop Section */}
      <div className="section-desktop hidden md:block h-[30rem] rounded-2xl mt-4">
        <div className="w-full bg-dark rounded-2xl py-16">
          <div className="w-2/3 items-center text-center text-background mx-auto">
            <h1 className="text-6xl font-bold ">
              Deliciousness <br />
              to your inbox
            </h1>
            <p className="font-thin text-2xl">
              Enjoy weekly hand-picked recipes and recommendations, cooking
              tips, and exclusive insights straight to your inbox
            </p>

            <SubscribeBar />
          </div>
        </div>

        <div className="w-full h-[12rem] bg-primary1 rounded-2xl mt-4">
          <div className="w-2/3 flex justify-between mx-auto py-6">
            {/* Logo Section */}
            <div className="flex gap-2 items-center">
              <img src="/cooking.png" className="w-10 h-9" alt="Logo" />
              <div className="flex flex-col font-bold">
                <div>Cooksy</div>
                <div>Delight</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8 text-lg items-center font-extralight">
              <h2 className="hover:text-gray-950 hover:font-semibold  cursor-pointer">
                Home
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                Recipes
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                Cooking Tips
              </h2>
              <h2 className="hover:text-gray-950 hover:font-semibold cursor-pointer">
                About Us
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 items-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-dark text-2xl font-light hover:text-gray-950 hover:font-extrabold cursor-pointer" />
              </a>
            </div>
          </div>
          <p className="text-center mt-4 font-extralight">
                Copyright: © 2024 Cooksy Delight.<br />
                <hr />
                <p className="text-center mt-4 font-extralight">
                Designed by Nikhil Pundir
                </p>
            

             </p>
        </div>
      </div>
    </section>
  );
};

export default FooterPage;
