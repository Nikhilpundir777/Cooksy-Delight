const CueCard = ({ 
    title, 
    items = [
      "1 whole chicken (about 3-4 pounds)", 
      "2 lemons, sliced", 
      "6 cloves garlic, minced", 
      "2 tablespoons olive oil", 
      "1 teaspoon dried thyme", 
      "1 teaspoon dried rosemary", 
      "Salt and black pepper to taste"
    ] 
  }) => {
    return (
      <div className="w-[20rem]  md:w-[25rem] bg-light rounded-xl shadow-md p-4"> {/* Added padding to the card */}
        <h2 className="text-primary3">{title}</h2>
  
        <div className="w-full text-left mx-auto">
          {/* Added the list style with padding adjustments */}
          <ul className="list-disc pl-6"> {/* Use pl-6 for proper indentation */}
            {items.map((item, index) => (
              <li key={index} className="text-sm"> {/* Text size adjusted for readability */}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CueCard;
  