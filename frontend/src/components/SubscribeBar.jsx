const SubscribeBar = () => {
    return (
      <div className="flex justify-center items-center h-16 w-full px-4">
        <form action="/subscribe" className="w-full max-w-[600px] flex items-center">
          <div className="relative w-full">
            {/* Email Input Field */}
            <input 
              type="email" 
              name="email" 
              className="w-full border h-12 px-4 rounded-full shadow-md dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary3" 
              placeholder="Enter your email..." 
              required 
            />
            {/* Subscribe Button */}
            <button 
              type="submit" 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-primary3 rounded-full text-white hover:bg-primary3/80 focus:outline-none"
            >
              Subscribe Now
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default SubscribeBar;
  