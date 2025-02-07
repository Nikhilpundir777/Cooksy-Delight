import Layout from "../components/Layout";
import Card from "../components/Card";

const CookingTips = () => {
  return (
    <Layout>
      <section className="bg-background">
        {/* Mobile Section */}
        <div className="section-mobile rounded-2xl h-[216rem] block md:hidden">
          <div className="w-full mx-8 my-16">
            <div className="w-[5rem] h-9 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
              Tips & Tricks
            </div>
            <div className="mx-auto text-center w-2/3 mt-4">
              <h1 className="text-3xl font-bold">Our Essential Cooking Tips</h1>
              <p className="text-lg font-normal text-gray-500">
                Welcome to Cooksy Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
              </p>
            </div>

            <div className="mt-8 w-full max-w-[80%] sm:w-3/4 mx-auto">
              <div className="w-full text-left text-lg font-normal text-gray-500">
                <div className="mt-4">
                  <h2 className="text-primary3">Quality Tools</h2>
                  <p>Invest in high-quality knives, cutting boards, and cookware. Sharp knives are a must for precision and safety in the kitchen, while sturdy cookware ensures even heat distribution for the best results.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Essential Utensils</h2>
                  <p>Have a variety of utensils, including spatulas, tongs, and ladles. Having the right utensil for each task will make your cooking process smoother and more efficient.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Measuring Accuracy</h2>
                  <p>Use measuring cups and spoons for precise ingredient quantities. Accurate measurements can make or break a dish, especially in baking.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Resting Time</h2>
                  <p>Allow meats to rest after cooking. This helps redistribute the juices, ensuring a tender and flavorful result. A 5–10 minute rest period is ideal for most meats.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Sharp Knives</h2>
                  <p>Always keep your knives sharp. A sharp knife cuts more precisely, reduces the risk of accidents, and requires less effort, which helps you work faster and more efficiently.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Taste as You Go</h2>
                  <p>Make sure to taste your food as you cook! Adjusting seasonings as you go will ensure that your dish is perfectly balanced and flavorful.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Preheat Your Pan</h2>
                  <p>Always preheat your pans before cooking. This ensures even cooking and prevents sticking, particularly when searing meats or vegetables.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Proper Storage</h2>
                  <p>Store your ingredients properly to preserve their freshness. For example, store herbs in the fridge with a damp paper towel or in water like flowers for longer shelf life.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Clean as You Go</h2>
                  <p>Clean your tools and workspace as you cook to avoid a cluttered kitchen. This also prevents cross-contamination and ensures a smoother cooking experience.</p>
                </div>

                <div className="mt-4">
                  <h2 className="text-primary3">Use Fresh Ingredients</h2>
                  <p>Whenever possible, use fresh, seasonal ingredients. Fresh produce and quality proteins will always elevate your dish.</p>
                </div>
              </div>
            </div>
          </div>


          <h1 className="text-3xl font-semibold mt-4 ">NEWEST RECIPES</h1>

<div className="cards flex-col gap-4 justify-around mt-4">

    <Card image={"/Recipe1.png"} title={"Savory Herb-Infused Chicken"} desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"} time={"40 min"} prep={"EASY PREP"} serves={"3 SERVES"} recipeId={2}/>
    <Card image={"/Recipe2.png"} title={"Decadent Chocolate Mousse"} desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"} time={"30 min"} prep={"MEDIUM PREP"} serves={"4 SERVES"}/>
</div>



        </div>

        {/* Desktop Section */}
        <div className="section-desktop mt-4 hidden md:block h-[80rem] rounded-2xl">
          <div className="flex w-3/4 justify-between mx-auto">
            <div className="w-[35rem]">
              <h1 className="text-6xl font-semibold uppercase">Our Essential Cooking Tips</h1>
            </div>
            <div className="w-[25rem]">
              <p className="text-center text-gray-500 font-normal">
                Welcome to Cooksy Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
              </p>
            </div>
          </div>

          <div className="flex w-3/4 justify-between mt-8 mx-auto border-1 rounded-xl border-gray-400">
            <div className="mt-4">
              <h2 className="text-primary3">Quality Tools</h2>
              <p>Invest in high-quality knives, cutting boards, and cookware. Sharp knives are a must for precision and safety in the kitchen, while sturdy cookware ensures even heat distribution for the best results.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Essential Utensils</h2>
              <p>Have a variety of utensils, including spatulas, tongs, and ladles. Having the right utensil for each task will make your cooking process smoother and more efficient.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Measuring Accuracy</h2>
              <p>Use measuring cups and spoons for precise ingredient quantities. Accurate measurements can make or break a dish, especially in baking.</p>
            </div>
          </div>

          <div className="flex w-3/4 justify-between mt-4 mx-auto border-1 rounded-xl border-gray-400">
            <div className="mt-4">
              <h2 className="text-primary3">Resting Time</h2>
              <p>Allow meats to rest after cooking. This helps redistribute the juices, ensuring a tender and flavorful result. A 5–10 minute rest period is ideal for most meats.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Sharp Knives</h2>
              <p>Always keep your knives sharp. A sharp knife cuts more precisely, reduces the risk of accidents, and requires less effort, which helps you work faster and more efficiently.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Taste as You Go</h2>
              <p>Make sure to taste your food as you cook! Adjusting seasonings as you go will ensure that your dish is perfectly balanced and flavorful.</p>
            </div>
          </div>

          <div className="flex w-3/4 justify-between mt-4 mx-auto border-1 rounded-xl border-gray-400">
            <div className="mt-4">
              <h2 className="text-primary3">Preheat Your Pan</h2>
              <p>Always preheat your pans before cooking. This ensures even cooking and prevents sticking, particularly when searing meats or vegetables.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Proper Storage</h2>
              <p>Store your ingredients properly to preserve their freshness. For example, store herbs in the fridge with a damp paper towel or in water like flowers for longer shelf life.</p>
            </div>

            <div className="mt-4">
              <h2 className="text-primary3">Clean as You Go</h2>
              <p>Clean your tools and workspace as you cook to avoid a cluttered kitchen. This also prevents cross-contamination and ensures a smoother cooking experience.</p>
            </div>
          </div>

          <div className="flex w-3/4 justify-between mt-4 mx-auto border-1 rounded-xl border-gray-400">
            <div className="mt-4">
              <h2 className="text-primary3">Use Fresh Ingredients</h2>
              <p>Whenever possible, use fresh, seasonal ingredients. Fresh produce and quality proteins will always elevate your dish.</p>
            </div>
          </div>



          <div className="w-[80%] my-6">
          <div className="section-desktop hidden md:block h-[35rem] rounded-2xl">
            <h1 className="text-3xl font-semibold mt-4 ">NEWEST RECIPES</h1>

            <div className="cards flex gap-4 justify-around mt-4">

                <Card image={"/Recipe1.png"} title={"Savory Herb-Infused Chicken"} desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"} time={"40 min"} prep={"EASY PREP"} serves={"3 SERVES"} recipeId={2}/>
                <Card image={"/Recipe2.png"} title={"Decadent Chocolate Mousse"} desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"} time={"30 min"} prep={"MEDIUM PREP"} serves={"4 SERVES"} recipeId={3}/>
            </div>
        </div>




          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookingTips;
