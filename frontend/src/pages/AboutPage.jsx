const AboutPage = () => {
  return (
    <section className="bg-background">
      {/* Mobile Section */}
      <div className="section-mobile -mt-[15rem] h-[80rem] block border-1 border-gray-300 rounded-2xl shadow:md md:hidden">


      <div className="w-[21rem] h-52 mt-2">
              <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center ">
                ABOUT US
              </div>
              <h1 className="text-3xl font-bold">OUR CULINARY CHRONICLE</h1>
              <p className="font-light text-gray-500 text-sm">
                Our journey is crafted with dedication, creativity, and an
                unrelenting commitment to delivering delightful culinary
                experiences. Join us in savoring the essence of every dish and
                the stories that unfold.
              </p>

              
            </div>

            <div className="h-[55rem] ">

                <img className="w-[20rem] h-[20rem] mt-2" src="/RecipeCard1.png" />

                <img className="w-[20rem] h-[18rem] mt-2" src="/RecipeCard2.png" />

                <img className="w-[20rem] h-[22rem] mt-2" src="/About1.png" />

            </div>













      </div>














      {/* Desktop Section */}
      <div className="section-desktop  h-[48rem] border-1 border-gray-300 rounded-2xl shadow:md hidden md:flex">
        <div className="w-2/3">
          <div className="flex justify-between ml-6 mt-13">
            <div className="w-[23rem] h-52">
              <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center ">
                ABOUT US
              </div>
              <h1 className="text-5xl font-bold">OUR CULINARY CHRONICLE</h1>
              <p className="font-light text-gray-500 text-lg">
                Our journey is crafted with dedication, creativity, and an
                unrelenting commitment to delivering delightful culinary
                experiences. Join us in savoring the essence of every dish and
                the stories that unfold.
              </p>

              <button className="rounded-2xl px-6 py-2 bg-background border-2 border-gray-400 w-52 md:w-42 text-dark mt-2">
                Read More
              </button>
            </div>

            <div className="m-2">
                <img src="/RecipeCard1.png"/>
            </div>


          </div>

          <div className="w-full m-2">
            <img src="/RecipeCard2.png" />

          </div>
        </div>

        <div className="mt-4 h-[47rem]">
            <img src="/About1.png"/>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
