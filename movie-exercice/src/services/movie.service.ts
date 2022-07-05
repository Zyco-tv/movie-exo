import * as React from 'react';
import http from "../http-common";
import Movie from '../models/movie';

export class MovieService {


    public async getMoviePopular(): Promise<Movie> {
        const response = await http.get('/movie/popular');
        return response.data;
    }

    public async getMovieSearch(): Promise<Array<Movie>> {
        const response = await http.get('/search/movie');
        return response.data;
    }

    public async getMovieDetails(): Promise<Movie> {
        const response = await http.get('/api/movie/{movie_id}');
        return response.data;
    }

}

export default new MovieService();