const SmallCard = ({ image, title, desc, time, prep, serves }) => {
    return (
      <div className="w-[20rem] md:w-[25rem] bg-light rounded-xl shadow-lg overflow-hidden flex flex-col">
        {/* Image */}
        <div className="w-full h-2/3">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
  
        {/* Text Content */}
        <div className="p-4 flex-1">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm font-light text-gray-600">{desc}</p>
        </div>
  
        {/* Footer with Time, Prep, Serves, and Button */}
        <div className="flex justify-between items-center p-4 mt-2">
          <div className="flex gap-2 text-xs md:text-sm font-normal">
            <p>{time}</p>
            <p>{prep}</p>
            <p>{serves}</p>
          </div>
  
          <button className="px-4 py-1 bg-dark text-background rounded-full text-xs md:text-sm hover:bg-dark/80">
            View Recipe
          </button>
        </div>
      </div>
    );
  };
  
  export default SmallCard;
  