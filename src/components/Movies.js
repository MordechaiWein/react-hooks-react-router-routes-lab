import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesToDispaly = movies.map((movie) => {
    return (
      <div key={movie.title}>
      <h3>
      Name: {movie.title}
      </h3>
      <p>
      time: {movie.time}
      </p>
      <p>
      Genres:
     </p>
     <ul>
      {
        movie.genres.map((item) => {
          return (
           <li key={item}>{item}</li>
          )
        })
      }
     </ul>
    </div>  
      
    )
  })

  return (
   <div>
     <h1>Movies Page</h1>
     {moviesToDispaly}
   </div>
  )
}

export default Movies;
