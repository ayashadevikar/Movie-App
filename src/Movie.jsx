import React from "react"

function Movie({search}){
   return (

      <div className="movieData">
              
            
      {search? (
        search.map((Search) => (
           <div key={Search.imdbID} className='movieList'>
                 <h1>{Search.Title}</h1>
                 <p>{Search.Year}</p>
                 <img src={Search.Poster} alt="" />
           </div>
       )) 
       ) : (
            <p className="noResult">No Movie Found!</p>
        )}
              </div>
         
        
       
       
   )
}

export default Movie