import React from "react";
import Navbar from "../components/navbar";
import MovieCard from "../components/movie_card";
import SearchBox from "../components/searchBar";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourite, setFavourite] = useState([]);

  const displayMovie = async () => {
    const url = "https://www.omdbapi.com/?s=over&apikey=a753a8d7";
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.Search);
  };
  const getMovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a753a8d7`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    if (!searchValue) {
      displayMovie();
    }
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="min-h-screen bg-slate-200 ">
        <Navbar />

        <div className=" ">
          <div className="mt-3 flex justify-center ">
            <SearchBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
          <div className="flex items-center flex-wrap  justify-center space-x-3 hover: ">
            <MovieCard movies={movies} favourite={favourite} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
