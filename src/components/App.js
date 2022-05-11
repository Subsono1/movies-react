import "./App.css";
import React, { useState, useEffect } from "react";
import Header from './Header'
import Movie from './Movie'
import Search from './Search'

const MOVIE_API_URL = "http://www.omdbapi.com/?s=man&apikey=35a11af"

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);//EMPTY ARRAY
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.jason())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search)
        setLoading(false)
      })
  }, [])
  
  const search = searchValue => {
    setLoading(true)
    setErrorMessage(null)

    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=35a11af`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
    })
  }
  
  return <div>this is React.</div>;
}

export default App;
