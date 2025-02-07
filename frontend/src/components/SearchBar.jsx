const SearchBar = ({ setSearchQuery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.q.value;
    setSearchQuery(query); // Use setSearchQuery to update the search query state
  };

  return (
    <div className="flex justify-center items-center h-16 w-full px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-[600px] flex items-center">
        <div className="relative w-full">
          <input 
            type="text" 
            name="q" 
            className="w-full border h-12 px-4 rounded-full shadow-md dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary3" 
            placeholder="Search for a recipe..." 
          />
          <button 
            type="submit" 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary3 rounded-full text-white hover:bg-primary3/80 focus:outline-none"
          >
            <svg 
              className="h-5 w-5 fill-current dark:text-dark" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              version="1.1" 
              x="0px" 
              y="0px" 
              viewBox="0 0 56.966 56.966" 
              style={{ enableBackground: "new 0 0 56.966 56.966" }} 
              xmlSpace="preserve"
            >
              <path 
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
