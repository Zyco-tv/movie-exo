import React from 'react';
import styled from 'styled-components';
import movieService from '../services/movie.service';
import Movie from '../models/movie';

const EqualDivider = styled.div`
  
`;

const Img = styled.img`
  width: 17%;
  height: 17%;
  margin-left: 10px;
  margin-right: 10px;
`
export default class Pagecontent extends React.Component {
  state = {
    movies: new Array<Movie>()
  }

  componentDidMount() {
    movieService.getMoviePopular()
      .then(res => {
        const movies: Movie[] = res;
        this.setState({ movies });
      })
  }

  render() {
    return (
      <React.Fragment>
        { this.state.movies.map(movie => 
                    <Img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
           
        )}
       </React.Fragment>
    )
  }
}