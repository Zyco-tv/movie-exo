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
const SecondDivider = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
export default class Pagecontentdetails extends React.Component {
  state = {
    movies: new Array<Movie>()
  }

  componentDidMount() {
    movieService.getMovieDetails()
      .then(res => {
        const movies: Movie = res;
        this.setState({ movies });
      })
  }

  render() {
    return (
      
      <EqualDivider>
                    <SecondDivider>
                    </SecondDivider>
                    <Img src="https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg" />

                </EqualDivider>
    )
  }
}
