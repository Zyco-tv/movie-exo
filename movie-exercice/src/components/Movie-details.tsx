import * as React from 'react'
import styled from 'styled-components';
import movieService from '../services/movie.service';
import Movie from '../models/movie';
import { RouteComponentProps, useParams } from "react-router-dom";


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
const SecondDivider = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;

export interface MovieDetailsPropsInterface extends RouteComponentProps { }

export interface MovieDetailsStateInterface {
  movie?: Movie;
}

export default class MovieDetails extends React.Component<MovieDetailsPropsInterface, MovieDetailsStateInterface> {
 
  componentDidMount() {
    movieService.getMovieDetails(this.props.match.params as number)
      .then(res => {
        const movie: Movie = res;
        this.setState({ movie });
      })

  }

  render() {
    if (this.state.movie !== undefined) {
      return (
        <EqualDivider>
          <Img src={'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path} />
          <SecondDivider>
            <h1>{this.state.movie.title}</h1>
            <p>{this.state.movie.overview}</p>
          </SecondDivider>
        </EqualDivider>
      )
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}


