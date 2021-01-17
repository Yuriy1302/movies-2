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
  try {
    const { data } = await axios.get(personUrl, {
      params: {
        api_key: apiKey,
      }
    });
    const modifiedData = data['results'].map((p) => ({
      id: p['id'],
      popularity: p['popularity'],

      name: p['name'],
      profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
      known: p['known_for_department']
    }));
    return modifiedData;
  } catch(err) {
    console.error('Oops! There is an error in fetchPersons: ', err);
  }
}

export const fetchTopratedMovie = async () => {
  try{
    const { data } = await axios.get(topratedUrl, {
      params: {
        api_key: apiKey,
        language: 'ru-RU',
        page: 1
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
    console.error('Oops! There is an error in fetchTopratedMovie: ', err);
  }
}

export const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}`, {
      params: {
        api_key: apiKey,
        language: 'ru-RU'
      }
    });
    return data;
  } catch(err) {
    console.error('Oops! There is an error in fetchMovieDetail: ', err);
  }
}

export const fetchMovieVideos = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/videos`, {
      params: {
        api_key: apiKey
      }
    });
    return data['results'][0];
  } catch(err) {
    console.error('Oops! There is an error in fetchMovieVideos: ', err);
  }
}

export const fetchCasts = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
      params: {
        api_key: apiKey
      }
    });
    const modifiedData = data['cast'].map((c) => ({
      id: c['cast_id'],
      character: c['character'],
      name: c['name'],
      img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
    }));
    return modifiedData;
  } catch(err) {
    console.error('Oops! There is an error in fetchCasts: ', err);
  }
}

export const fetchSimilarMovie = async (id) => {
  try {
    const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
      params: {
        api_key: apiKey,
        language: 'en-US'
      }
    });
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
    console.error('Oops! There is an error in fetchSimilarMovie: ', err);
  }
}

