import React from 'react';
import styled from 'styled-components';
import movieService from '../services/movie.service';
import Movie from '../models/movie';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Pagecontentdetails from './Page-content-details';
import { render } from "react-dom";
import App from '../App';


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
        <HashRouter>
        <Switch>
          <Route path="/:movie_id" component={Pagecontentdetails} />
            <Link to={"" + movie.id}>
              <Img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} />
              </Link>
        </Switch>
      </HashRouter>
        )}
       </React.Fragment>
    )
  }
}
const rootElement = document.getElementById("root");
render(<App />, rootElement);