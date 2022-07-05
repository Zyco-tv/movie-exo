import { useState, useEffect } from 'react';
import styled from 'styled-components';
import movieService from '../services/movie.service';

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
function Pagecontent() {
    const [movies, setMovies] = useState<any[]>([]);
  
    useEffect(() => {
        movieService.getMoviePopular()
        .then((results) => {
            setMovies(results);
            console.log(results);
        })
    }, [])
      return (
        <ul>
          {movies.map(movie => (
            <EqualDivider>
              <li key={movie.id}>
                <p>{movie.title}</p>
                <Img src={movie.poster_path} />
              </li>
            </EqualDivider>
          ))}
        </ul>
      );
  }

  export default Pagecontent;