import React, { useState, useEffect } from 'react';
import "./row.css";
import axios from "../../../utils/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);  // Use an array for movies
  const baseUrl = "https://image.tmdb.org/t/p/w500"; // Correct URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetch URL:", fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log("Request data:", request.data);
        setMovies(request.data.results);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);  // Fix dependency array

  return (
    <div className="row">
      <h1> {title}</h1>
      <div className="row-posters">
        {movies?.map((movie,index)=>(
      <img key={index} src={`${baseUrl}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
      className={`row-poster ${isLargeRow && "row-posterLarge"}`} />))}
      
      </div>
    </div>
  );
};

export default Row;
