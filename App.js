import {useState, useEffect} from 'react';
//14431d8a
import MovieCart from './MovieCart';
import './App.css';
import SearchIcon from './search.svg';
const API_URL ='http://www.omdbapi.com?apikey=14431d8a';
const movie1={
    
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
    }

const App = () => {

   const[movies, setMovies]=useState([]);
   const[searchTerm, setSearchTerm]= useState('')
   const searchMovies = async(title)=>{
   const response = await fetch(`${API_URL}&s=${title}`);
   const data = await response.json();
   setMovies(data.Search);
}
    useEffect( () =>{
            searchMovies('spiderman');
    },[]);
    return (
        
        <div className="app">
        <h1> MovieLand</h1>
        <div className="search">
        <input
        placeholder="enter your movie name"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)} 
        />
           <img
           src={SearchIcon}
           alt="search"
             onClick={()=> searchMovies(searchTerm)}
             /> 
        </div>
        
{
        movies?.length > 0
        ?( 
        <div className="container"> 
      {movies.map((movie)=>(
        <MovieCart movie = {movie}/>
     ) )}
    </div>
    ):
    (
        <div className="empty">
            <h2>
                No movies found
            </h2>

        </div>
    )
}    
    </div>
    );
}
export default App;
 