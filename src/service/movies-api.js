import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2a1327efd59ca204186229b27a9568f6';

export async function getTrendingMovies(page = 1) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(
      `${BASE_URL}/trending/movie/week?page=${page}`,
      { params }
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMoviesBySearch(name) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      query: name,
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/search/movie?`, {
      params,
    });

    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieDetails(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}?`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMovieCast(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?`, {
      params,
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
}
export async function getMovieReviews(id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?`, {
      params,
    });
    
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
}
