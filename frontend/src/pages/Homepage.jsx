import Navbar from "../components/Navbar";

const Homepage = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    
    <div className="pt-2 md:pt-4">
      <Navbar />
      
      {/* Hero Section */}
      <section id="homepage" className="section-desktop section-mobile h-[30rem] md:h-[35rem] bg-[url('/hero.jpg')] bg-cover bg-center mt-2 md:mt-4">
        
        <div className="mx-auto w-4/5 md:w-2/3 text-background py-8 md:py-[7rem] text-center">
          <h1 className="text-4xl md:text-8xl font-bold">
            Unleash Culinary Excellence
          </h1>

          <div className="mt-4">
            <h2 className="text-lg md:text-4xl font-normal">
              Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
            </h2>
          </div>

          <div className="mt-6">
            <button className="rounded-2xl px-6 py-2 bg-primary2 w-52 md:w-42 text-dark"
             onClick={() => {
              scrollToSection('recipePage'); 
            }}
            
            >
              Explore Recipes
            </button>
          </div>

        </div>
        
      </section>
    </div>
  );
}

export default Homepage;
