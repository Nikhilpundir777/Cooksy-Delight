import {Link} from 'react-router-dom';

const Card = ({image,title,desc,time,prep,serves,recipeId}) => {
  return (
    <div className=" w-[20rem] md:w-2xl h-[28rem] bg-light rounded-t-4xl">
        <div className="w-full">
        <img src={image} className="w-full bg-contain bg-no-repeat" />
        </div>

        <div className="mx-4 my-4">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-md font-light text-gray-500">{desc}</p>

        </div>
        <div className="flex justify-between items-center mt-14 mx-4">

        <div className="flex gap-1 md:gap-2 text-sm md:text-lg font-normal ">
            <p>{time}-</p>
            <p>{prep}-</p>
            <p>{serves}</p>
        </div>

        <div>
        <Link to={`/viewrecipe/${recipeId}`}>
        <button className=" px-4 rounded-2xl md:px-8 py-2 bg-dark text-background  ">
          View Recipe
        </button>
        </Link>
        </div>

        </div>






    </div>
  )
}

export default Card