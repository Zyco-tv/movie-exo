import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

export const Pagecontentdetails = () => {
  const [result, setResult] = useState<number | undefined>();
  useEffect(() => {
    add();
  });

  function add() {
    const a: number = 5;
    const b: number = 10;
    setResult(a + b);
  }
  return (
    <div className="p-3">
      <h3>Added Sum is: {result}</h3>
      <EqualDivider>
                    <SecondDivider>
                    <h1>Titre du film</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipis</p>
                    <p>5/10</p>
                    </SecondDivider>
                    <Img src="https://images.affiches-et-posters.com//albums/3/56170/affiche-film-joker.jpg" />
                </EqualDivider>
    </div>
  );
};

export default Pagecontentdetails;