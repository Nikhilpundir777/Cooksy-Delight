import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CueCard from '../components/CueCard';

const ViewRecipe = () => {
  const { id } = useParams(); // Get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  // Fetch recipe data from the API when the component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      try {


        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}recipe/${id}`)
        // const response=await fetch('http://localhost:3000/api/recipe/67a45696f7b74198e9c2a0fe');
        const data = await response.json();
        setRecipe(data); // Set recipe data from API response
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-background">
        {/* Loading Spinner */}
        <div className="animate-spin border-t-4 border-primary3 border-solid rounded-full h-24 w-24"></div>
      </div>
    ); // Show loading spinner while fetching data
  }

  // Destructure recipe data for easier access
  const {
    title,
    description,
    image,
    cookingTime,
    difficulty,
    servings,
    instructions,
    ingredients,
    nutrition,
    tips,
    equipment,
  } = recipe;

  return (
    <Layout>
      <section className="bg-background">
        {/* Mobile Section */}
        <div className="section-mobile border-1 border-gray-500 mt-2 rounded-2xl h-[242rem] block md:hidden">
          <div className="w-full mx-8 my-16">
            <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
              Recipes
            </div>

            <div className="mx-auto text-center w-2/3 mt-4">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-lg font-normal text-gray-500">{description}</p>
              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>{cookingTime} -</p>
                <p> {difficulty} -</p>
                <p>{servings} SERVES</p>
              </div>
            </div>

            <div className="w-full max-w-[80%] sm:w-3/4 h-[30rem] sm:h-[40rem] rounded-2xl mx-auto mt-8">
              <img className="w-full h-full object-cover rounded-2xl" src={image} alt={title} />
            </div>
          </div>

          <div className="w-[20rem] text-left text-lg font-normal text-gray-500">
            <p>{description}</p>
            <div className="dos w-[20rem]">
              <h1 className="text-3xl text-dark font-semibold">Let’s go over the basics– the do’s, and the don’ts– for How to Cook</h1>

              <h2 className="text-primary3">DO'S</h2>
              <p>
                <span className="text-dark font-medium">Clean Hands and Surfaces: </span>
                {tips[0]}
              </p>
              <p>
                <span className="text-dark font-medium">Use Separate Cutting Boards: </span>
                {tips[1]}
              </p>
              <p>
                <span className="text-dark font-medium">Check Internal Temperature: </span>
                {tips[2]}
              </p>

              <h2 className="text-primary3">DONT'S</h2>
              <p>
                <span className="text-dark font-medium">Thaw Chicken at Room Temperature: </span>
                {tips[3]}
              </p>
              <p>
                <span className="text-dark font-medium">Overcrowd the Pan: </span>
                {tips[4]}
              </p>
            </div>

            <div className="cards w-[25rem] flex flex-col gap-4">
              <CueCard title={"INGREDIENTS"} items={ingredients} />
              <CueCard title={"Equipment Needed for Preparation"} items={equipment} />
              <CueCard title={"NUTRITIONAL VALUE"} items={[
                `Calories: ${nutrition.calories}`,
                `Protein: ${nutrition.protein}`,
                `Fat: ${nutrition.fat}`,
                `Carbohydrates: ${nutrition.carbohydrates}`,
                `Fiber: ${nutrition.fiber}`,
                `Sodium: ${nutrition.sodium}`,
              ]} />
            </div>

            <div className="mt-4">
              <h1 className="text-3xl text-dark font-semibold">INSTRUCTIONS</h1>
              <div className="w-[20rem] text-left text-md font-normal text-gray-500">
                {instructions.map((instruction, index) => (
                  <div key={index}>
                    <p>{instruction}</p>
                    {index < instructions.length - 1 && <hr className="my-4" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Section */}
        <div className="section-desktop border-1 border-gray-500 mt-4 hidden md:block h-[180rem] rounded-2xl">
          <div className="w-full mx-8 my-16">
            <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
              Recipes
            </div>

            <div className="mx-auto text-center w-2/3 mt-4">
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="text-xl font-normal text-gray-500">{description}</p>
              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>{cookingTime} -</p>
                <p>{difficulty} -</p>
                <p>{servings} SERVES</p>
              </div>
            </div>

            <div className="w-3/4 h-[40rem] rounded-2xl mx-auto">
              <img className="w-full h-full object-cover rounded-2xl" src={image} alt={title} />
            </div>
          </div>

          <div className="w-full mx-8 my-16 flex gap-[10rem]">
            <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
              <p>{description}</p>
              <div className="dos w-[35rem]">
                <h1 className="text-3xl text-dark font-semibold">Let’s go over the basics– the do’s, and the don’ts– for How to Cook</h1>
                <h2 className="text-primary3">DO'S</h2>
                <p>
                  <span className="text-dark font-medium">Clean Hands and Surfaces: </span>
                  {tips[0]}
                </p>
                <p>
                  <span className="text-dark font-medium">Use Separate Cutting Boards: </span>
                  {tips[1]}
                </p>
                <p>
                  <span className="text-dark font-medium">Check Internal Temperature: </span>
                  {tips[2]}
                </p>

                <h2 className="text-primary3">DONT'S</h2>
                <p>
                  <span className="text-dark font-medium">Thaw Chicken at Room Temperature: </span>
                  {tips[3]}
                </p>
                <p>
                  <span className="text-dark font-medium">Overcrowd the Pan: </span>
                  {tips[4]}
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-5xl text-dark font-semibold">INSTRUCTIONS</h1>
                <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
                  {instructions.map((instruction, index) => (
                    <div key={index}>
                      <p>{instruction}</p>
                      {index < instructions.length - 1 && <hr className="my-4" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="cards w-[25rem] flex flex-col gap-4">
              <CueCard title={"INGREDIENTS"} items={ingredients} />
              <CueCard title={"Equipment Needed for Preparation"} items={equipment} />
              <CueCard title={"NUTRITIONAL VALUE"} items={[
                `Calories: ${nutrition.calories}`,
                `Protein: ${nutrition.protein}`,
                `Fat: ${nutrition.fat}`,
                `Carbohydrates: ${nutrition.carbohydrates}`,
                `Fiber: ${nutrition.fiber}`,
                `Sodium: ${nutrition.sodium}`,
              ]} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViewRecipe;
