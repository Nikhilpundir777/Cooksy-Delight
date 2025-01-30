import CueCard from "../components/CueCard";
import Layout from "../components/Layout";

const ViewRecipe2 = () => {
  return (
    <Layout>
      <section className="bg-background">
        {/* Mobile Section */}
        <div className="section-mobile border-1 border-gray-500 mt-2 rounded-2xl h-[242rem]  block md:hidden ">
          <div className="w-full mx-8 my-16">
            <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
              Recipes
            </div>

            <div className="mx-auto text-center w-2/3 mt-4">
              <h1 className="text-3xl font-bold">Savory Herb-Infused Chicken</h1>
              <p className="text-lg font-normal text-gray-500">
                Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken, a dish that brings the perfect balance of herbs and spices to your plate. A simple yet elegant way to elevate your dining experience.
              </p>

              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>40 MIN -</p>
                <p> EASY PREP -</p>
                <p>3 SERVES </p>
              </div>
            </div>

            <div className="w-full max-w-[80%] sm:w-3/4 h-[30rem] sm:h-[40rem] rounded-2xl mx-auto mt-8">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/Recipe1.png"
                alt="Savory Herb-Infused Chicken"
              />
            </div>
          </div>

          <div className="w-[20rem] text-left text-lg font-normal text-gray-500">
            <p>
              Picture tender, juicy chicken infused with a blend of aromatic herbs and spices. The savory aroma will fill your kitchen as you prepare this delicious dish that brings out the best in every ingredient.
            </p>
            <p>
              As you roast this herb-infused masterpiece, anticipate the comforting flavors of rosemary, thyme, and garlic coming together to create a dish that’s as satisfying as it is flavorful. Whether you're cooking for family or guests, this recipe is guaranteed to impress.
            </p>

            <div className="dos w-[20rem]">
              <h1 className="text-3xl text-dark font-semibold">
                Let’s go over the basics– the do’s, and the don’ts– for How to Cook a chicken
              </h1>

              <h2 className="text-primary3">DO'S</h2>
              <p>
                <span className="text-dark font-medium">
                  Thoroughly Clean Hands and Surfaces:{" "}
                </span>
                Before and after handling raw chicken, ensure your hands, utensils, and surfaces are clean to prevent cross-contamination.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Use Separate Cutting Boards:{" "}
                </span>
                Dedicate specific cutting boards for raw chicken to avoid the spread of bacteria to other foods.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Check Internal Temperature:{" "}
                </span>
                Invest in a reliable meat thermometer to ensure the chicken reaches the safe internal temperature of 165°F (74°C).
              </p>

              <h2 className="text-primary3">DONT'S</h2>
              <p>
                <span className="text-dark font-medium">
                  Thaw Chicken at Room Temperature:
                </span>
                Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to prevent bacterial growth.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Overcrowd the Pan:{" "}
                </span>
                When roasting, ensure the chicken pieces have space between them for even cooking. Overcrowding can lead to unevenly cooked chicken.
              </p>
            </div>
          </div>

          <div className="cards w-[25rem] flex flex-col gap-4">
            <CueCard title={"INGREDIENTS"} />

            <CueCard
              title={"Equipment Needed for Preparation"}
              items={[
                "Roasting pan",
                "Meat thermometer",
                "Cutting board",
                "Kitchen twine",
              ]}
            />

            <CueCard
              title={"NUTRITIONAL VALUE"}
              items={[
                "Calories: ~280",
                "Protein: ~28g",
                "Total Fat: ~15g",
                "Carbohydrates: ~4g",
              ]}
            />
          </div>

          <div className="mt-4">
            <h1 className="text-3xl text-dark font-semibold">INSTRUCTIONS</h1>
            <div className="w-[20rem] text-left text-md font-normal text-gray-500">
              <p>
                This dish celebrates the vibrant flavors of fresh herbs, with a simple yet effective technique to infuse your chicken with maximum flavor. The result is a meal that feels both comforting and elegant.
              </p>

              <p>
                Allow the chicken to rest for 10 minutes before carving. This brief resting period ensures the juices redistribute, guaranteeing each bite is tender and flavorful.
              </p>

              <h2 className="text-primary3">Preheat and Prepare</h2>
              <p className="text-gray-500 font-light">
                Preheat your oven to 375°F (190°C).
              </p>
              <p>
                Rinse the chicken inside and out, then pat it dry with paper towels. This step is important for getting a crispy skin.
              </p>

              <h2 className="text-primary3">Roast to Perfection</h2>
              <p className="text-gray-500 font-light">
                Rub the chicken with a mix of your chosen herbs and seasoning.
              </p>
              <p>
                Place the chicken in a roasting pan, breast side up, and roast in the preheated oven for about 40 minutes, or until the internal temperature reaches 165°F (74°C).
              </p>
              <p>
                Serve with your favorite roasted vegetables and enjoy the savory, herb-infused goodness!
              </p>
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
              <h1 className="text-5xl font-bold">Savory Herb-Infused Chicken</h1>
              <p className="text-xl font-normal text-gray-500">
                Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken, a dish that brings the perfect balance of herbs and spices to your plate. A simple yet elegant way to elevate your dining experience.
              </p>

              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>40 MIN -</p>
                <p> EASY PREP -</p>
                <p>3 SERVES </p>
              </div>
            </div>

            <div className="w-3/4 h-[40rem] rounded-2xl mx-auto">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/Recipe1.png"
                alt="Savory Herb-Infused Chicken"
              />
            </div>
          </div>

          <div className="w-full mx-8 my-16 flex gap-[10rem]">
            <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
              <p>
                Picture tender, juicy chicken infused with a blend of aromatic herbs and spices. The savory aroma will fill your kitchen as you prepare this delicious dish that brings out the best in every ingredient.
              </p>
              <p>
                As you roast this herb-infused masterpiece, anticipate the comforting flavors of rosemary, thyme, and garlic coming together to create a dish that’s as satisfying as it is flavorful.
              </p>
              <div className="dos w-[35rem]">
                <h1 className="text-3xl text-dark font-semibold">
                  Let’s go over the basics– the do’s, and the don’ts– for How to Cook a chicken
                </h1>

                <h2 className="text-primary3">DO'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thoroughly Clean Hands and Surfaces:{" "}
                  </span>
                  Before and after handling raw chicken, ensure your hands, utensils, and surfaces are clean to prevent cross-contamination.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Use Separate Cutting Boards:{" "}
                  </span>
                  Dedicate specific cutting boards for raw chicken to avoid the spread of bacteria to other foods.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Check Internal Temperature:{" "}
                  </span>
                  Invest in a reliable meat thermometer to ensure the chicken reaches the safe internal temperature of 165°F (74°C).
                </p>

                <h2 className="text-primary3">DONT'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thaw Chicken at Room Temperature:
                  </span>
                  Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to prevent bacterial growth.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Overcrowd the Pan:{" "}
                  </span>
                  When roasting, ensure the chicken pieces have space between them for even cooking. Overcrowding can lead to unevenly cooked chicken.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-5xl text-dark font-semibold">INSTRUCTIONS</h1>
                <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
                  <p>
                    This dish celebrates the vibrant flavors of fresh herbs, with a simple yet effective technique to infuse your chicken with maximum flavor. The result is a meal that feels both comforting and elegant.
                  </p>

                  <p>
                    Allow the chicken to rest for 10 minutes before carving. This brief resting period ensures the juices redistribute, guaranteeing each bite is tender and flavorful.
                  </p>

                  <h2 className="text-primary3">Preheat and Prepare</h2>
                  <p className="text-gray-500 font-light">
                    Preheat your oven to 375°F (190°C).
                  </p>
                  <p>
                    Rinse the chicken inside and out, then pat it dry with paper towels. This step is important for getting a crispy skin.
                  </p>

                  <h2 className="text-primary3">Roast to Perfection</h2>
                  <p className="text-gray-500 font-light">
                    Rub the chicken with a mix of your chosen herbs and seasoning.
                  </p>
                  <p>
                    Place the chicken in a roasting pan, breast side up, and roast in the preheated oven for about 40 minutes, or until the internal temperature reaches 165°F (74°C).
                  </p>
                  <p>
                    Serve with your favorite roasted vegetables and enjoy the savory, herb-infused goodness!
                  </p>
                </div>
              </div>
            </div>

            <div className="cards w-[25rem] flex flex-col gap-4">
              <CueCard title={"INGREDIENTS"} />

              <CueCard
                title={"Equipment Needed for Preparation"}
                items={[
                  "Roasting pan",
                  "Meat thermometer",
                  "Cutting board",
                  "Kitchen twine",
                ]}
              />

              <CueCard
                title={"NUTRITIONAL VALUE"}
                items={[
                  "Calories: ~280",
                  "Protein: ~28g",
                  "Total Fat: ~15g",
                  "Carbohydrates: ~4g",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViewRecipe2;
