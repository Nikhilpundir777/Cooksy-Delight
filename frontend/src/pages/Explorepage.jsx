const Explorepage = () => {
  return (
    <div>
      {/* Mobile view */}
      <div className="section-mobile block md:hidden bg-primary1 rounded-2xl h-[60rem] mt-4">



      <div className="w-[16rem] flex flex-col items-start mx-auto">
          <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mb-6">
            Explore
          </div>
          <h2 className="text-6xl text-dark">
            Our Diverse <br />
            Palette
          </h2>
          <p className="text-xl font-light text-gray-500 mt-4">
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <div className="mt-6">
            <button className="rounded-2xl px-6 py-2 bg-dark w-52 md:w-42 text-background">
              See More
            </button>
          </div>
        </div>

        {/* Right Section (BREAKFAST/LUNCH/DESSERT) */}
        <div className="w-[16rem] mx-auto flex flex-col items-center mt-6 md:mt-0 font-semibold">
          {/* Row for Icon and Breakfast */}
          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon1.png" className="w-10 h-10" />
            <h2 className="text-right">BREAKFAST</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />

          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon2.png" className="w-10 h-10" />
            <h2 className="text-right">LUNCH</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />


          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon3.png" className="w-10 h-10" />
            <h2 className="text-right">DINNER</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />



          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon4.png" className="w-10 h-10" />
            <h2 className="text-right">DESSERT</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />


          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon5.png" className="w-10 h-10" />
            <h2 className="text-right">QUICK BITE !</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />
        </div>


       
      </div>

      {/* Desktop view */}
      <div className="section-desktop hidden md:flex bg-primary1 rounded-2xl justify-between px-20 py-12 mt-4">
        {/* Left Section (Explore) */}
        <div className="w-[26rem] flex flex-col items-start">
          <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mb-6">
            Explore
          </div>
          <h2 className="text-6xl text-dark">
            Our Diverse <br />
            Palette
          </h2>
          <p className="text-xl font-light text-gray-500 mt-4">
            If you are a breakfast enthusiast, a connoisseur of savory delights,
            or on the lookout for irresistible desserts, our curated selection
            has something to satisfy every palate.
          </p>
          <div className="mt-6">
            <button className="rounded-2xl px-6 py-2 bg-dark w-52 md:w-42 text-background">
              See More
            </button>
          </div>
        </div>

        {/* Right Section (BREAKFAST/LUNCH/DESSERT) */}
        <div className="w-[26rem] flex flex-col items-center mt-6 md:mt-0 font-semibold">
          {/* Row for Icon and Breakfast */}
          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon1.png" className="w-10 h-10" />
            <h2 className="text-right">BREAKFAST</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />

          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon2.png" className="w-10 h-10" />
            <h2 className="text-right">LUNCH</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />


          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon3.png" className="w-10 h-10" />
            <h2 className="text-right">DINNER</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />



          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon4.png" className="w-10 h-10" />
            <h2 className="text-right">DESSERT</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />


          <div className="w-full h-19 flex justify-between items-center">
            <img src="/Icon5.png" className="w-10 h-10" />
            <h2 className="text-right">QUICK BITE !</h2>
          </div>

          {/* Horizontal Line */}
          <hr className="w-full text-dark h-1" />
        </div>
      </div>
    </div>
  );
};

export default Explorepage;
