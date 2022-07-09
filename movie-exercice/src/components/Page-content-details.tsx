import * as React from 'react'
import styled from 'styled-components';
import movieService from '../services/movie.service';
import Movie from '../models/movie';
import { useParams } from "react-router-dom";


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

export default class Pagecontentdetails extends React.Component {
  state = { 
    movie: {} as Movie
  };

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    movieService.getMovieDetails(params.movie_id)
      .then(res => {
        const movie: Movie = res;
        this.setState({ movie });
      })
  }

  render() {
    return (
      
      <EqualDivider>
                    <SecondDivider>
                    <h1>{this.state.movie.title}</h1>
                    <p>{this.state.movie.overview}</p>
                    <p>{this.state.movie.popularity}</p>
                    </SecondDivider>
                    <Img src={'https://image.tmdb.org/t/p/w500' + this.state.movie.poster_path} />

                </EqualDivider>
    )
  }
}


