import React from "react";
import Navbar from "../components/navbar";
import MovieCard from "../components/movie_card";
import { useState, useEffect } from "react";
const Homepage = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = "https://www.omdbapi.com/?s=war&apikey=a753a8d7";
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="min-h-screen bg-slate-200 ">
      <Navbar />
      <div className=" ">
        <div className="mt-3 flex justify-center ">
          <input
            type="text"
            className=" w-80 text-center h-9 rounded-md outline-0 border-2 border-slate-900 "
            placeholder="Search"
          />
        </div>
        <div className="flex items-center flex-wrap  justify-center space-x-3 hover: ">
          <MovieCard movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
