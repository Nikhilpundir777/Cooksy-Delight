import CueCard from "../components/CueCard";
import Layout from "../components/Layout";

const ViewRecipe3 = () => {
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
              <h1 className="text-3xl font-bold">Decadent Chocolate Mousse</h1>
              <p className="text-lg font-normal text-gray-500">
                Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!
              </p>

              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>30 MIN -</p>
                <p> MEDIUM PREP -</p>
                <p>4 SERVES</p>
              </div>
            </div>

            <div className="w-full max-w-[80%] sm:w-3/4 h-[30rem] sm:h-[40rem] rounded-2xl mx-auto mt-8">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/Recipe2.png"
                alt="Decadent Chocolate Mousse"
              />
            </div>
          </div>

          <div className="w-[20rem] text-left text-lg font-normal text-gray-500">
            <p>
              Indulge in the silky richness of this chocolate mousse, where dark chocolate meets a delicate mousse texture. With just a hint of sweetness, this dessert is the perfect balance of decadence and elegance.
            </p>
            <p>
              Whether you’re hosting a special occasion or enjoying a quiet evening at home, this mousse is sure to satisfy every chocolate craving. It's quick to prepare and even quicker to disappear!
            </p>

            <div className="dos w-[20rem]">
              <h1 className="text-3xl text-dark font-semibold">
                Let’s go over the basics– the do’s, and the don’ts– for Making Chocolate Mousse
              </h1>

              <h2 className="text-primary3">DO'S</h2>
              <p>
                <span className="text-dark font-medium">
                  Use High-Quality Chocolate:{" "}
                </span>
                The chocolate is the star of the show—choose a high-quality dark chocolate (70% cocoa or higher) for the best flavor.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Chill the Mousse:{" "}
                </span>
                Allow the mousse to chill in the fridge for at least 2 hours. This ensures the mousse sets properly and develops its full flavor.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Whip the Cream Carefully:{" "}
                </span>
                Whip the cream until stiff peaks form, but don’t over-whip it—this will help create the light, airy texture that mousse is known for.
              </p>

              <h2 className="text-primary3">DONT'S</h2>
              <p>
                <span className="text-dark font-medium">
                  Overheat the Chocolate:
                </span>
                Be careful not to overheat the chocolate when melting. Use a double boiler or microwave in short bursts to prevent burning.
              </p>
              <p>
                <span className="text-dark font-medium">
                  Skip the Chilling Time:{" "}
                </span>
                Don’t skip the chilling time; the mousse needs time to set and develop its creamy texture.
              </p>
            </div>
          </div>

          <div className="cards w-[25rem] flex flex-col gap-4">
            <CueCard title={"INGREDIENTS"} />

            <CueCard
              title={"Equipment Needed for Preparation"}
              items={[
                "Mixing bowls",
                "Double boiler or microwave-safe bowl",
                "Whisk or electric mixer",
                "Serving glasses or bowls",
              ]}
            />

            <CueCard
              title={"NUTRITIONAL VALUE"}
              items={[
                "Calories: ~350",
                "Protein: ~5g",
                "Total Fat: ~30g",
                "Carbohydrates: ~25g",
              ]}
            />
          </div>

          <div className="mt-4">
            <h1 className="text-3xl text-dark font-semibold">INSTRUCTIONS</h1>
            <div className="w-[20rem] text-left text-md font-normal text-gray-500">
              <p>
                This mousse is a luxurious dessert that combines creamy texture with the rich flavor of dark chocolate. Perfect for any occasion where chocolate cravings strike!
              </p>

              <p>
                Be sure to let the mousse rest and chill in the fridge for the best experience—tender, airy, and rich in every bite.
              </p>

              <h2 className="text-primary3">Melt the Chocolate</h2>
              <p className="text-gray-500 font-light">
                Chop the dark chocolate into small pieces and melt using a double boiler or microwave. Stir occasionally until fully melted and smooth.
              </p>
              <p>
                Let the melted chocolate cool to room temperature while you prepare the other ingredients.
              </p>

              <h2 className="text-primary3">Whip the Cream</h2>
              <p className="text-gray-500 font-light">
                In a separate bowl, whip the heavy cream until stiff peaks form. Be careful not to over-whip, as the cream will turn into butter.
              </p>

              <h2 className="text-primary3">Fold Everything Together</h2>
              <p className="text-gray-500 font-light">
                Gently fold the cooled melted chocolate into the whipped cream, making sure to incorporate everything smoothly without deflating the whipped cream.
              </p>
              <p>
                Once fully combined, spoon the mousse into serving glasses or bowls and refrigerate for at least 2 hours to allow it to set.
              </p>

              <p>
                Garnish with chocolate shavings, whipped cream, or berries, and serve. Enjoy this melt-in-your-mouth, decadent treat!
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
              <h1 className="text-5xl font-bold">Decadent Chocolate Mousse</h1>
              <p className="text-xl font-normal text-gray-500">
                Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!
              </p>

              <div className="flex gap-4 mt-4 font-semibold justify-center text-center">
                <p>30 MIN -</p>
                <p> MEDIUM PREP -</p>
                <p>4 SERVES</p>
              </div>
            </div>

            <div className="w-3/4 h-[40rem] rounded-2xl mx-auto">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="/Recipe2.png"
                alt="Decadent Chocolate Mousse"
              />
            </div>
          </div>

          <div className="w-full mx-8 my-16 flex gap-[10rem]">
            <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
              <p>
                Indulge in the silky richness of this chocolate mousse, where dark chocolate meets a delicate mousse texture. With just a hint of sweetness, this dessert is the perfect balance of decadence and elegance.
              </p>
              <p>
                Whether you’re hosting a special occasion or enjoying a quiet evening at home, this mousse is sure to satisfy every chocolate craving. It's quick to prepare and even quicker to disappear!
              </p>
              <div className="dos w-[35rem]">
                <h1 className="text-3xl text-dark font-semibold">
                  Let’s go over the basics– the do’s, and the don’ts– for Making Chocolate Mousse
                </h1>

                <h2 className="text-primary3">DO'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Use High-Quality Chocolate:{" "}
                  </span>
                  The chocolate is the star of the show—choose a high-quality dark chocolate (70% cocoa or higher) for the best flavor.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Chill the Mousse:{" "}
                  </span>
                  Allow the mousse to chill in the fridge for at least 2 hours. This ensures the mousse sets properly and develops its full flavor.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Whip the Cream Carefully:{" "}
                  </span>
                  Whip the cream until stiff peaks form, but don’t over-whip it—this will help create the light, airy texture that mousse is known for.
                </p>

                <h2 className="text-primary3">DONT'S</h2>
                <p>
                  <span className="text-dark font-medium">
                    Overheat the Chocolate:
                  </span>
                  Be careful not to overheat the chocolate when melting. Use a double boiler or microwave in short bursts to prevent burning.
                </p>
                <p>
                  <span className="text-dark font-medium">
                    Skip the Chilling Time:{" "}
                  </span>
                  Don’t skip the chilling time; the mousse needs time to set and develop its creamy texture.
                </p>
              </div>

              <div className="mt-4">
                <h1 className="text-5xl text-dark font-semibold">INSTRUCTIONS</h1>
                <div className="w-[25rem] text-left text-lg font-normal text-gray-500">
                  <p>
                    This mousse is a luxurious dessert that combines creamy texture with the rich flavor of dark chocolate. Perfect for any occasion where chocolate cravings strike!
                  </p>

                  <p>
                    Be sure to let the mousse rest and chill in the fridge for the best experience—tender, airy, and rich in every bite.
                  </p>

                  <h2 className="text-primary3">Melt the Chocolate</h2>
                  <p className="text-gray-500 font-light">
                    Chop the dark chocolate into small pieces and melt using a double boiler or microwave. Stir occasionally until fully melted and smooth.
                  </p>
                  <p>
                    Let the melted chocolate cool to room temperature while you prepare the other ingredients.
                  </p>

                  <h2 className="text-primary3">Whip the Cream</h2>
                  <p className="text-gray-500 font-light">
                    In a separate bowl, whip the heavy cream until stiff peaks form. Be careful not to over-whip, as the cream will turn into butter.
                  </p>

                  <h2 className="text-primary3">Fold Everything Together</h2>
                  <p className="text-gray-500 font-light">
                    Gently fold the cooled melted chocolate into the whipped cream, making sure to incorporate everything smoothly without deflating the whipped cream.
                  </p>
                  <p>
                    Once fully combined, spoon the mousse into serving glasses or bowls and refrigerate for at least 2 hours to allow it to set.
                  </p>

                  <p>
                    Garnish with chocolate shavings, whipped cream, or berries, and serve. Enjoy this melt-in-your-mouth, decadent treat!
                  </p>
                </div>
              </div>
            </div>

            <div className="cards w-[25rem] flex flex-col gap-4">
              <CueCard title={"INGREDIENTS"} />

              <CueCard
                title={"Equipment Needed for Preparation"}
                items={[
                  "Mixing bowls",
                  "Double boiler or microwave-safe bowl",
                  "Whisk or electric mixer",
                  "Serving glasses or bowls",
                ]}
              />

              <CueCard
                title={"NUTRITIONAL VALUE"}
                items={[
                  "Calories: ~350",
                  "Protein: ~5g",
                  "Total Fat: ~30g",
                  "Carbohydrates: ~25g",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ViewRecipe3;
