import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RBCarousel from 'react-bootstrap-carousel';
import ReactStars from 'react-rating-stars-component';


import './Home.css';

import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import { fetchMovies, fetchGenre, fetchMovieByGenre, fetchPersons, fetchTopratedMovie } from '../../service';

function Home() {
  const [ nowPlaying, setNowPlaying ] = useState([]);
  const [ genres, setGenres ] = useState([]);
  const [ movieByGenre, setMovieByGenre ] = useState([]);
  const [ persons, setPersons ] = useState([]);
  const [ topRated, setTopRated ] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre());
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
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
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
          <p>Rated: {item.rating}</p>
          <ReactStars count={item.rating} size={20} color={'#f4c10f'}></ReactStars>
        </div>
      </div>
    )
  });

  const trandingPersons = persons.slice(0, 4).map((p, index) => {
    return (
      <div className="col-md-3 text-center">
        <img
          src={p.profileImg}
          alt={p.name}
          className="img-fluid rounded-circle mx-auto d-block"
        />
        <p className="font-weight-bold text-center">{p.name}</p>
        <p className="font-weight-light text-center" style={{ color: '#5a606b' }}>
          Trending for {p.known}
        </p>
      </div>
    )
  });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img src={item.poster} alt={item.title} className="img-fluid"/>
          </Link>
        </div>
        <div className="mt-3">
            <p style={{ fontWeight: 'bolder' }}>{item.title}</p>
            <p>Rated: {item.rating}</p>
            <ReactStars count={item.rating} size={20} color={'#f4c10f'}></ReactStars>
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

      <div className="row mt-3">{movieList}</div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: '#5a606b' }}>
            TRENDING PERSONS ON THIS WEEK
          </p>
        </div>
      </div>

      <div className="row mt-3">{trandingPersons}</div>

      <div className="row mt-3">
        <div className="col">
          <p className="font-weight-bold" style={{ color: '#5a606b' }}>
            TOP RATED MOVIES
          </p>
        </div>
      </div>

      <div className="row my-3">{topRatedList}</div>

      <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }} />

      <div className="row mt-3 mb-5">
        <div className="col-md-8 col-sm-6" style={{ color: '#5a606b'}}>
          <h3>ABOUT ME</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus nemo suscipit quasi fugiat harum aliquam! Itaque, voluptatibus! Dolorem dolore voluptate voluptas illum blanditiis consectetur impedit vitae corrupti numquam temporibus!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iure quae reprehenderit, exercitationem possimus libero sapiente incidunt totam eveniet harum id voluptatem facilis assumenda dolores, deserunt reiciendis cum nesciunt rerum.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/" syle={{ color: '#f4c10f' }} >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" syle={{ color: '#f4c10f' }} >
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" syle={{ color: '#f4c10f' }} >
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" syle={{ color: '#f4c10f' }} >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Home;