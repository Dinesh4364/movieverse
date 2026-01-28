import React, { useEffect } from "react";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";
import { useState } from "react";
import { getTrendingmovies, updateSearchCount } from "./appwrite.js";
import AutoScrollMovies from "./components/AutoScrollMovies.jsx";
//import { useDebounce } from 'react-use';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json', //to get the data in json format
    Authorization: `Bearer ${API_KEY}` //to authorize the request with the API key
  }
};
const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);



  //function to search movies
  const searchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;  //fetch all popular movies
      const response = await fetch(endpoint, API_OPTIONS);  //sending a letter to a service and getting a reply from it
      //alert(response);
      //if we not get thr response from the server
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json(); //extracting json data from the response
      console.log(data);

      setMovieList(data.results || []);
      // Only update popularMovies if no search query
      if (!query) {
        setPopularMovies(data.results || []);
      }

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    }
    catch (error) {
      console.log("Error fetching search results: ", error);
      setErrorMessage("Failed to fetch search results. Please try  later.");
    }
    finally {
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingmovies();
      setTrendingMovies(movies);
    }
    catch (error) {
      console.log("Error loading trending movies: ", error);
    }
  }

  useEffect(() => {
    //if(!debouncedSearchTerm.trim()) return; //to avoid searching for empty string
    const timer = setTimeout(() => {
      searchMovies(searchTerm);
    }, 800);
    return () => clearTimeout(timer); //cleanup function to clear the timer
  }, [searchTerm]);

  //useeffect for loading trending movies on initial render
  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>

      <div className="pattern" />
      <div className="wrapper">
        <header>
          <AutoScrollMovies movies={popularMovies} /> {/* always show popular movies */}

          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Searches</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => ( //using {} -- we need to use return keyword but if we use () -- it will return by default
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}

        </section>
      </div>
    </main>
  );
}
export default App;