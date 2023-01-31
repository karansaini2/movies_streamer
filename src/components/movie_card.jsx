import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className=" mt-5 opacity-80 h-72 outline-0 rounded-lg overflow-hidden shadow-2xl hover:opacity-100 "
          key={index}
        >
          <div
            className="flex flex-col cursor-pointer hover:scale-75 ease-in duration-300"
            onClick={() => props.handleFavouriteClick(movie)}
          >
            <div className=" h-72 w-56">
              <img
                src={movie.Poster}
                className="h-72 w-60 rounded-md"
                alt="movie"
              ></img>
            </div>
            <div className="flex justify-center py-1 ">
              <span className=" font-serif text-center ">{movie.Title}</span>
              <button className="mx-2">
                <i className="fa-regular fa-heart  "></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
