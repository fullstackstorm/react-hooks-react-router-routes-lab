import React from "react";
import { movies } from "../data";
import {v4 as uuid} from "uuid";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={uuid()}>
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={uuid()}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
