import React from 'react';
import styled from 'styled-components';
import movieService from '../services/movie.service';
import Movie from '../models/movie';

const EqualDivider = styled.div`
  display: flex;
  padding-left: 19%;
  padding-right: 19%;
`;

const Img = styled.img`
  width: 18%;
  height: 18%;
  margin-left: 10px;
  margin-right: 10px;
    src: url(${props => props.src});
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
      <ul>
        { this.state.movies.map(movie => <li>{movie.title}</li>)}
      </ul>
    )
  }
}