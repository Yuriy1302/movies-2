import axios from 'axios';

const apiKey = '05f7db0eb20b02a8803d7f7d0f3fb520';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl=`${url}/movie/now_playing`;
const topratedUrl=`${url}/movie/top_rated`;
const movieUrl=`${url}/movie`;
const genreUrl=`${url}/genre/movie/list`;
const moviesUrl=`${url}/discover/movie`;
const personUrl=`${url}/trending/person/week`;

export const fetchMovies = async () => {
  try {
    const response = await axios.get(nowPlayingUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1
      }
    })
    const { data } = await response;
    
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average
    }));

    //console.log('Now Playing movies: ', modifiedData);

    return modifiedData;
  } catch(err) {
    console.error('Oops! There is an error in fetchMovies: ', err);
  }
}

export const fetchGenre = async () => {
  try {
    const { data } = await axios.get(genreUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1
      }
    })
    const modifiedData = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name']
    }))
    return modifiedData;
  } catch(err) {
    console.error('Oops! There is an error in fetchGenre: ', err);
  }
}

export const fetchMovieByGenre = async (genre_id) => {
  try {
    const { data } = await axios.get(moviesUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1,
        with_genres: genre_id
      }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
      id: m.id,
      backPoster: posterUrl + m.backdrop_path,
      popularity: m.popularity,
      title: m.title,
      poster: posterUrl + m.poster_path,
      overview: m.overview,
      rating: m.vote_average
    }));
    return modifiedData;
  } catch(err) {
    console.error('Oops! There is an error in fetchMovieByGenre: ', err);
  }
}

export const fetchPersons = async () => {
  
}

export const fetchTopratedMovie = async () => {
  
}

export const fetchMovieDetail = async () => {
  
}

export const fetchMovieVideos = async () => {
  
}

export const fetchCasts = async () => {
  
}

export const fetchSimilarMovie = async () => {
  
}
