import CueCard from "../components/CueCard";
import Layout from "../components/Layout";
const ViewRecipe1 = () => {
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
    <h1 className="text-3xl font-bold">
      Lemon Garlic Roasted Chicken
    </h1>
    <p className="text-lg font-normal text-gray-500">
      Welcome to Cooksy Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Citrus Infusion Delight: Lemon Garlic Roasted Chicken.
    </p>

    <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
      <p>1 HOUR -</p>
      <p> HARD PREP -</p>
      <p>4 SERVES </p>
    </div>
  </div>

  <div className="w-full max-w-[80%] sm:w-3/4 h-[30rem] sm:h-[40rem] rounded-2xl mx-auto mt-8">
    <img
      className="w-full h-full object-cover rounded-2xl"
      src="/Recipe3.png"
      alt="Lemon Garlic Roasted Chicken"
    />
  </div>
</div>

<div className="w-[20rem] text-left text-lg font-normal text-gray-500">
              <p>
                Picture succulent chicken infused with the bright notes of lemon
                and the aromatic richness of garlic. It's a symphony of flavors
                that will have your taste buds dancing. Join us as we delve into
                the art of roasting the secrets behind creating a masterpiece
                that's not just a meal but a celebration of culinary
                craftsmanship.
              </p>{" "}
              <p>
                As you preheat your oven, envision the kitchen filling with the
                tantalizing aroma of herbs and citrus, setting the stage for a
                delightful meal that transcends the ordinary. The anticipation
                builds as the chicken roasts to golden perfection, promising a
                dining experience that marries simplicity with sophistication.
                Whether you're a seasoned chef or a kitchen novice, this recipe
                invites you to become a culinary artist, creating a masterpiece
                that will leave a lasting impression on your guests and loved
                ones.
              </p>

              <div className="dos w-[20rem]">
                <h1 className="text-3xl text-dark font-semibold">
                  Let’s go over the basics– the do’s, and the don’ts– for How to
                  Cook a chicken
                </h1>

                <h2 className="text-primary3">DO'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thoroughly Clean Hands and Surfaces:{" "}
                  </span>
                  Before and after handling raw chicken, ensure your hands,
                  utensils, and surfaces are clean to prevent
                  cross-contamination.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Use Separate Cutting Boards:{" "}
                  </span>
                  Dedicate specific cutting boards for raw chicken to avoid the
                  spread of bacteria to other foods.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Check Internal Temperature:{" "}
                  </span>
                  Invest in a reliable meat thermometer to ensure the chicken
                  reaches the safe internal temperature of 165°F (74°C).
                </p>


                <h2 className="text-primary3">DONT'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thaw Chicken at Room Temperature:
                  </span>
                  Avoid thawing chicken on the counter. Instead, thaw it in the
                  refrigerator to prevent bacterial growth.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Overcrowd the Pan:{" "}
                  </span>
                  When roasting, ensure the chicken pieces have space between
                  them for even cooking. Overcrowding can lead to unevenly
                  cooked chicken.
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
                  "Calories: ~250",
                  "Protein: ~30g",
                  "Total Fat: ~13g",
                  "Carbohydrates: ~5g",
                ]}
              />
            </div>



            <div className="mt-4">
                <h1 className="text-3xl text-dark font-semibold">INSTRUCTIONS</h1>
                <div className="w-[20rem] text-left text-md font-normal text-gray-500">
                  <p>This recipe goes beyond the basics, inviting you to savor the richness of a creamy tomato basil sauce that clings to each strand of perfectly cooked pasta. It's a celebration of simplicity, where every ingredient plays a crucial role in creating a dish that is as comforting as it is delightful.</p>

                <p>
                Allow the chicken to rest for 10 minutes before carving. This brief resting period is essential; it allows the juices to redistribute, ensuring each slice is succulent and bursting with flavor. As you carve into the golden exterior, be prepared for the enticing aroma that fills the air, signaling that your Citrus Infusion Delight is ready to be savored.
                </p>

                <h2 className="text-primary3">Preheat and Prepare</h2>
                
                  <p className="text-gray-500 font-light">
                  Preheat your oven to 375°F (190°C).
                  </p>
                  <p>
                  Rinse the chicken inside and out, then pat it dry with paper towels.
                  </p>


                  <h2 className="text-primary3">Roast to Perfection</h2>
                
                <p className="text-gray-500 font-light">
                Place the chicken in a roasting pan, breast side up.
                </p>
                <p>
                Roast in the preheated oven for approximately 1 hour or until the internal temperature reaches 165°F (74°C).
                </p>
                <p>
                Serve with the pan juices and roasted lemon slices for an extra burst of flavor.
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
              <h1 className="text-5xl font-bold">
                Lemon Garlic Roasted Chicken
              </h1>
              <p className="text-xl font-normal text-gray-500">
                Welcome to Cooksy Delight, where culinary dreams come alive!
                Today, we embark on a journey of flavors with a dish that
                promises to elevate your dining experience – our Citrus Infusion
                Delight: Lemon Garlic Roasted Chicken.
              </p>

              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>1 HOUR -</p>
                <p> HARD PREP -</p>
                <p>4 SERVES </p>
              </div>
            </div>

            <div className="w-3/4 h-[40rem] rounded-2xl mx-auto">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/Recipe3.png"
              />
            </div>
          </div>

          <div className="w-full mx-8 my-16 flex gap-[10rem]">
            <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
              <p>
                Picture succulent chicken infused with the bright notes of lemon
                and the aromatic richness of garlic. It's a symphony of flavors
                that will have your taste buds dancing. Join us as we delve into
                the art of roasting the secrets behind creating a masterpiece
                that's not just a meal but a celebration of culinary
                craftsmanship.
              </p>{" "}
              <p>
                As you preheat your oven, envision the kitchen filling with the
                tantalizing aroma of herbs and citrus, setting the stage for a
                delightful meal that transcends the ordinary. The anticipation
                builds as the chicken roasts to golden perfection, promising a
                dining experience that marries simplicity with sophistication.
                Whether you're a seasoned chef or a kitchen novice, this recipe
                invites you to become a culinary artist, creating a masterpiece
                that will leave a lasting impression on your guests and loved
                ones.
              </p>
              <div className="dos w-[35rem]">
                <h1 className="text-3xl text-dark font-semibold">
                  Let’s go over the basics– the do’s, and the don’ts– for How to
                  Cook a chicken
                </h1>

                <h2 className="text-primary3">DO'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thoroughly Clean Hands and Surfaces:{" "}
                  </span>
                  Before and after handling raw chicken, ensure your hands,
                  utensils, and surfaces are clean to prevent
                  cross-contamination.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Use Separate Cutting Boards:{" "}
                  </span>
                  Dedicate specific cutting boards for raw chicken to avoid the
                  spread of bacteria to other foods.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Check Internal Temperature:{" "}
                  </span>
                  Invest in a reliable meat thermometer to ensure the chicken
                  reaches the safe internal temperature of 165°F (74°C).
                </p>

              

                <h2 className="text-primary3">DONT'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Thaw Chicken at Room Temperature:
                  </span>
                  Avoid thawing chicken on the counter. Instead, thaw it in the
                  refrigerator to prevent bacterial growth.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Overcrowd the Pan:{" "}
                  </span>
                  When roasting, ensure the chicken pieces have space between
                  them for even cooking. Overcrowding can lead to unevenly
                  cooked chicken.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-5xl text-dark font-semibold">INSTRUCTIONS</h1>
                <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
                  <p>This recipe goes beyond the basics, inviting you to savor the richness of a creamy tomato basil sauce that clings to each strand of perfectly cooked pasta. It's a celebration of simplicity, where every ingredient plays a crucial role in creating a dish that is as comforting as it is delightful.</p>

                <p>
                Allow the chicken to rest for 10 minutes before carving. This brief resting period is essential; it allows the juices to redistribute, ensuring each slice is succulent and bursting with flavor. As you carve into the golden exterior, be prepared for the enticing aroma that fills the air, signaling that your Citrus Infusion Delight is ready to be savored.
                </p>

                <h2 className="text-primary3">Preheat and Prepare</h2>
                
                  <p className="text-gray-500 font-light">
                  Preheat your oven to 375°F (190°C).
                  </p>
                  <p>
                  Rinse the chicken inside and out, then pat it dry with paper towels.
                  </p>


                  <h2 className="text-primary3">Roast to Perfection</h2>
                
                <p className="text-gray-500 font-light">
                Place the chicken in a roasting pan, breast side up.
                </p>
                <p>
                Roast in the preheated oven for approximately 1 hour or until the internal temperature reaches 165°F (74°C).
                </p>
                <p>
                Serve with the pan juices and roasted lemon slices for an extra burst of flavor.
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
                  "Calories: ~250",
                  "Protein: ~30g",
                  "Total Fat: ~13g",
                  "Carbohydrates: ~5g",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViewRecipe1;
