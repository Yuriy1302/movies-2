import React, { useState, useEffect } from 'react';

import './Content.css';

import { fetchMovies } from '../../service';

function Content() {
  const [ movies, setMovies ] = useState([]);

  const getMovies = () => {
    fetchMovies().then(res => setMovies(res));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="content">
      {
        movies.length === 0 ? null
          : movies.map((m) => (
              <div className="movie-card">
                <img src={m.backPoster} alt="" style={{ width: '100%' }} />
                <h3>{m.title}</h3>
                <p>{m.overview}</p>
                <span>{m.rating}</span>
                <img src={m.poster} alt="" style={{ width: '50%' }} />
              </div>
            ))
      }
      
    </div>
  )

}

export default Content;