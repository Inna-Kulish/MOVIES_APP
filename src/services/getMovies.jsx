import {moviesApi} from './movies-api'

export const getTrendMovies = async() => {
return await moviesApi.fetchMovies('trending/movie/day?');
}

export const getMovieById = async(id) => {
    return await moviesApi.fetchMovies(`movie/${id}?`)
}

export const getCast = async(id) => {
    return await moviesApi.fetchMovies(`movie/${id}/credits?`)
}

export const getReviews = async(id) => {
    return await moviesApi.fetchMovies(`movie/${id}/reviews?`)
}

export const searchMovies = async(query) => {
    return await moviesApi.fetchMovies(`search/movie?query=${query}&`)
}