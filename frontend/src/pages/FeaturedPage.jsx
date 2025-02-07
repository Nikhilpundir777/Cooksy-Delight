import Card from "../components/Card";

const FeaturedPage = () => {
    return (
      <section className="bg-background">
        {/* Mobile Section */}
        <div className="section-mobile rounded-2xl h-[70rem]  block md:hidden ">

        <h1 className="text-3xl font-semibold mt-4 ">FEATURED RECIPES</h1>

<div className="cards flex-col gap-4 justify-around mt-4">

    <Card image={"/Recipe1.png"} title={"Savory Herb-Infused Chicken"} desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"} time={"40 min"} prep={"EASY PREP"} serves={"3 SERVES"} recipeId={2}/>
    <Card image={"/Recipe2.png"} title={"Decadent Chocolate Mousse"} desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"} time={"30 min"} prep={"MEDIUM PREP"} serves={"4 SERVES"}  recipeId={3}/>
</div>
          
        </div>
  
        {/* Desktop Section */}
        <div className="section-desktop hidden md:block h-[35rem] rounded-2xl">
            <h1 className="text-3xl font-semibold mt-4 ">FEATURED RECIPES</h1>

            <div className="cards flex gap-4 justify-around mt-4">

                <Card image={"/Recipe1.png"} title={"Savory Herb-Infused Chicken"} desc={"Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken"} time={"40 min"} prep={"EASY PREP"} serves={"3 SERVES"} recipeId={2}/>
                <Card image={"/Recipe2.png"} title={"Decadent Chocolate Mousse"} desc={"Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!"} time={"30 min"} prep={"MEDIUM PREP"} serves={"4 SERVES"} recipeId={3}/>
            </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedPage;
  