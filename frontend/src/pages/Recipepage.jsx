import SearchBar from "../components/SearchBar";
import SmallCard from "../components/SmallCard";

const RecipePage = () => {
  return (
    <section className="bg-background">
      {/* Mobile Section */}
      <div className="section-mobile rounded-2xl h-[160rem] block md:hidden">
        <div className="mx-auto w-[26rem]">
          <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
            Recipes
          </div>
          <h1 className="text-5xl font-semibold mt-1 text-center">EMBARK ON A JOURNEY</h1>
          <p className="text-md font-light text-gray-500 text-center">
            With our diverse collection of recipes we have something to satisfy every palate.
          </p>
          <SearchBar />
        </div>

        <div className="flex gap-3 w-[25rem] mt-2 mx-auto">
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            All
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Breakfast
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Lunch
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Dinner
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Dessert
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Quick Bite!
          </button>
        </div>

        <section className="section-mobile h-[150rem] mt-2">
          <div className="cards flex-col mt-2">
            <SmallCard
              image={"/Recipe1.png"}
              title={"Savory Herb-Infused Chicken"}
              desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"}
              time={"40 min"}
              prep={"EASY PREP"}
              serves={"3 SERVES"}
            />
            <SmallCard
              image={"/Recipe3.png"}
              title={"Lemon Grilled Chicken"}
              desc={"Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe"}
              time={"1 hour"}
              prep={"HARD PREP"}
              serves={"4 SERVES"}
            />
            <SmallCard
              image={"/Recipe2.png"}
              title={"Decadent Chocolate Mousse"}
              desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"}
              time={"30 min"}
              prep={"MEDIUM PREP"}
              serves={"4 SERVES"}
            />
          </div>


 
  {/* fetch from backend */}
          <div className="cards flex-col mt-2">
            <SmallCard
              image={"/Recipe1.png"}
              title={"Savory Herb-Infused Chicken"}
              desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"}
              time={"40 min"}
              prep={"EASY PREP"}
              serves={"3 SERVES"}
            />
            <SmallCard
              image={"/Recipe3.png"}
              title={"Lemon Grilled Chicken"}
              desc={"Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe"}
              time={"1 hour"}
              prep={"HARD PREP"}
              serves={"4 SERVES"}
            />
            <SmallCard
              image={"/Recipe2.png"}
              title={"Decadent Chocolate Mousse"}
              desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"}
              time={"30 min"}
              prep={"MEDIUM PREP"}
              serves={"4 SERVES"}
            />
          </div>
        </section>
      </div> {/* End of Mobile Section */}

      {/* Desktop Section */}
      <div className="section-desktop hidden md:block h-[75rem]">
        <div className="mx-auto w-[26rem] mt-4">
          <div className="w-[5rem] h-7 bg-primary3 rounded-xl flex justify-center items-center text-background text-center mx-auto">
            Recipes
          </div>
          <h1 className="text-6xl font-semibold mt-2 text-center">EMBARK ON A JOURNEY</h1>
          <p className="text-md font-light text-gray-500 text-center">
            With our diverse collection of recipes we have something to satisfy every palate.
          </p>
          <SearchBar />
        </div>

        <div className="flex gap-3 w-[55rem] mt-4 mx-auto">
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            All
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Breakfast
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Lunch
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Dinner
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Dessert
          </button>
          <button className="rounded-2xl px-2 bg-primary1 w-26 md:w-28 h-11 text-dark">
            Quick Bite!
          </button>
        </div>

        <section className="section-desktop h-[60rem] mt-4">
          <div className="cards flex gap-2 justify-around mt-4">
            <SmallCard
              image={"/Recipe1.png"}
              title={"Savory Herb-Infused Chicken"}
              desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"}
              time={"40 min"}
              prep={"EASY PREP"}
              serves={"3 SERVES"}
            />
            <SmallCard
              image={"/Recipe3.png"}
              title={"Lemon Grilled Chicken"}
              desc={"Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe"}
              time={"1 hour"}
              prep={"HARD PREP"}
              serves={"4 SERVES"}
            />
            <SmallCard
              image={"/Recipe2.png"}
              title={"Decadent Chocolate Mousse"}
              desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"}
              time={"30 min"}
              prep={"MEDIUM PREP"}
              serves={"4 SERVES"}
            />
          </div>

          {/* fetch from backend */}

          <div className="cards flex gap-2 justify-around mt-4">
            <SmallCard
              image={"/Recipe1.png"}
              title={"Savory Herb-Infused Chicken"}
              desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"}
              time={"40 min"}
              prep={"EASY PREP"}
              serves={"3 SERVES"}
            />
            <SmallCard
              image={"/Recipe3.png"}
              title={"Lemon Grilled Chicken"}
              desc={"Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe"}
              time={"1 hour"}
              prep={"HARD PREP"}
              serves={"4 SERVES"}
            />
            <SmallCard
              image={"/Recipe2.png"}
              title={"Decadent Chocolate Mousse"}
              desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"}
              time={"30 min"}
              prep={"MEDIUM PREP"}
              serves={"4 SERVES"}
            />
          </div>
        </section>
      </div> {/* End of Desktop Section */}
    </section>
  );
};

export default RecipePage;
