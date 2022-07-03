import React from 'react';
import styled from 'styled-components';
import  Header from './components/Header';
import Pagecontent from './components/Page-content';

const Baseapp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      <Baseapp>
      <Header></Header>
      <Pagecontent></Pagecontent>
      </Baseapp>
    </div>
  );
}

export default App;
