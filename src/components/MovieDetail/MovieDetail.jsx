import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import ReactStars from 'react-rating-stars-component'; // Проверить почему не работает рейтинг через переменную
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

import { fetchMovieDetail, fetchMovieVideos, fetchCasts, fetchSimilarMovie } from '../../service';

function MovieDetail(props) {
  let { id } = props;
  let genres = [];
  const [ isOpen, setIsOpen ] = useState(false);
  const [ detail, setDetail ] = useState([]);
  const [ video, setVideo ] = useState([]);
  const [ casts, setCasts ] = useState([]);
  const [ similarMovie, setSimilarMovie ] = useState([]);

  console.log('detail: ', detail);
  
  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(id));
      setVideo(await fetchMovieVideos(id));
      setCasts(await fetchCasts(id));
      setSimilarMovie(await fetchSimilarMovie(id));
    };

    fetchAPI();
  }, [id]);

  genres = detail.genres;

  const MoviePlayerModal = (props) => {
    const youtubeUrl = 'https://www.youtube.com/watch?v=';
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: '#000000', fontWeight: 'bolder' }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#000000' }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl + video.key}
            playing
            controls
            width='100%'
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    )
  }

  const genresList = genres && genres.map((g, i) => {
    return (
      <li className="list-inline-item" key={i}>
        <button type="button" className="btn btn-outline-info">
          {g.name}
        </button>
      </li>
    )
  });

  const castList = casts.slice(0, 4).map((c, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          src={c.img}
          alt={c.name}
          className="img-fluid rounded-circle mx-auto d-block"
        />
        <p className="font-weight-bold text-center">{c.name}</p>
        <p className="font-weight-light text-center" style={{ color: '#5a606b' }}>
          {c.character}
        </p>
      </div>
    );
  });

  const similarMovieList = similarMovie.slice(0, 4).map((item, index) => {
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

  

  return (
    <div className="container">
      <div className="row mt-2">
        <MoviePlayerModal
          show={isOpen}
          onHide={() => setIsOpen(false)}
        ></MoviePlayerModal>
        <div className="col text-center" style={{ width: '100%' }}>
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
            className="img-fluid"
          />
          <div className="carousel-center">
            <i
              onClick={() => {setIsOpen(true)}}
              className="bi bi-play-circle"
              style={{ fontSize: 95, color: '#f4c10f', cursor: 'pointer' }}
            ></i>
          </div>
          <div className="carousel-caption" style={{ textAlign: 'center', fontSize: 35 }}>
            {detail.title}
          </div>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col">
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>GENRE</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <ul className="list-inline">
            {genresList}
          </ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <div className="text-center">
            <ReactStars
              count={detail.vote_average}
              /* value={detail.vote_average} */
              size={20}
              color={'#f4c10f'}
            ></ReactStars>
          </div>
          <div className="mt-3">
            <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>OVERVIEW</p>
            {detail.overview}
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-3">
          <p style={{ color: '#5a606b', fontWeight: 'bolder'}}>RELEASE DATE</p>
          <p style={{ color: '#f4c10f'}}>{detail.release_date}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: '#5a606b', fontWeight: 'bolder'}}>RUN TIME</p>
          <p style={{ color: '#f4c10f'}}>{detail.runtime}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: '#5a606b', fontWeight: 'bolder'}}>BUDGET</p>
          <p style={{ color: '#f4c10f'}}>{detail.budget}</p>
        </div>
        <div className="col-md-3">
          <p style={{ color: '#5a606b', fontWeight: 'bolder'}}>HOMEPAGE</p>
          <p style={{ color: '#f4c10f'}}>{detail.homepage}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>CASTS</p>
        </div>
      </div>
      <div className="row mt-3">{castList}</div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: '#5a606b', fontWeight: 'bolder' }}>SIMILAR MOVIES</p>
        </div>
      </div>
      <div className="row mt-3">{similarMovieList}</div>

      <hr className="mt-5" style={{ borderTop: '1px solid #5a606b' }} />

      <div className="row mt-3 mb-5">
        <div className="col-md-8 col-sm-6" style={{ color: '#5a606b'}}>
          <h3>ABOUT ME</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus nemo suscipit quasi fugiat harum aliquam! Itaque, voluptatibus! Dolorem dolore voluptate voluptas illum blanditiis consectetur impedit vitae corrupti numquam temporibus!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iure quae reprehenderit, exercitationem possimus libero sapiente incidunt totam eveniet harum id voluptatem facilis assumenda dolores, deserunt reiciendis cum nesciunt rerum.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/">
                <i className="bi bi-facebook" style={{ color: '#f4c10f' }}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/">
                <i className="bi bi-youtube" style={{ color: '#f4c10f' }}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/">
                <i className="bi bi-twitter" style={{ color: '#f4c10f' }}></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/">
                <i className="bi bi-instagram" style={{ color: '#f4c10f' }}></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6" style={{ color: '#5a606b' }}>
          <h3>KEEP IN TOUCH</h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <i className="bi bi-geo-alt-fill"></i> Address:</strong> city, state, country
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="bi bi-telephone-fill"></i> Phone:</strong> +7 000 000 00 00
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="bi bi-envelope-fill"></i> Email:</strong> info@infomail.com
              </p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default MovieDetail;