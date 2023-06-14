import React,{useState} from 'react';

export default function Moviesearch(){
    
    const [query,setQuery]=useState('')
    const [movies,setMovies]=useState([])
    
    
    const searchMovie = async (e)=>{
        e.preventDefault();
        console.log("summit")
        // const query="Jurassic Park"
        const url=`https://api.themoviedb.org/3/search/movie?api_key=Your_api&language=en-US&query=${query}&page=1& include_adult=false`;
        const res=await fetch(url)
        const data=await res.json()
        setMovies(data.results)
    }

    return(
        <>
            <div className="form_container">
                <form className="form" onSubmit={searchMovie}>
                    <lable className="lable" htmlFor="query">Movie Name:-</lable>
                    <input
                        className="input"
                        type="text"
                        name="query"
                        placeholder="Enter movie"
                        value={query}
                        onChange={(e)=> setQuery(e.target.value)}
                    />
                    <button className="button" type="summit">Search</button>
                </form>
            </div>   
            
            <div className="card-list">
  {movies.filter(movie=>movie.poster_path).map(movie=>(
    <div className="card" key={movie.id}>
      <img className="card-image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
      <div className="card-content">
        <h2 className="card-title">{movie.title}</h2>
      </div>
      <p>
        <small className="small-text">RELEASE DATE: {movie.release_data}</small>
      </p>
      <p>
        <small className="small-text">RATING: {movie.vote_average}</small>
      </p>
      <p className="card-desc">{movie.overview}</p>
    </div>
  ))}
</div>

        </>
        
        
    )
    
    
}