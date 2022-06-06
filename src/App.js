import { useEffect, useState } from 'react';
import './styles/App.css';
import SearchIcon from './assets/search.gif'
import MovieCard from './Components/MovieCard';

//1954f6fd
const API_URL = 'http://www.omdbapi.com?apikey=1954f6fd';

const movie1={
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  "Title": "Superman III",
  "Type": "movie",
  "Year": "1983",
  "imdbID": "tt0086393"
    }
const App = () => {
  document.title = "Home"
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('superman');
  },([]));
  return (
        <div className='app'>
          <h1>Movies</h1>
          <div className='search'>
            <input placeholder='search for movies' value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}/>
            <img src={SearchIcon} alt="search"
            onClick={()=>searchMovies(searchTerm)}
            ></img>
          </div>
          {
            movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie)=>(<MovieCard movie={movie}/>))}
          </div>
            )
            :
            (
                <div className="empty">
                  <h3>No movie founded</h3>
                </div>
            )
          }
        </div>
  );
}

export default App;
