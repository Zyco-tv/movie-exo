import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Pagecontent from './components/Page-content';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MovieDetails from './components/Movie-details';

const Baseapp = styled.div`
  text-align: center;
`;

const Content = styled.div`
  padding-left: 15%;
  padding-right: 15%;
`;

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Baseapp>
          <Header></Header>
          <Switch>
            <Route exact path='/movie/:movie_id' component={MovieDetails} />
            <Route>
              <div className="App">

                <Content>
                  <Pagecontent></Pagecontent>
                </Content>
              </div>
            </Route>
          </Switch>
        </Baseapp>
      </Router>);
  }
}