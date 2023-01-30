import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className=" mt-5 opacity-80 h-80 outline-0 rounded-lg overflow-hidden shadow-2xl hover:opacity-100"
          key={index}
        >
          <div className="flex flex-col hover:scale-95   ">
            <div className=" ">
              <img
                src={movie.Poster}
                className="h-72 w-56 rounded-md"
                alt="movie"
              ></img>
            </div>

            <span className=" font-serif text-center">{movie.Title}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
