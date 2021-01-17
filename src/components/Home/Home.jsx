import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RBCarousel from 'react-bootstrap-carousel';


import './Home.css';

import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import { fetchMovies, fetchGenre, fetchMovieByGenre } from '../../service';

function Home() {
  const [ nowPlaying, setNowPlaying ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ movieByGenre, setMovieByGenre ] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div key={index} className="div-item">
        <div className="carousel-center">
          <img src={item.backPoster} alt={item.title} className="carousel-img" />
        </div>
        <div className="carousel-center">
          <i
            className="bi bi-play-circle"
            style={{ fontSize: 95, color: '#f4c10f' }}
          ></i>
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: 'center', fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    )
  });
  
  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button type="button" className="btn btn-outline-info">
          {item.name}
        </button>
      </li>
    )
  });

  const movieList = movieByGenre.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title} />
            <p>Rated: {item.rating}</p>
          </Link>
        </div>
      </div>
    )
  });

  // console.log('movies: ', movies);
  
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col">
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slideshowSpeed={5000}
            defaultActiveIndex={0}
            version={4}
          >
            {movies}
            </RBCarousel>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">
            {genreList}
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        {movieList}
      </div>
    </div>
  );
}

export default Home;