import React from 'react';
import styled from 'styled-components';
import  Header from './components/Header';
import Pagecontent from './components/Page-content';
import Pagecontentdetails from './components/Page-content-details';

const Baseapp = styled.div`
  text-align: center;
`;

const Content = styled.div`
  padding-left: 15%;
  padding-right: 15%;
`;

function App() {
  return (
    <div className="App">
      <Baseapp>
      <Header></Header>
      <Content>
      <Pagecontent></Pagecontent>
      </Content>
      {/* <Pagecontentdetails></Pagecontentdetails> */}
      </Baseapp>
    </div>
  );
}

export default App;
